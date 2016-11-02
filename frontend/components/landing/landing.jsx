import React from 'react';
import { withRouter } from 'react-router';

class Landing extends React.Component {

  render(){

    return(
      <div>
        <h1>In the Landing</h1>
        <h2>Hello!</h2>
      </div>
    );
  }
}

export default withRouter(Landing);
