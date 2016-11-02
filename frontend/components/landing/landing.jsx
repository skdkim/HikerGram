import React from 'react';
import { withRouter } from 'react-router';

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
        <h1>In the Landing</h1>
        <h2>See you soon {this.state.username}!</h2>
      </div>
    );
  }
}

export default withRouter(Landing);
