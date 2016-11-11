import React from 'react';

class CapsuleInfo extends React.Component {
  constructor(props){
    // debugger
    super(props);
    this.state = {
      heartClass: this.props.photo.currentUserLikes ? "redHeartSprite" : "openHeartSprite",
      likesCount: this.props.photo.likers.length,
      userId: this.props.photo.user.id,
      comment: "",
      deleteButtonClass: "delete-comment"
    };
    this.deleteButtonClass = "delete-comment";
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

  handleCommentChange(e){
    e.preventDefault();
    const comment = e.target.value;
    this.setState({ comment });
  }

  handleCommentEnter(e){
    e.preventDefault();
    this.deleteButtonClass = "delete-comment";
    this.props.createComment({comment_text: this.state.comment, photo_id: this.props.photo.id, user_id: this.props.currentUser.id});
    this.setState({comment: ""});
  }

  handleDeleteComment(comment){
    // debugger
    this.props.destroyComment(comment.comment_id);
  }


  render(){
    // debugger

    let descript;
    // let deleteButton;
    // if (this.props.photo.user.id === this.props.currentUser.id){
    //   deleteButton = (<button onClick={this.handleDeleteComment.bind(this, comment)} className="delete-comment">X</button>);
    // }

    if (this.props.photo.description){
      descript = (
        <li className="fpid-comment">
          <a href={`#/profile/${this.props.photo.user.id}`}>
            <h1 className="feed-sbt mr-5">
              {this.props.photo.user.username}
            </h1>
          </a>
          <span className="feed-sbt nbt"> {this.props.photo.description}</span>
        </li>
      );
    } else {
      descript = (<div></div>);
    }


    if (this.props.photo.comments){
      let commentss = Object.keys(this.props.photo.comments).map(key => this.props.photo.comments[key]);
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
              {descript}
              {
                commentss.map((comment, idx) => {
                  if (comment.commentor_id !== this.props.currentUser.id && comment.photoOwner !== this.props.currentUser.id){
                    // debugger
                    this.deleteButtonClass =  "dp-none";
                  } else {
                    this.deleteButtonClass = "delete-comment";
                  }
                  // debugger
                  return (
                    <li key={idx} className="fpid-comment">
                      <a href={`#/profile/${comment.commentor_id}`}>
                        <h1 className="feed-sbt mr-5">
                          {comment.commentor}
                        </h1>
                      </a>
                      <span className="feed-sbt nbt">
                        {comment.comment_text}
                      </span>
                      <button onClick={this.handleDeleteComment.bind(this, comment)} className={this.deleteButtonClass}>X</button>
                    </li>
                  );
                })
              }
            </ul>
          </div>
          <section className="fpi-add-comments">
            <a className="like-button">
              <span onClick={this.toggleLike.bind(this)} className={this.state.heartClass}>like</span>
            </a>
            <form className="add-a-comment" onSubmit={this.handleCommentEnter.bind(this)}>
              <input onChange={this.handleCommentChange.bind(this)} type="text" className="aac-input feed-sbt nbt" placeholder="Add a comment…" value={this.state.comment}/>
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


// <button onClick={this.handleDeleteComment.bind(this, comment)} className="delete-comment">X</button>
