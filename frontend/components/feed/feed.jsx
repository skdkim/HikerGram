import React from 'react';
import { withRouter } from 'react-router';

import HeaderContainer from '../header/header_container';

import FeedCapsule from './feed_capsule';

class Feed extends React.Component {
  render(){
    const photoss = Object.keys(this.props.photos).map(key => this.props.photos[key]);
    return(
      <div className="main-container">
        <HeaderContainer />
        <main>
          <div className="feed border-top">
            <section className="feed-page">
              {
                photoss.map((photo, idx) => {
                  return (<FeedCapsule key={idx} createComment={this.props.createComment} destroyComment={this.props.destroyComment} createLike={this.props.createLike} destroyLike={this.props.destroyLike} user={photo.user} currentUser={this.props.currentUser} photo={photo} />);
                })
              }
            </section>
          </div>
        </main>
      </div>
    );
  }
}

export default withRouter(Feed);
