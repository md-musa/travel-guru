import React, {useContext, useState} from "react";
import "./Login.css";
import logo from "../../images/Logo.png";
import {UserDataContext} from "../../App";
import * as firebase from "firebase";
import "firebase/auth";
import firebaseConfig from "../../firebase";
import {useHistory, useLocation} from "react-router-dom";
import facebookLogo from "../../images/Icon/fb.png";
import googleLogo from "../../images/Icon/google.png";
firebase.initializeApp(firebaseConfig);

const Login = () => {
  const [loggedinUser, setLoggedinUser] = useContext(UserDataContext);
  const history = useHistory();
  const location = useLocation();
  let {from} = location.state || {from: {pathname: "/"}};

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });


  // [START]-------Sign Up with GOOGLE---
  const hendelGoogleSignUp = (e) => {
    e.preventDefault();
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        setLoggedinUser({name: res.user.displayName, email: res.user.email});
        history.replace(from);
      })
      .catch((err) => console.log("something is going wrong"));
  };
  // [END]-------Sign Up with GOOGLE---


  // [START]-------Sign Up with EMAIL and PASSWORD---
  const hendelEmailPassReg = (e) => {
    e.preventDefault();
    if (user.email && user.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          setLoggedinUser({name: user.name, email: user.email});
          history.replace(from);
        })
        .catch(function (error) {
          setValidation({display: "block", borderRed: "red"});
        });
    }
  };
  // [END]-------Sign Up with EMAIL and PASSWORD---

  // [START]-------Sign In with EMAIL and PASSWORD---
  const hendelEmailPassLogin = (e) => {
    e.preventDefault();
    if (user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          setLoggedinUser({email: user.email});
          history.replace(from);
        })
        .catch(function (error) {
          setValidation({display: "block", borderRed: "red"});
        });
    }
  };
  // [END]-------Sign In with EMAIL and PASSWORD---

  // [START]-------Sign Up with FACEBOOK---
  var fbProvider = new firebase.auth.FacebookAuthProvider();
  const hendelFacebookSignUp = () => {
    firebase
      .auth()
      .signInWithPopup(fbProvider)
      .then(function (res) {
        setLoggedinUser({name: res.p.displayName});
        history.replace(from);
      })
      .catch(function (error) {});
  };
  // [END]-------Sign Up with FACEBOOK---

  // ----[START]---Valiting Email and password
  const hendelBlur = (e) => {
    const passwordPattern = "(?=.*[0-9])";
    let validate = false;
    if (e.target.name === "email") {
      validate = true;
    } else if (e.target.value == "email") {
      setValidationRegEx({display: "block"});
    }

    if (e.target.name === "password" && e.target.value.match(passwordPattern)) {
      validate = true;
    } else if (e.target.name == "password") {
      setValidationRegEx({display: "block"});
    }

    if (e.target.name === "name") {
      validate = true;
    }

    if (validate) {
      user[e.target.name] = e.target.value;
    }
  };

  const hendelBlurLogin = (e) => {
    let validate = false;
    if (e.target.name === "email") {
      validate = true;
    } else if (e.target.value == "email") {
      setValidationRegEx({display: "block"});
    }
    if (e.target.name === "password") {
      validate = true;
    } else if (e.target.name == "password") {
      setValidationRegEx({display: "block"});
    }
    if (e.target.name === "name") {
      validate = true;
    }
    if (validate) {
      user[e.target.name] = e.target.value;
    }
  };

  const [validation, setValidation] = useState({
    display: "none",
    borderRed: "#dddfe2",
  });

  const [validationRegEx, setValidationRegEx] = useState({
    display: "none",
  });
  // ----[END]---Valiting Email and password-----------

  // -----[START] ---toggleing Sign in and Sign UP from with useState---
  const [visibleCreateAcc, setVisibleCreateAcc] = useState({
    login: "block",
    signUp: "none",
  });
  const showCreateAcc = () => {
    setVisibleCreateAcc({login: "none", signUp: "block"});
  };
  // -----[END]--- toggleing Sign in and Sign UP from with useState----

  return (
    <div className="container">
      <div className="login-section">
        <div className="login__left">
          <div>
            <img src={logo}></img>
            <h2>
              Travel Guru help you to travle all over the world. It will make
              your life easier.
            </h2>
          </div>
        </div>
        <div className="login__right">
          {/* ------Log in with Email and password -------*/}
          <div>
            <div
              className="login__login-form"
              style={{display: visibleCreateAcc.login}}
            >
              <form onSubmit={hendelEmailPassLogin}>
                <input
                  style={{borderColor: validation.borderRed}}
                  className="login__login-field"
                  name="email"
                  placeholder="Email address"
                  onBlur={hendelBlurLogin}
                />
                <span
                  style={{
                    color: "red",
                    display: validation.display,
                    margin: "0",
                  }}
                >
                  email adress is wrong..
                </span>
                <br />
                <input
                  style={{borderColor: validation.borderRed}}
                  className="login__login-field"
                  name="password"
                  placeholder="Password"
                  onBlur={hendelBlurLogin}
                />
                <span
                  style={{
                    color: "red",
                    display: validation.display,
                    margin: "0",
                  }}
                >
                  password is wrong..
                </span>
                <br />
                <input
                  className="login__login-btn"
                  type="submit"
                  value="Log In"
                />
              </form>
              <h5 className="login__forgotten-acc">Forgotten account</h5>
              <hr />
              <br />
              <button onClick={showCreateAcc} className="create-new-account">
                Create New Account
              </button>
            </div>

            {/* --------Sign up form----- */}
            <div className="signup" style={{display: visibleCreateAcc.signUp}}>
              <h3>Sign Up</h3>
              <hr />
              <form onSubmit={hendelEmailPassReg}>
                <input
                  className="login__login-field"
                  name="name"
                  placeholder="Full name"
                  onBlur={hendelBlur}
                />

                <input
                  style={{borderColor: validation.borderRed}}
                  className="login__login-field"
                  name="email"
                  placeholder="Email address"
                  onBlur={hendelBlur}
                />
                <span style={{color: "red", display: validation.display}}>
                  email is wrong or alrady have an account..
                </span>
                <br />

                <input
                  style={{borderColor: validation.borderRed}}
                  className="login__login-field"
                  name="password"
                  placeholder="New password"
                  onBlur={hendelBlur}
                />
                <small style={{color: "red", display: validationRegEx.display}}>
                  password must contain at least one one numeric digit..
                </small>
                <br />
                <input
                  className="login__login-btn"
                  type="submit"
                  value="Sign UP"
                />
              </form>
            </div>

            {/* -------log in with google------ */}
            <div onClick={hendelGoogleSignUp} className="loginWithGoogle">
              <div className="logo">
                <img src={googleLogo} />
              </div>
              <div className="logo-right">Continue with Google</div>
            </div>

            {/* -------log in with facebook------ */}
            <div onClick={hendelFacebookSignUp} className="loginWithGoogle">
              <div className="logo">
                <img src={facebookLogo} />
              </div>
              <div className="logo-right">Continue with Facebook</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
