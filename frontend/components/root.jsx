import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from "./app";
import AuthContainer from './auth/auth_container';
import FeedContainer from './feed/feed_container';
import LandingContainer from './landing/landing_container';
import ProfileContainer from './profile/profile_container';

const Root = (props) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = props.store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = props.store.getState().session.currentUser;
    if(!currentUser){
      replace('/auth');
    }
  };

  return (
    <Provider store={props.store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={FeedContainer} onEnter={_ensureLoggedIn}/>
          <Route path="/user" component={ProfileContainer} />
          <Route path="/landing" component={LandingContainer} />
          <Route path="/auth" component={AuthContainer} onEnter={_redirectIfLoggedIn}/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
