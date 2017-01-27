import React from 'react';

class CapsulePhoto extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDoubleClick(e){
    e.preventDefault();

    if (!this.props.photo.currentUserLikes){
      this.props.createLike({photo_id: this.props.photo.id, user_id: this.props.currentUser.id});
    }
  }

  render(){
    return (
      <div className="feed-photo-container">
        <img onDoubleClick={this.handleDoubleClick.bind(this)} className="feed-photo" src={`${this.props.photo.image_url}`}/>
      </div>
    );
  }
}

export default CapsulePhoto;
