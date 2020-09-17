import React, {useContext} from "react";
import {UserDataContext} from "../../App";
import {Route, Redirect} from "react-router-dom";

const PrivateRoute = ({children, ...rest}) => {
  const [loggedinUser, setLoggedinUser] = useContext(UserDataContext);
  return (
    <Route
      {...rest}
      render={({location}) =>
        loggedinUser.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: {from: location},
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
