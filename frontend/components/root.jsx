import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from "./app";
import AuthContainer from './auth/auth_container';
import FeedContainer from './feed/feed_container';
import LandingContainer from './landing/landing_container';
import ProfileContainer from './profile/profile_container';
import DiscoverContainer from './discover/discover_container';

import { fetchUserDetail } from '../actions/user_actions';
import { requestAllPhotos } from '../actions/photo_actions';
import { requestAllFollows } from '../actions/follow_actions';

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

  const fetchUserInfo = (nextState) => {
    if (Object.keys(nextState.params).indexOf('id') !== -1){
      props.store.dispatch(fetchUserDetail(nextState.params.id));
    } else {
      const currentUser = props.store.getState().session.currentUser;
      props.store.dispatch(fetchUserDetail(currentUser.id));
    }
  };

  const fetchAllPhotos = (nextState) => {
    // doesn't look like I needed this line of code below...
    // const photos = props.store.getState().photos;

    // debugger
    // props.store.dispatch(requestAllPhotos());
    if (nextState.routes[1].path === "/discover"){
      props.store.dispatch(requestAllPhotos({pageType: "discover"}));
    } else if (nextState.routes[1].path === "/profile"){
      props.store.dispatch(requestAllPhotos({pageType: "profile"}));
    } else {
      props.store.dispatch(requestAllPhotos({pageType: "feed"}));
    }
  };

  // const fetchAllFollows = () => {
  //   const follows = props.store.getState().follows;
  //   props.store.dispatch(requestAllFollows());
  // };

  const feedGateKeeper = (nextState, replace) => {
    _ensureLoggedIn(nextState, replace);
    fetchAllPhotos(nextState);
  };

  const discoverGateKeeper = (nextState, replace) => {
    _ensureLoggedIn(nextState, replace);
    fetchAllPhotos(nextState);
    fetchUserInfo(nextState);
  };

  const profileGateKeeper = (nextState, replace) => {
    _ensureLoggedIn(nextState, replace);
    fetchUserInfo(nextState);
    fetchAllPhotos(nextState);
  };

  return (
    <Provider store={props.store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={FeedContainer} onEnter={feedGateKeeper}/>
          <Route path='/profile' component={ProfileContainer} onEnter={profileGateKeeper}/>
          <Route path="/profile/:id" component={ProfileContainer} onEnter={profileGateKeeper}/>

          <Route path="/landing" component={LandingContainer} />
          <Route path="/discover" component={DiscoverContainer} onEnter={discoverGateKeeper}/>
          <Route path="/auth" component={AuthContainer} onEnter={_redirectIfLoggedIn}/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
