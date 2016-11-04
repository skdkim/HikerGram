import React from 'react';
import { withRouter } from 'react-router';
import HeaderContainer from '../header/header_container';

class Discover extends React.Component {
  render(){
    const {user} = this.props;

    return(
      <main className="main-container">
        <HeaderContainer />
        <main className="feed border-top">
          <h1>Where the discover page goes</h1>
        </main>
      </main>

    );
  }
}

export default withRouter(Discover);
