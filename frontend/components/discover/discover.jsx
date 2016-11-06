import React from 'react';
import { withRouter } from 'react-router';
import HeaderContainer from '../header/header_container';
import UserPhotoIndex from '../user_photo_index/user_photo_index';

class Discover extends React.Component {

  render(){
    let allPhotosObj = this.props.allPhotos;
    const allPhotos = _.shuffle(Object.keys(allPhotosObj).map(key => allPhotosObj[key]));
    return(
      <div className="main-container">
        <HeaderContainer />
        <main>
          <div className="feed border-top">
            <article>
                <div className="photos-container">
                  {
                    allPhotos.map((photo, idx) => {
                      return (
                        <img key={idx} className="square-box" src={photo.image_url} />
                      );
                    })
                  }
                </div>

            </article>
          </div>
        </main>
      </div>

    );
  }
}

export default withRouter(Discover);
