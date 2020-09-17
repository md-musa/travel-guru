import React, {useState, useEffect, useContext} from "react";
import * as firebase from "firebase";
import "firebase/auth";
import firebaseConfig from "./firebase";
import {UserContext} from "./App";
import {useHistory, useLocation} from "react-router-dom";
import {firestore} from "firebase";

const fireDb = firebase.initializeApp(firebaseConfig);

function LogIn() {
  const [loggedInUser, setLogggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let {from} = location.state || {from: {pathname: "/"}};

  const [user, setuser] = useState({
    email: "",
    name: "",
    password: "",
  });
  console.log(user);
  // sign in with google
  var provider = new firebase.auth.GoogleAuthProvider();
  const hendelAuth = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        console.log(res);
      });
  };
  // sign out
  const hendelOut = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        console.log("sign out from acount by google");
      })
      .catch(function (error) {});
  };

  const hendelBlur = (e) => {
    let validate = false;
    if (e.target.name === "email") {
      validate = true;
    }
    if (e.target.name === "password") {
      validate = true;
    }
    if (e.target.name === "name") {
      validate = true;
    }
    if (validate == true) {
      user[e.target.name] = e.target.value;
    }
    console.log(user);
  };
  //  sign up with custom email and password
  const hendelSignUp = (e) => {
    e.preventDefault();
    if (user.email && user.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => console.log(res))
        .catch(function (error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    }
    user.email = "";
    user.password = "";
    sendNameToDatabase(user.name);
  };

  var sendNameToDatabase = (name) => {
    fireDb
      .child("user")
      .push({name: name})
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  // Log in with email and password
  const hendelLogIN = (e) => {
    if (user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          console.log("LogIn", res);
          setLogggedInUser({email: user.email, password: user.password});
          history.replace(from);
        })
        .catch(function (error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
        });
    }
    e.preventDefault();
  };

  return (
    <div style={{textAlign: "center"}}>
      <div>
        <button onClick={hendelAuth}>Sign up with google</button>
        <br />
        <button onClick={hendelOut}>Sing out</button>

        <h3>Sign up form</h3>
        <form onSubmit={hendelSignUp}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onBlur={hendelBlur}
            required
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            onBlur={hendelBlur}
            required
          />
          <br></br>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onBlur={hendelBlur}
            required
          />
          <br></br>
          <input type="submit" value="submit" />
        </form>

        <h2>Log in form</h2>
        <form onSubmit={hendelLogIN}>
          <input
            type="text"
            name="email"
            placeholder="Email"
            onBlur={hendelBlur}
            required
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onBlur={hendelBlur}
            required
          />
          <br />
          <input type="submit" value="Log in" />
        </form>
      </div>
    </div>
  );
}

export default LogIn;
