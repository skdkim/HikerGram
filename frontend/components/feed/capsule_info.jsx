import React from 'react';

class CapsuleInfo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      heartClass: this.props.photo.currentUserLikes ? "redHeartSprite" : "openHeartSprite",
      likesCount: this.props.photo.likers.length
    };
  }

  // giveLike(e) {
  //   e.preventDefault();
  //   this.props.createLike({photo_id: this.props.photo.id, user_id: this.props.currentUser.id});
  //   this.setState({heartClass: "redHeartSprite"});
  // }
  //
  // unLike(e){
  //   e.preventDefault();
  //   this.props.destroyLike(this.props.photo.id);
  //   this.setState({heartClass: "openHeartSprite"});
  // }

  // , likesCount: this.state.likesCount++

  toggleLike(e){
    e.preventDefault();
    if (this.state.heartClass === "openHeartSprite"){
      this.props.createLike({photo_id: this.props.photo.id, user_id: this.props.currentUser.id});
      this.setState({heartClass: "redHeartSprite", likesCount: this.state.likesCount + 1});
    } else {
      this.props.destroyLike(this.props.photo.id);
      this.setState({heartClass: "openHeartSprite", likesCount: this.state.likesCount - 1});
    }
  }

  // if (this.props.photo.currentUserLikes){
  //   this.setState({heartClass: "redHeartSprite"});
  // } else {
  //   this.setState({heartClass: "openHeartSprite"});
  // }
  // let heart = <span onClick={this.giveLike.bind(this)} className="openHeartSprite">like</span>;
  //   if(this.props.photo.currentUserLikes){
  //     heart = <span onClick={this.unLike.bind(this)} className="redHeartSprite">like</span>;
  //     }

  render(){
    if (this.props.photo){
      return (
        <div className="fp-info">
          <div className="fpi-likes">
            <span className="fpil-text">
              <span className="feed-sbt">{this.state.likesCount}</span>
              <span className="feed-sbt nbt"> likes</span>
            </span>
          </div>
          <div className="fpi-description">
            <ul className="fpid-comments">
              <li className="fpid-comment">
                <h1 className="feed-sbt">{this.props.photo.user.username}
                  <span className="feed-sbt nbt"> {this.props.photo.description}</span>
                </h1>
              </li>
            </ul>
          </div>
          <section className="fpi-add-comments">
            <a className="like-button">
              <span onClick={this.toggleLike.bind(this)} className={this.state.heartClass}>like</span>
            </a>
            <form className="add-a-comment">
              <input type="text" className="aac-input feed-sbt nbt" placeholder="Add a comment…" value=""/>
            </form>
          </section>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
}

export default CapsuleInfo;
