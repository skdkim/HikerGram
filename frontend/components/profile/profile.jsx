import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
var Masonry = require('react-masonry-component');
import Modal from 'react-modal';

import HeaderContainer from '../header/header_container';
import UserPhotoIndexContainer from '../user_photo_index/user_photo_index_container';

class Profile extends React.Component {
  constructor(props){
    // debugger
    super(props);
    this.state = {
      follow: ""
    };
  }

  handleLogout(){
    this.props.logout();
    this.props.router.push("/landing");
  }

// this is the edit profile icon
// <img className="small-icon settings-button" src="http://res.cloudinary.com/skdkim/image/upload/v1478197868/hikergram_assets/settings.png"/>
  handleFollowing(e){
    e.preventDefault();
    this.props.destroyFollow(this.props.user.id);
  }

  handleFollow(e){
    e.preventDefault();
    this.props.createFollow({follower_id: this.props.currentUser.id, followee_id: this.props.user.id});
  }

  render(){
    // debugger
    if (this.props.user.followers && this.props.photos){
      let button = <button onClick={this.handleFollowing.bind(this)} className="followingStyle">Following</button>;
      if (this.props.user.id === this.props.currentUser.id){
        button = <div></div>;
      } else if (!this.props.user.currentUserFollows){
        button = <button onClick={this.handleFollow.bind(this)} className="followStyle">Follow</button>;
      }
      return(
        <div className="main-container">
          <HeaderContainer />
          <main>
            <div className="feed border-top">
              <article>
                <div className="profile-top">
                  <div className="profile-img-container">
                    <img className="profile-image" src={this.props.user.image_url}></img>
                  </div>

                  <div className="profile-top-info">
                    <div className="user-nav bm20">
                      <h1 className="username">{this.props.user.username}</h1>
                      {button}
                    </div>
                    <div className="user-data bm20">
                      <h1 className="data-num username">{this.props.user.photos.length}</h1>
                      <h1 className="username small-size" id="posts">posts</h1>

                      <h1 className="data-num username">{this.props.user.follower_count}</h1>
                      <h1 className="username small-size" id="followers">followers</h1>

                      <h1 className="data-num username">{this.props.user.followee_count}</h1>
                      <h1 className="username small-size" id="following">following</h1>
                    </div>
                    <div className="user-description">
                      <h1 className="username small-size" id="user-bio">{this.props.user.description}</h1>
                    </div>
                  </div>
                </div>
                <div className="all-photos">
                  <UserPhotoIndexContainer profilePhotos={this.props.photos}/>
                </div>
              </article>
            </div>
          </main>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
}

export default Profile;
