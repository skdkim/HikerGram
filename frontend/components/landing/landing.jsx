import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';

class Landing extends React.Component {
  constructor(props){
    super(props);
    this.state = {username: ""};
  }
  componentWillMount(){
    const username = this.props.user.username;
    this.setState({username});
  }

  render(user){
    return(
      <div>
        <h1 className="landing-msg">See you soon {this.state.username}!</h1>
        <Link className="landing-link" to={"/"}>Back to HikerGram</Link>
      </div>
    );
  }
}

export default withRouter(Landing);
