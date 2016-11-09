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

          <CapsulePhoto photo={this.props.photo} />

          <CapsuleInfo photo={this.props.photo} />
        </article>
      );
    } else {
      return (<div></div>);
    }
  }
}

export default FeedCapsule;
