import React from 'react';
import MasonryInfiniteScroller from 'react-masonry-infinite';
import Masonry from 'react-masonry-component';

let masonryOptions = {
  transitionDuration: 0
};

let style = {
};

class UserPhotoIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    let childElements = this.props.photos.map((photo, idx) => {
        return (
          <img key={idx} className="square-box" src={photo.image_url} />
        );
      });

    // return (
    //       <Masonry elementType={"div"} className={"photos-container"} style={style}>
    //           {childElements}
    //       </Masonry>
    // );

    return (
      <div className="photos-container">
        {
          this.props.photos.map((photo, idx) => {
            return (
              <img key={idx} className="square-box" src={photo.image_url} />
            );
          })
        }
      </div>
    );
  }
}

export default UserPhotoIndex;
