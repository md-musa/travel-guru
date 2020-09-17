import * as firebase from "firebase";
import "firebase/auth";
import {useContext} from "react";
import {UserDataContext} from "../../App";
import firebaseConfig from "../../firebase";
firebase.initializeApp(firebaseConfig);

// -------Sign Up with GOOGLE---
export const hendelGoogleSignUp = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((res) => {
      console.log(res.user);
      return res.user;
    });
};

export const hendelFacebookSignUp = () => {};

export const hendelEmailPassReg = (email, password) => {
  console.log("fireAuth", email);
  if (email && password) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => console.log(res))
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }
};

export const hendelEmailPassLogin = (email, password) => {
  if (email && password) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log("LogIn", res);
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  }
};
