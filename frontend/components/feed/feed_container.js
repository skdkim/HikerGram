import { connect } from 'react-redux';
import Feed from './feed';

import { logout } from '../../actions/session_actions';
import { createLike, destroyLike } from '../../actions/like_actions';
import { createComment, destroyComment } from '../../actions/comment_actions';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  photos: state.photos,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  createLike: (like) => dispatch(createLike(like)),
  destroyLike: (id) => dispatch(destroyLike(id)),
  createComment: (comment) => dispatch(createComment(comment)),
  destroyComment: (id) => dispatch(destroyComment(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
