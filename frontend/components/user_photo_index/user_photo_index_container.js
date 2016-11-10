import { connect } from 'react-redux';
import UserPhotoIndex from './user_photo_index';

import { logout } from '../../actions/session_actions';
import { createLike, destroyLike } from '../../actions/like_actions';

const mapStateToProps = state => ({
  user: state.userDetail,
  profilePhotos: state.userDetail.photos,
  allPhotos: state.photos,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createLike: (like) => dispatch(createLike(like)),
  destroyLike: (id) => dispatch(destroyLike(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPhotoIndex);
