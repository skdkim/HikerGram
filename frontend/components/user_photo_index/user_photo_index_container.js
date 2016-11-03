import { connect } from 'react-redux';
import UserPhotoIndex from './user_photo_index';

import { logout } from '../../actions/session_actions';

const mapStateToProps = state => ({
  user: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  null
)(UserPhotoIndex);
