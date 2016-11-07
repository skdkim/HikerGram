import React from 'react';
import MasonryInfiniteScroller from 'react-masonry-infinite';
import Masonry from 'react-masonry-component';
import Modal from 'react-modal';

let masonryOptions = {
  transitionDuration: 0
};

let style = {
};

class UserPhotoIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modalOpen: false,
      location: "profile"
    };
  }

  _handleClick(e){
    e.preventDefault();
    this.setState({ modalOpen: true });
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
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose.bind(this)}>
          ...content
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
