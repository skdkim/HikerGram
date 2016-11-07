import React from 'react';
import MasonryInfiniteScroller from 'react-masonry-infinite';
import Masonry from 'react-masonry-component';
import Modal from 'react-modal';

import ProfileModalStyle from './profile_modal_style';

let masonryOptions = {
  transitionDuration: 0
};


class UserPhotoIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modalOpen: false,
      location: "profile",
      photo: ""
    };
  }

  // componentWillUpdate(){
  //   console.log("component updated!");
  // }

  _handleClick(e){
    e.preventDefault();
    // this.getMeta(
    //   e.target.src,
    //   (width, height) => {
    //     if (width < height){
    //       console.log("width set!");
    //       ProfileModalStyle.content["maxWidth"] = `${width + 335}px`;
    //     } else {
    //       console.log("width set!");
    //
    //       ProfileModalStyle.content["maxWidth"] = '935px';
    //     }
    //   }
    // );

    this.setState({ modalOpen: true, photo: e.target.src });
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
          this.props.photos.map((photo, idx) => {
            return (
              <img onClick={this._handleClick.bind(this)} key={idx} className="square-box" src={photo.image_url} />
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
              <img src={this.state.photo}/>
            </div>
            <div className="mc-info">
              <h1>photo-info</h1>
            </div>
          </div>
        </Modal>

      </div>
    );
  }
}

export default UserPhotoIndex;

// let childElements = this.props.photos.map((photo, idx) => {
//     return (
//       <img key={idx} className="square-box" src={photo.image_url} />
//     );
//   });

// return (
//       <Masonry elementType={"div"} className={"photos-container"} style={style}>
//           {childElements}
//       </Masonry>
// );
