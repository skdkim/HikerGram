import React from 'react';
import { withRouter } from 'react-router';

import HeaderContainer from '../header/header_container';

import FeedCapsule from './feed_capsule';

class Feed extends React.Component {
  render(){
    const currentUser = this.props.currentUser;

    //take article out and make it into a functional component

    return(
      <div className="main-container">
        <HeaderContainer />
        <main>
          <div className="feed border-top">
            <section className="feed-page">
              // {
              //   currentUser.photos.map((photo, key) => <FeedCapsule photo={photo} />)
              // }
              <FeedCapsule />
            </section>
          </div>
        </main>
      </div>

    );
  }
}

export default withRouter(Feed);
