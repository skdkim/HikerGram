import React from 'react';
import Modal from 'react-modal';

import ProfileModalStyle from './profile_modal_style';
import CapsuleHeader from '../feed/capsule_header';
import CapsuleInfo from '../feed/capsule_info';

class UserPhotoIndex extends React.Component {
  constructor(props){
    // debugger
    super(props);
    this.state = {
      modalOpen: false,
      location: "profile",
      photoId: "",
      src: "",
      description: "",
      currentUserLikes: "",
      photo: "",
      commentss: [],
      comment: "",
      currentUserId: props.currentUser.id
    };
    this.commentss = "";
    this.deleteButtonClass = "";
    this.currentUser = props.currentUser;
    this.currentUserId = props.currentUser.id;
  }

  // componentDidMount(){
  //   let photo = document.getElementsByClassName("square-box")[0];
  //   console.log(photo);
  //   photo.onmouseover = (() => {
  //     console.log("hello");
  //   });
  // }

  _handleClick(photo){

    return e => {
      if (document.getElementsByClassName("show")[0]){
        document.getElementsByClassName("show")[0].classList.remove("show");
      }

      e.preventDefault();
      // debugger
      this.setState({
        modalOpen: true,
        src: photo.image_url,
        description: photo.description,
        currentUserLikes: photo.currentUserLikes,
        photoId: photo.id,
        heartClass: photo.currentUserLikes ? "redHeartSprite" : "openHeartSprite",
        likesCount: 100,
        photo: photo,
        commentss: Object.keys(photo.comments).map(key => photo.comments[key])
      });
    };
  }

  onModalClose(){
    this.setState({ modalOpen: false });
  }

  toggleLike(e){
    // debugger
    e.preventDefault();
    if (this.state.heartClass === "openHeartSprite"){
      this.props.createLike({photo_id: this.state.photo.id, user_id: this.props.currentUser.id});
      this.setState({heartClass: "redHeartSprite", likesCount: this.state.likesCount + 1});
    } else {
      this.props.destroyLike(this.state.photo.id);
      this.setState({heartClass: "openHeartSprite", likesCount: this.state.likesCount - 1});
    }
    // debugger
  }

  handleDeleteComment(comment){
    // debugger
    this.props.destroyComment(comment.comment_id);
  }

  handleCommentChange(e){
    e.preventDefault();
    const comment = e.target.value;
    this.setState({ comment });
  }

  handleCommentEnter(e){
    e.preventDefault();
    // debugger
    this.props.createComment({comment_text: this.state.comment, photo_id: this.state.photo.id, user_id: this.props.currentUser.id});
    this.setState({comment: ""});
  }

  // let heart = <span onClick={this.giveLike.bind(this)} className="openHeartSprite">like</span>;
  //   if(this.state.currentUserLikes){
  //     heart = <span onClick={this.unLike.bind(this)} className="redHeartSprite">like</span>;
  //     }

  _handleMouseEnter(photo){

    return e => {
      e.preventDefault();
      e.target.previousSibling.classList.add("show");

      this.setState({
        likesCount: photo.photoLikes,
        commentss: Object.keys(photo.comments).map(key => photo.comments[key])
      });
    };
  }

  _handleMouseLeave(e){
    e.preventDefault();
    if (document.getElementsByClassName("show")[0]){
      document.getElementsByClassName("show")[0].classList.remove("show");
    }  }

  componentWillReceiveProps(newProps){
    if (this.state.modalOpen){
      this.setState({photo: newProps.profilePhotos[this.state.photo.id]});
    }
  }

  handleDoubleClick(e){
    e.preventDefault();

    if (!this.state.currentUserLikes){
      this.props.createLike({photo_id: this.state.photoId, user_id: this.state.currentUserId});
    }
  }

  render(){
    let descript;
    const photoss = Object.keys(this.props.profilePhotos).map(key => this.props.profilePhotos[key]);
    let modal;
    if(this.props.route === "profile"){
      modal = <Modal
                style={ProfileModalStyle}
                className="profile-modal"
                isOpen={this.state.modalOpen}
                onRequestClose={this.onModalClose.bind(this)}>

                <div className="modal-container">
                  <div className="mc-photo" onDoubleClick={this.handleDoubleClick.bind(this)}>
                    <img src={this.state.src}/>
                  </div>

                  <div className="mc-info">
                    <CapsuleHeader
                      user={this.state.photo.user}
                      onRequestClose={this.onModalClose.bind(this)}/>
                    <CapsuleInfo
                      createComment={this.props.createComment}
                      destroyComment={this.props.destroyComment}
                      currentUser={this.props.currentUser}
                      createLike={this.props.createLike}
                      destroyLike={this.props.destroyLike}
                      photo={this.state.photo}
                      onRequestClose={this.onModalClose.bind(this)} />
                  </div>
                </div>
              </Modal>;
    } else {
      modal = <Modal
                style={ProfileModalStyle}
                className="profile-modal"
                isOpen={this.state.modalOpen}
                onRequestClose={this.onModalClose.bind(this)}>

                <div className="modal-container">
                  <div className="mc-photo">
                      <CapsuleHeader
                        user={this.state.photo.user}
                        onRequestClose={this.onModalClose.bind(this)}/>
                      <img src={this.state.src}/>
                  </div>
                </div>
              </Modal>;
    }

    return (
      <div className="photos-container">
        {
          photoss.map((photo, idx) => {
            if (photo.comments){
              descript = (
                <li className="fpid-comment">
                  <a href={`#/profile/${photo.user.id}`}>
                    <h1 className="feed-sbt mr-5">
                      {photo.user.username}
                    </h1>
                  </a>
                  <span className="feed-sbt nbt"> {photo.description}</span>
                </li>
              );
            } else {
              descript = (<div></div>);
            }
            if (photo.image_url){
              return (
                <div className="square-box" key={idx}>
                  <div  onMouseLeave={this._handleMouseLeave} onClick={this._handleClick(photo)} className="overlay square-box">
                    <div className="photoInfo">
                      <div className="photoStats">
                        <div className="photoStats">
                          <span className="whiteHeartSprite">like</span>
                          <span> {this.state.likesCount}</span>
                        </div>

                        <div className="photoStats">
                          <span className="commentSprite">like</span>
                          <span> {this.state.commentss.length}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img onMouseEnter={this._handleMouseEnter(photo)} onClick={this._handleClick(photo)} key={idx} value={photo.description} className="square-box" src={photo.image_url} />
                </div>
              );
            } else {
              return (<img key={idx} className="square-box dp-none"></img>);
            }
          })
        }

        <Modal
          style={ProfileModalStyle}
          className="profile-modal"
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose.bind(this)}>

          <div className="modal-container">
            <div className="mc-photo">
              <img src={this.state.src}/>
            </div>
            { modal }
          </div>
        </Modal>


      </div>
    );
  }
}

export default UserPhotoIndex;
