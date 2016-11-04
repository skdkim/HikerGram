import React from 'react';
import { withRouter } from 'react-router';
import HeaderContainer from '../header/header_container';

class Discover extends React.Component {
  render(){
    const {user} = this.props;

    return(
      <div className="main-container">
        <HeaderContainer />
        <main className="feed border-top">
          <h1>Where the discover page goes</h1>
        </main>
      </div>

    );
  }
}

export default withRouter(Discover);
