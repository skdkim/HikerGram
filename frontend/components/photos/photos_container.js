import { connect } from 'react-redux';
import Photos from './photos';

import { logout } from '../../actions/session_actions';

const mapStateToProps = state => ({
  user: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  null
)(Photos);
