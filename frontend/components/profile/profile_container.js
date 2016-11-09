import { connect } from 'react-redux';
import Profile from './profile';

import { logout } from '../../actions/session_actions';

const mapStateToProps = state => ({
  user: state.userDetail
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
