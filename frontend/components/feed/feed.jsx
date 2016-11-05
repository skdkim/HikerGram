import React from 'react';
import { withRouter } from 'react-router';
import HeaderContainer from '../header/header_container';

class Feed extends React.Component {
  render(){
    const currentUser = this.props.currentUser;

    return(
      <div className="main-container">
        <HeaderContainer />
        <main className="feed border-top">
          <div>
            <h1>{currentUser.username}</h1>
          </div>
        </main>
      </div>

    );
  }
}

export default withRouter(Feed);
