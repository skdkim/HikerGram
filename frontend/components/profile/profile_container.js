import { connect } from 'react-redux';
import Profile from './profile';

import { logout } from '../../actions/session_actions';
import { createFollow, destroyFollow } from '../../actions/follow_actions';

const mapStateToProps = state => ({
  user: state.userDetail,
  photos: state.photos,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  createFollow: (data) => dispatch(createFollow(data)),
  destroyFollow: (id) => dispatch(destroyFollow(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
