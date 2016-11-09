import React from 'react';

const CapsuleInfo = (props) => {
  return (
    <div className="fp-info">
        <div className="fpi-likes">
          <span className="fpil-text">
            <span className="feed-sbt">49</span>
            <span className="feed-sbt nbt"> likes</span>
          </span>
        </div>
        <div className="fpi-description">
          <ul className="fpid-comments">
            <li className="fpid-comment">
              <h1 className="feed-sbt">{props.photo.user.username}
                <span className="feed-sbt nbt"> {props.photo.description}</span>
              </h1>
            </li>
          </ul>
        </div>
      <section className="fpi-add-comments">
        <a className="like-button">
          <span className="openHeartSprite">like</span>
        </a>
        <form className="add-a-comment">
          <input type="text" className="aac-input feed-sbt nbt" placeholder="Add a comment…" value=""/>
        </form>
      </section>
    </div>
  );
};

export default CapsuleInfo;
