import React from 'react';
import { withRouter } from 'react-router';

class Header extends React.Component {
  constructor(props){
    super(props);
  }

  handleLogout(){
    this.props.logout();
    this.props.router.push("/landing");
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
        <header>
          <div className="header-image">
            <a href="/">
              <img id="logo-link" src="http://res.cloudinary.com/skdkim/image/upload/v1478135475/hikergram_assets/nav-bar-logo_e04zmb.png"/>
            </a>
            <a href="/" id="hikerGram-text">
              HikerGram
            </a>
          </div>

          <div>
            <input id="search-input" placeholder="Search"></input>
              <img id="search-glass" src="http://res.cloudinary.com/skdkim/image/upload/v1478145918/hikergram_assets/magnifying-glass_bu4geg.png"/>
          </div>

          <div>
            <nav>
              <a id="discover-link" >
                <img onClick={this.handleDiscover.bind(this)} className="small-icon" src="http://res.cloudinary.com/skdkim/image/upload/v1478143104/hikergram_assets/discover-icon_g8qioz.png"/>
              </a>
              <a id="profile-link" >
                <img onClick={this.handleProfile.bind(this)} className="small-icon" src="http://res.cloudinary.com/skdkim/image/upload/v1478143104/hikergram_assets/profile-icon_w41e7q.png"/>
              </a>
              <a id="logout-link" >
                <img onClick={this.handleLogout.bind(this)} className="small-icon" src="http://res.cloudinary.com/skdkim/image/upload/v1478143104/hikergram_assets/logout-icon_zh94cc.png"/>
              </a>
            </nav>
          </div>
        </header>

    );
  }
}

export default withRouter(Header);
