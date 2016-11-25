import React from 'react';

class CapsuleHeader extends React.Component {
  constructor(props){
    // debugger
    super(props);
  }

  render(){
    return (
      <header className="feed-photo-header">
        <a className="feed-photo-user-icon" href={`#/profile/${this.props.user.id}`}>
          <img className="feed-photo-user-icon-image" src={`${this.props.user.image_url}`}/>
        </a>
        <a href={`#/profile/${this.props.user.id}`}>
          <h1 className="feed-sbt" onClick={this.props.onRequestClose}>{this.props.user.username}</h1>
        </a>
      </header>
    );
  }
}

export default CapsuleHeader;
