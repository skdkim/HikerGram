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
    super(props);
    this.state = {
      modalOpen: false,
      location: "profile",
      photoId: "",
      src: "",
      description: "",
      currentUserLikes: "",
      photo: ""
    };
  }

  _handleClick(photo){
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
        photo: photo
      });
    };
  }

  onModalClose(){
    this.setState({ modalOpen: false });
  }

  // giveLike(e) {
  //   e.preventDefault();
  //   this.props.createLike({photo_id: this.state.photoId, user_id: this.props.currentUser.id});
  // }
  //
  // unLike(e){
  //   e.preventDefault();
  //   this.props.destroyLike(this.state.photoId);
  // }

  toggleLike(e){
    // e.preventDefault();
    if (this.state.heartClass === "openHeartSprite"){
      this.props.createLike({photo_id: this.state.photo.id, user_id: this.props.currentUser.id});
      this.setState({heartClass: "redHeartSprite", likesCount: this.state.likesCount + 1});
    } else {
      this.props.destroyLike(this.state.photo.id);
      this.setState({heartClass: "openHeartSprite", likesCount: this.state.likesCount - 1});
    }
  }

  // let heart = <span onClick={this.giveLike.bind(this)} className="openHeartSprite">like</span>;
  //   if(this.state.currentUserLikes){
  //     heart = <span onClick={this.unLike.bind(this)} className="redHeartSprite">like</span>;
  //     }
  render(){
    return (
      <div className="photos-container">
        {
          this.props.profilePhotos.map((photo, idx) => {
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
                      <li className="fpid-comment">
                        <h1 className="feed-sbt">{this.props.user.username}
                          <span className="feed-sbt nbt"> {this.state.description}</span>
                        </h1>
                      </li>
                    </ul>
                  </div>
                </div>
                <section className="fpi-add-comments">
                  <a className="like-button">
                    <span onClick={this.toggleLike.bind(this, this.state.photo)} className={this.state.heartClass}>like</span>
                  </a>
                  <form className="add-a-comment">
                    <input type="text" className="aac-input feed-sbt nbt" placeholder="Add a comment…" value=""/>
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
