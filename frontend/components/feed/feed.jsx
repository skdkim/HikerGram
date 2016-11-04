import React from 'react';
import { withRouter } from 'react-router';
import HeaderContainer from '../header/header_container';

class Feed extends React.Component {
  handleLogout(){
    this.props.logout();
    this.props.router.push("/landing");
  }

  handleProfile(){
    this.props.logout();
    this.props.router.push("/user");
  }

  render(){
    const {user} = this.props;

    return(
      <div className="main-container">
        <HeaderContainer />
        <main className="feed border-top">
          <h1>Where the feed goes</h1>
            <a href="/" id="logout-link" >
              <img onClick={this.handleLogout.bind(this)} className="small-icon" src="http://res.cloudinary.com/skdkim/image/upload/v1478143104/hikergram_assets/logout-icon_zh94cc.png"/>
            </a>
        </main>
      </div>

    );
  }
}

export default withRouter(Feed);
