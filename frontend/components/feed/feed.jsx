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
      <div className="feed-page">
        <div className="header">
          <nav>
            <div>
              <a href="/" id="logo-link">
                <img id="logo-link" src="http://res.cloudinary.com/skdkim/image/upload/v1478135475/nav-bar-logo_e04zmb.png"/>
              </a>
            </div>
            <div>
              <input placeholder="search"></input>
            </div>
            <div>
              <h4>3 icons</h4>
            </div>
          </nav>
        </div>
        <h2>Hello! {this.props.user.username}</h2>
        <button onClick={this.handleLogout.bind(this)}>Log Out</button>
      </div>

    );
  }
}

export default withRouter(Feed);
