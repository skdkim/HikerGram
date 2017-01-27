import React from 'react';

class CapsulePhoto extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDoubleClick(e){
    e.preventDefault();
    e.persist();
    if (!this.props.photo.currentUserLikes){
      this.props.createLike({photo_id: this.props.photo.id, user_id: this.props.currentUser.id});
      e.target.nextSibling.classList.remove("dp-none");
      setTimeout(() => {
        e.target.nextSibling.classList.add("dp-none");
      }, 1000);
    }
  }

  render(){
    return (
      <div className="feed-photo-container">
        <img onDoubleClick={this.handleDoubleClick.bind(this)} className="feed-photo" src={`${this.props.photo.image_url}`}/>
        <div className="animationHolder dp-none">
          <span className="animateHeart animationHeart"></span>
        </div>
      </div>
    );
  }
}

export default CapsulePhoto;
