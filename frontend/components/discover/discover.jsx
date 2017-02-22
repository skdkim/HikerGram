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

export default withRouter(Discover);
