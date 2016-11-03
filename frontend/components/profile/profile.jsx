import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';

import Header from '../header/header';

class Profile extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="main-container">
        <Header />
        <main className="feed border-top">
          <h1>Where the profile goes</h1>
        </main>
      </div>
    );
  }
}

export default Profile;
