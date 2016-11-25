import { connect } from 'react-redux';
import UserPhotoIndex from './user_photo_index';

import { logout } from '../../actions/session_actions';
import { createLike, destroyLike } from '../../actions/like_actions';
import { createComment, destroyComment } from '../../actions/comment_actions';


const mapStateToProps = state => ({
  user: state.userDetail,
  // profilePhotos: state.photos,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createLike: (like) => dispatch(createLike(like)),
  destroyLike: (id) => dispatch(destroyLike(id)),
  createComment: (comment) => dispatch(createComment(comment)),
  destroyComment: (id) => dispatch(destroyComment(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPhotoIndex);
