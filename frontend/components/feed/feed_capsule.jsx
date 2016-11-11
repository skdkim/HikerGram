import React from 'react';

import CapsuleHeader from './capsule_header';
import CapsulePhoto from './capsule_photo';
import CapsuleInfo from './capsule_info';

class FeedCapsule extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    if (this.props.user){
      return (
        <article className="whole-feed-photo-container">
          <CapsuleHeader user={this.props.user}/>

          <CapsulePhoto currentUser={this.props.currentUser} photo={this.props.photo} createLike={this.props.createLike}/>

          <CapsuleInfo createComment={this.props.createComment} destroyComment={this.props.destroyComment} currentUser={this.props.currentUser} createLike={this.props.createLike} destroyLike={this.props.destroyLike} photo={this.props.photo} />
        </article>
      );
    } else {
      return (<div></div>);
    }
  }
}

export default FeedCapsule;
