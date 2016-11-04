import React from 'react';

class UserPhotoIndex extends React.Component {
  componentWillUpdate(){
  }
  componentDidMount() {
   }
  render(){

    return (
      <div className="photos-container">
        <ul>
          {
            this.props.photos.map(photo=>
              <li >
                <img className="square-box" src={photo.image_url}></img>
              </li>
            )
          }
        </ul>
      </div>
    );
  }
}

export default UserPhotoIndex;
