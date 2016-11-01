import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';

import { login, logout } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  window.store = configureStore();
  window.login = login;
  window.logout = logout;

  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to HikerGram</h1>, root);
});
