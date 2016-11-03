import React from 'react';
import { withRouter } from 'react-router';
import Header from '../header/header';

class Discover extends React.Component {
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
        <Header />
        <main className="feed border-top">
          <h1>Where the discover page goes</h1>
            <a href="/" id="logout-link" >
              <img onClick={this.handleLogout.bind(this)} className="small-icon" src="http://res.cloudinary.com/skdkim/image/upload/v1478143104/logout-icon_zh94cc.png"/>
            </a>
        </main>
      </div>

    );
  }
}

export default withRouter(Discover);
