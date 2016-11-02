import React from 'react';
import { withRouter } from 'react-router';

class Feed extends React.Component {
  handleLogout(){
    this.props.logout();
    this.props.router.push("/landing");
  }

  render(){
    const {user} = this.props;

    return(
      <div>
        <h1>In the Feed</h1>
        <h2>Hello! {this.props.user.username}</h2>
        <button onClick={this.handleLogout.bind(this)}>Log Out</button>
      </div>

    );
  }
}

export default withRouter(Feed);
