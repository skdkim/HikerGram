import React from 'react';

const CapsulePhoto = (props) => (
  <div className="feed-photo-container">
    <img className="feed-photo" src={`${props.photo.image_url}`}/>
  </div>
);

export default CapsulePhoto;
