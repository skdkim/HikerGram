import React from 'react';
import { withRouter } from 'react-router';

class Auth extends React.Component {
  constructor(props){
    super(props);
    this.state = {username: "",
                  password: "",
                  dpLogin: "",
                  dpSignup: "dp-none",
                  hideErrors: ""};
    this.nullState = {username: "", password: ""};
  }

  componentDidUpdate(){
    this.redirectIfLoggedIn();
  }

  componentWillMount(){
    let interval = setInterval(() => {
      let vo = document.getElementsByClassName("v-o")[0];
      let ei = document.getElementsByClassName("ease-in")[0];

      vo.classList.remove("v-o");
      ei.classList.add("v-o");
      ei.classList.remove("ease-in");

      if (ei.nextSibling){
        ei.nextSibling.classList.add("ease-in");
      } else {
        document.getElementsByClassName("p1")[0].classList.add("ease-in");
      }
    }, 3000);
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
    this.setState({hideErrors : ""});
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

  handleFormToggle(e) {
    e.preventDefault();
    if (e.target.className.indexOf("login") !== -1){
      this.setState({ dpLogin : "dp-none", dpSignup : "", hideErrors : "dp-none"});
    } else {
      this.setState({ dpLogin : "", dpSignup : "dp-none", hideErrors : "dp-none"});
    }
  }

  renderErrors() {
    return(
      <div className="errorsContainer">
        <ul className={"errors " + this.state.hideErrors}>
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
            <div className="innerPhotos">
              <div className="photo p1 ease-in"></div>
              <div className="photo p2"></div>
              <div className="photo p3"></div>
              <div className="photo p4"></div>
              <div className="photo p5 v-o"></div>
            </div>
          </div>
          <div className="rs">
            <div className="rsCont">
              <div className="auth-form">
                <h3 className="form-welcome-title">HikerGram</h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                  <h2 className={"signup signupMsg " + this.state.dpSignup}>Sign up to see photos and videos from your friends</h2>
                  <div className={"signup inputs " + this.state.dpSignup}>
                      <label className="username-login"><input className="auth-inputs" onChange={this.handleUsername.bind(this)} value={this.state.username} placeholder={"Full Name"}/></label>
                    </div>
                  <div className="inputs">
                    <label className="username-login"><input className="auth-inputs" onChange={this.handleUsername.bind(this)} value={this.state.username} placeholder={"Username"}/></label>
                  </div>
                  <div className="inputs">
                    <label className="password-login"><input className="auth-inputs" onChange={this.handlePassword.bind(this)} type="password" value={this.state.password} placeholder={"Password"}/></label>
                  </div>

                  <div className="all-buttons">
                    <div className="buttonContainer">
                      <button className={"login " + this.state.dpLogin} onClick={() => this.type = "login"}>Log In</button>
                    </div>
                    <div className="buttonContainer">
                      <button className={"signup " + this.state.dpSignup} onClick={() => this.type = "signup"}>Sign Up</button>
                    </div>
                    <div className="buttonContainer">
                      <button className={"guest login " + this.state.dpLogin} onClick={() => this.type = "guest"}>Guest Login</button>
                    </div>
                  </div>

                  {this.renderErrors()}

                </form>
              </div>
            </div>
            <div className="rsCont">
              <div className="toggleSplash">
                <p className={"login " + this.state.dpLogin} >Don't have an account?</p>
                <a className={"login link " + this.state.dpLogin} onClick={this.handleFormToggle.bind(this)} >Sign Up</a>
                <p className={"signup " + this.state.dpSignup} >Have an account?</p>
                <a className={"signup link " + this.state.dpSignup} onClick={this.handleFormToggle.bind(this)} >Log in</a>
              </div>

            </div>
          </div>
        </div>
        <div className="footer">
          <div className="nav">
            <a href="http://www.davidkim.tech">Portfolio</a>
            <a href="https://github.com/skdkim/hikergram">Github</a>
            <a href="http://www.davidkim.tech/images/DavidKimResume.pdf">Resume</a>
            <a href="https://www.linkedin.com/in/sungkwangdavidkim">LinkedIn</a>
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
