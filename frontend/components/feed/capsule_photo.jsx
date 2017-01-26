import React from 'react';

class CapsulePhoto extends React.Component {
  constructor(props) {
    super(props);
  }

  // giveLike(e) {
  //   e.preventDefault();
  // }

  // onDoubleClick={this.giveLike.bind(this)}

  handleDoubleClick(e){
    e.preventDefault();
    // console.log(this);
    // console.log("double clicked!");
    // console.log(this.props);

    this.props.createLike({photo_id: this.props.photo.id, user_id: this.props.currentUser.id});

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
