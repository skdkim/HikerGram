import React from 'react';
import { withRouter } from 'react-router';

class Auth extends React.Component {
  constructor(props){
    super(props);
    this.state = {username: "", password: ""};
    this.nullState = {username: "", password: ""};
  }

  componentDidUpdate(){
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn(){
    if(this.props.loggedIn){
      this.props.router.push("/");
    }
  }

  handleUsername(e){
    e.preventDefault();
    const username = e.target.value;
    this.setState({ username });
    this.type = "";
  }

  handlePassword(e){
    e.preventDefault();
    const password = e.target.value;
    this.setState({password});
  }

  handleSubmit(e){
    e.preventDefault();
    if (this.type === "login"){
      this.props.login(this.state);
    } else if (this.type === "guest"){
      this.props.login({username: "johnmuir", password: "hiking4life"});
    } else {
      this.props.signup(this.state);
    }
    this.setState(this.nullState);
  }

  clearState(e){
    e.preventDefault();
    this.setState(this.nullState);
  }

  renderErrors() {
    return(
      <div className="errorsContainer">
        <ul className="errors">
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  render(){
    return(
      <div className="splash">
        <div className="main">
          <div className="sidePhotos">

          </div>
          <div className="rs">
            <div className="rsCont">
              <div className="auth-form">
                <h3 className="form-welcome-title">HikerGram</h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                  <div className="inputs">
                    <label className="username-login"><input className="auth-inputs" onChange={this.handleUsername.bind(this)} value={this.state.username} placeholder={"Username"}/></label>
                  </div>
                  <div className="inputs">
                    <label className="password-login"><input className="auth-inputs" onChange={this.handlePassword.bind(this)} type="password" value={this.state.password} placeholder={"Password"}/></label>
                  </div>

                  <div className="all-buttons">
                    <div className="buttonContainer">
                      <button className="login" onClick={() => this.type = "login"}>Log In</button>
                    </div>
                    <div className="buttonContainer">
                      <button className="signup dp-none" onClick={() => this.type = "signup"}>Sign Up</button>
                    </div>
                    <div className="buttonContainer">
                      <button className="guest login" onClick={() => this.type = "guest"}>Guest Login</button>
                    </div>
                  </div>

                  {this.renderErrors()}

                </form>
              </div>
            </div>
            <div className="rsCont">
              <div className="toggleSplash">
                <p className="login" >Don't have an account?</p>
                <a className="login link" >Sign Up</a>
                <p className="signup dp-none" >Have an account?</p>
                <a className="signup dp-none link" >Log in</a>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Auth);

// <span className="input input--madoka">
//   <input className="input__field input__field--madoka" type="text" id="input-31" />
//   <label className="input__label input__label--madoka" htmlFor="input-31">
//     <svg className="graphic graphic--madoka" width="100%" height="100%" viewBox="0 0 404 77" preserveAspectRatio="none">
//       <path d="m0,0l404,0l0,77l-404,0l0,-77z"/>
//     </svg>
//     <span className="input__label-content input__label-content--madoka">Username</span>
//   </label>
// </span>
