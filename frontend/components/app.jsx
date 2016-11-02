import React from 'react';
import Auth from './auth/auth';

const App = (props) => (
  <div className="main">
    {props.children}
    <footer className="footer">This is the footer that you will only see when logged out</footer>
  </div>
);

export default App;