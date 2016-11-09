import { connect } from 'react-redux';
import Feed from './feed';

import { logout } from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  photos: state.photos
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
  // need to add dispatch for following and unfollowing
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
