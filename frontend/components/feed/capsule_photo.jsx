import React from 'react';

class CapsulePhoto extends React.Component {
  constructor(props) {
    super(props);
  }

  // giveLike(e) {
  //   e.preventDefault();
  //   this.props.createLike({photo_id: this.props.photo.id, user_id: this.props.currentUser.id});
  // }

  // onDoubleClick={this.giveLike.bind(this)}

  render(){
    return (
      <div className="feed-photo-container">
        <img className="feed-photo" src={`${this.props.photo.image_url}`}/>
      </div>
    );
  }
}

export default CapsulePhoto;
