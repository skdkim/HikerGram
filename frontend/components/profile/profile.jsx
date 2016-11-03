import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';

import HeaderContainer from '../header/header_container';
import UserPhotoIndexContainer from '../user_photo_index/user_photo_index_container';

class Profile extends React.Component {
  constructor(props){
    super(props);
  }

  handleLogout(){
    this.props.logout();
    this.props.router.push("/landing");
  }

  render(){

    return(
      <div className="main-container">
        <HeaderContainer />
        <main className="feed border-top">
          <article>
            <div className="profile-top">
              <div className="profile-img-container">
                <img className="profile-image" src={this.props.user.image_url}></img>
              </div>

              <div className="profile-top-info">
                <div className="user-nav bm20">
                  <h1 className="username">{this.props.user.username}</h1>
                  <img onClick={this.handleLogout.bind(this)} className="small-icon settings-button" src="http://res.cloudinary.com/skdkim/image/upload/v1478197868/hikergram_assets/settings.png"/>
                </div>
                <div className="user-data bm20">
                  <h1 className="data-num username">121</h1>
                  <h1 className="username small-size" id="posts">posts</h1>

                  <h1 className="data-num username">329</h1>
                  <h1 className="username small-size" id="followers">followers</h1>

                  <h1 className="data-num username">422</h1>
                  <h1 className="username small-size" id="following">following</h1>
                </div>
                <div className="user-description">
                  <h1 className="username small-size" id="user-bio">User Description User Description User Description User Description User Description User Description</h1>
                </div>
              </div>

            </div>
            <body className="all-photos">
              <UserPhotoIndexContainer />
            </body>
          </article>
        </main>
      </div>
    );
  }
}

export default Profile;
