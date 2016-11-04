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


    return (
          <Masonry elementType={"div"} className={"photos-container"} style={style}>
              {childElements}
          </Masonry>
    );

    // return (
    //   <ul className="photos-container">
    //     {
    //       this.props.photos.map((photo, idx) => {
    //         return (
    //           <li key={idx}>
    //             <img className="square-box" src={photo.image_url} />
    //           </li>
    //         );
    //       })
    //     }
    //   </ul>
    // );

    // return (
    //   <MasonryInfiniteScroller elementType={"ul"} className={"photos-container"}>
    //     {
    //         this.props.photos.map((el, index) => <img key={index} src={el.image_url}/>)
    //       }
    //   </MasonryInfiniteScroller>
    // );
  }
}
// <MasonryInfiniteScroller hasMore={this.state.hasMore} loadMore={() => this.setState({ elements: this.state.elements.push("Element") })}>
//   {
//     this.props.photos.map((el, index) => <img key={index} src={el.image_url}/>)
//   }
// </MasonryInfiniteScroller>

export default UserPhotoIndex;
