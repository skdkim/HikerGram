import React from 'react';
import { withRouter } from 'react-router';

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
      <div className="feed-page">
        <header>
          <div className="header-image">
            <a href="/landing">
              <img id="logo-link" src="http://res.cloudinary.com/skdkim/image/upload/v1478135475/nav-bar-logo_e04zmb.png"/>
            </a>
            <a href="/" id="hikerGram-text">
              HikerGram
            </a>
          </div>
          <div>
            <input id="search-input" placeholder="Search"></input>
              <img id="search-glass" src="http://res.cloudinary.com/skdkim/image/upload/v1478145918/magnifying-glass_bu4geg.png"/>
          </div>
          <div>
            <nav>
              <a id="discover-link" >
                <img className="small-icon" src="http://res.cloudinary.com/skdkim/image/upload/v1478143104/discover-icon_g8qioz.png"/>
              </a>
              <a id="profile-link" >
                <img onClick={this.handleProfile.bind(this)} className="small-icon" src="http://res.cloudinary.com/skdkim/image/upload/v1478143104/profile-icon_w41e7q.png"/>
              </a>
              <a id="logout-link" >
                <img onClick={this.handleLogout.bind(this)} className="small-icon" src="http://res.cloudinary.com/skdkim/image/upload/v1478143104/logout-icon_zh94cc.png"/>
              </a>
            </nav>
          </div>
        </header>
        <main className="feed border-top">
          <h1>Where the feed goes</h1>
        </main>
      </div>

    );
  }
}

export default withRouter(Feed);
