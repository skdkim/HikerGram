import React from 'react';
import { withRouter } from 'react-router';

import HeaderContainer from '../header/header_container';

import FeedCapsule from './feed_capsule';

class Feed extends React.Component {
  render(){
    const currentUser = this.props.currentUser;

    //add the followees photos to newPhotos
    const newPhotos = _.concat(currentUser.photos, currentUser.photos)

    return(
      <div className="main-container">
        <HeaderContainer />
        <main>
          <div className="feed border-top">
            <section className="feed-page">
              {
                newPhotos.map((photo, idx) => <FeedCapsule user={currentUser} key={idx} photo={photo} />)
              }
            </section>
          </div>
        </main>
      </div>

    );
  }
}

export default withRouter(Feed);
