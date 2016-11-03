import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';

class Profile extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <h1>Profile Container!</h1>
      </div>
    );
  }
}

export default Profile;
