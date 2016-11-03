import React from 'react';
import Auth from './auth/auth';
import Header from './header/header';

const App = (props) => (
    <main>
      {props.children}
      <footer className="footer">This is the footer that you will only see when logged out</footer>
    </main>
);

export default App;
