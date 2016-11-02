import React from 'react';
import { withRouter } from 'react-router';

class Feed extends React.Component {
  handleLogout(e){
    e.preventDefault();
    this.props.logout();
    this.props.router.push("/");
  }

  render(){
    const {user} = this.props;

    return(
      <div>
        <h1>In the Feed</h1>
        <h2>Hello! {user.username}</h2>
        <button onClick={this.props.logout}>Log Out</button>
      </div>

    );
  }
}

export default withRouter(Feed);
