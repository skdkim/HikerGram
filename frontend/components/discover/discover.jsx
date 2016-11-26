import React from 'react';
import Modal from 'react-modal';
import { withRouter } from 'react-router';

import HeaderContainer from '../header/header_container';
import UserPhotoIndex from '../user_photo_index/user_photo_index';
import UserPhotoIndexContainer from '../user_photo_index/user_photo_index_container';

class Discover extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modalOpen: false
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
    let allPhotosObj = this.props.allPhotos;
    const allPhotos = Object.keys(allPhotosObj).map(key => allPhotosObj[key]);

    return(
      <div className="main-container">
        <HeaderContainer />
        <main>
          <div className="feed border-top">
            <article>
                <div className="all-photos">
                  <UserPhotoIndexContainer profilePhotos={this.props.allPhotos} route={"discover"}/>

                </div>

            </article>
          </div>
        </main>
      </div>

    );
  }
}
// <Modal
//   isOpen={this.state.modalOpen}
//   onRequestClose={this.onModalClose.bind(this)}>
//   <img src={"http://res.cloudinary.com/skdkim/image/upload/v1478303396/userphotos/11379899_1188115341214546_1604071009_n.jpg.jpg"}/>
// </Modal>

export default withRouter(Discover);

// {
//   // allPhotos.map((photo, idx) => {
//   //   if (photo.image_url){
//   //     return (
//   //       <a href={`#/profile/${photo.user.id}`}>
//   //         <img key={idx} className="square-box" src={photo.image_url} />
//   //       </a>
//   //     );
//   //   } else {
//   //     return (<img key={-1} className="square-box dp-none"></img>);
//   //   }
//   // })
//   // allPhotos.map((photo, idx) => {
//   //     return (
//   //        <img key={idx} className="square-box" src={photo.image_url} />
//   //     );
//   //   } else {
//   //     return ( <div></div> );
//   //   }
//   // })
// }
