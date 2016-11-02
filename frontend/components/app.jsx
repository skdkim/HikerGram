import React from 'react';
import Auth from './auth/auth';

const App = (props) => (
  <div>
    <h1>WELCOME TO HIKERGRAM</h1>
    <App />
    {props.children}
    <h5>This is the footer that you will only see when logged out</h5>
  </div>
);

export default App;
