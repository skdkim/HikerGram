import { connect } from 'react-redux';
import Discover from './discover';

import { logout } from '../../actions/session_actions';


const mapStateToProps = state => ({
  user: state.session.currentUser,
  photos: state.session.currentUser.photos,
  allPhotos: state.photos
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Discover);
