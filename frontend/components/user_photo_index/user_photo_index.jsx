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
      photo: "",
      src: "",
      description: ""
    };
  }

  _handleClick(photo){
    return e => {
      // debugger
      e.preventDefault();
      this.setState({ modalOpen: true, src: photo.image_url, description: photo.description});
    };
  }

  _handleModalWidth(width){
    console.log(`width is ${width}`);
    ProfileModalStyle.content["maxWidth"] = width + 335;
  }

  getMeta(url, callback) {
      var img = new Image();
      img.src = url;
      img.onload = function() { callback(this.width, this.height); };
  }

  onModalClose(){
    this.setState({ modalOpen: false });
  }

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
                      <span className="feed-sbt">49</span>
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
                    <span className="openHeartSprite">like</span>
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
