import { connect } from 'react-redux';
import Feed from './feed';

import { logout } from '../../actions/session_actions';
import { createLike, destroyLike } from '../../actions/like_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  photos: state.photos,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  createLike: (like) => dispatch(createLike(like)),
  destroyLike: (id) => dispatch(destroyLike(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
