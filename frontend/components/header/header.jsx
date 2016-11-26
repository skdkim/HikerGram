import React from 'react';
import { withRouter } from 'react-router';

class Header extends React.Component {
  constructor(props){
    super(props);
  }

  handleLogout(){
    this.props.logout();
  }

  handleProfile(){
    this.props.router.push("/profile");
  }

  handleDiscover(){
    this.props.router.push("/discover");
  }

  render(){
    const {user} = this.props;

    return(
          <div className="top-header">
            <div className="tp-container">
              <div className="top-logo">
                <span title="Feed">
                  <a href="/">
                      <img id="logo-link" src="http://res.cloudinary.com/skdkim/image/upload/v1478396749/hikergram_assets/instagramsprites.png"/>
                  </a>
                  <a href="/" id="hikerGram-text">
                    HikerGram
                  </a>
                </span>
              </div>

              <div>
                <input className="dp-none" id="search-input" placeholder="Search"></input>
                  <img className="dp-none" id="search-glass" src="http://res.cloudinary.com/skdkim/image/upload/v1478145918/hikergram_assets/magnifying-glass_bu4geg.png"/>
              </div>

              <div>
                <nav>
                  <a id="discover-link">
                    <span title="Discover">
                      <img onClick={this.handleDiscover.bind(this)} className="small-icon" src="http://res.cloudinary.com/skdkim/image/upload/v1478143104/hikergram_assets/discover-icon_g8qioz.png"/>
                    </span>
                  </a>
                  <a id="profile-link" >
                    <span title="Profile">
                      <img onClick={this.handleProfile.bind(this)} className="small-icon" src="http://res.cloudinary.com/skdkim/image/upload/v1478143104/hikergram_assets/profile-icon_w41e7q.png"/>
                    </span>
                  </a>
                  <a id="logout-link" >
                    <span title="Log Out">
                      <img onClick={this.handleLogout.bind(this)} className="small-icon" src="http://res.cloudinary.com/skdkim/image/upload/v1478143104/hikergram_assets/logout-icon_zh94cc.png"/>
                    </span>
                  </a>
                </nav>
              </div>
            </div>
          </div>
    );
  }
}

export default withRouter(Header);
