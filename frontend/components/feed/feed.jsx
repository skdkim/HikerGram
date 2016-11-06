import React from 'react';
import { withRouter } from 'react-router';
import HeaderContainer from '../header/header_container';

class Feed extends React.Component {
  render(){
    const currentUser = this.props.currentUser;

    return(
      <div className="main-container">
        <HeaderContainer />
        <main>
          <div className="feed border-top">
            <section className="feed-page">
              <article className="whole-feed-photo-container">
                <header className="feed-photo-header">
                  <a className="feed-photo-user-icon" href={"/"}>
                    <img className="feed-photo-user-icon-image" src={`${currentUser.image_url}`}/>
                  </a>
                  <h1 className="feed-sbt">{currentUser.username}</h1>
                </header>

                <div className="feed-photo-container">
                  <img className="feed-photo" src={`${currentUser.photos[1].image_url}`}/>
                </div>

                <div className="fp-info">
                  <div className="fpi-likes">
                    <span className="fpil-text">
                      <span className="feed-sbt">49</span>
                      <span className="feed-sbt nbt"> likes</span>
                    </span>
                  </div>
                  <div className="fpi-description">
                    <ul className="fpid-comments">
                      <li className="fpid-comment">
                        <h1 className="feed-sbt">{currentUser.username}
                          <span className="feed-sbt nbt"> {currentUser.photos[1].description}</span>
                        </h1>
                      </li>
                    </ul>
                  </div>
                  <section className="fpi-add-comments">
                    <a className="like-button">
                      <span className="openHeartSprite">like</span>
                    </a>
                    <form className="add-a-comment">
                      <input type="text" className="aac-input feed-sbt nbt" placeholder="Add a comment…" value=""/>
                    </form>
                  </section>
                </div>


              </article>
            </section>
          </div>
        </main>
      </div>

    );
  }
}

export default withRouter(Feed);
