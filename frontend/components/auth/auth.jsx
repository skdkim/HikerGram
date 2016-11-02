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
      this.props.login({username: "guest", password: "123123"});
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
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render(){
    return(
      <div className="auth-form">
        <h3 className="form-welcome-title">Welcome to HikerGram</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="inputs">
            <label className="username"><input onChange={this.handleUsername.bind(this)} value={this.state.username} placeholder={"Username"}/></label>
            <label className="password"><input onChange={this.handlePassword.bind(this)} type="password" value={this.state.password} placeholder={"Password"}/></label>
          </div>

          <div className="station-buttons">
            <button className="login" onClick={() => this.type = "login"}>Log In</button>
            <button className="signup" onClick={() => this.type = "signup"}>Sign Up</button>
          </div>
          <div className="guest-button">
            <button className="guest" onClick={() => this.type = "guest"}>Guest Login</button>
          </div>
          {this.renderErrors()}
        </form>
      </div>
    );
  }
}

export default withRouter(Auth);
