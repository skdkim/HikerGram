import React from 'react';
import MasonryInfiniteScroller from 'react-masonry-infinite';
import Masonry from 'react-masonry-component';
import Modal from 'react-modal';

import ProfileModalStyle from './profile_modal_style';
import CapsuleHeader from '../feed/capsule_header';
import CapsuleInfo from '../feed/capsule_info';

let masonryOptions = {
  transitionDuration: 0
};

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

  _handleClick(photo){
    // debugger
    return e => {
      e.preventDefault();
      this.setState({
        modalOpen: true,
        src: photo.image_url,
        description: photo.description,
        currentUserLikes: photo.currentUserLikes,
        photoId: photo.id,
        heartClass: photo.currentUserLikes ? "redHeartSprite" : "openHeartSprite",
        likesCount: photo.likesCount,
        photo: photo,
        commentss: Object.keys(photo.comments).map(key => photo.comments[key])
      });
      // this.commentss = Object.keys(photo.comments).map(key => photo.comments[key]);

      // debugger
    };
  }

  onModalClose(){
    this.setState({ modalOpen: false });
  }

  toggleLike(e){
    // debugger
    // e.preventDefault();
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
  render(){
    let descript;


    return (
      <div className="photos-container">
        {
          this.props.profilePhotos.map((photo, idx) => {
            // debugger

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
            return (
              <img onClick={this._handleClick(photo)} key={idx} value={photo.description} className="square-box" src={photo.image_url} />
            );
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

            <div className="mc-info">
              <CapsuleHeader user={this.props.user}/>

              <div className="fp-info">
                <div className="inner-fp-info">
                  <div className="fpi-likes">
                    <span className="fpil-text">
                      <span className="feed-sbt">{this.state.likesCount}</span>
                      <span className="feed-sbt nbt"> likes</span>
                    </span>
                  </div>
                  <div className="fpi-description">

                    <ul className="fpid-comments">
                      {descript}
                      {
                        this.state.commentss.map((comment, idx) => {
                          // if (comment.commentor_id === this.props.currentUser.id || comment.photoOwner === this.props.currentUser.id){
                          //   this.deleteButtonClass =  "delete-comment";
                          // } else {
                          //   this.deleteButtonClass = "dp-none";
                          // }
                          // debugger
                          return (
                            <li key={idx} className="fpid-comment">
                              <a href={`#/profile/${comment.commentor_id}`}>
                                <h1 className="feed-sbt mr-5">
                                  {comment.commentor}
                                </h1>
                              </a>
                              <span className="feed-sbt nbt">{comment.comment_text}</span>
                              <button onClick={this.handleDeleteComment.bind(this, comment)} className="dp-none">X</button>
                            </li>
                          );
                        })
                      }

                    </ul>

                  </div>
                </div>
                <section className="fpi-add-comments">
                  <a className="like-button">
                    <span onClick={this.toggleLike.bind(this, this.state.photo)} className={this.state.heartClass}>like</span>
                  </a>
                  <form onSubmit={this.handleCommentEnter.bind(this)} className="add-a-comment dp-none">
                    <input onChange={this.handleCommentChange.bind(this)} type="text" className="aac-input feed-sbt nbt" placeholder="Add a comment…" value={this.state.comment}/>
                  </form>
                </section>
              </div>

            </div>
          </div>
        </Modal>


      </div>
    );
  }
}

export default UserPhotoIndex;

// {
//   this.state.commentss.map((comment, idx) => {
//     if (comment.commentor_id === this.props.currentUser.id || comment.photoOwner === this.props.currentUser.id){
//       this.deleteButtonClass =  "delete-comment";
//     } else {
//       this.deleteButtonClass = "dp-none";
//     }
//     // debugger
//     return (
//       <li key={idx} className="fpid-comment">
//         <a href={`#/profile/${comment.commentor_id}`}>
//           <h1 className="feed-sbt mr-5">
//             {comment.commentor}
//           </h1>
//         </a>
//         <span className="feed-sbt nbt">{comment.comment_text}</span>
//         <button onClick={this.handleDeleteComment.bind(this, comment)} className={this.deleteButtonClass}>X</button>
//       </li>
//     );
//   })
// }
