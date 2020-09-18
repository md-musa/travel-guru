import React, {createContext, useState} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import Booking from "./Components/Booking/Booking";
import Home from "./Components/Home/Home";
import HotelList from "./Components/HotelList/HotelList";
import Login from "./Components/LongIn/Login";
import NotFound from "./Components/NotFound/NotFound";
import PrivateRoute from "./Components/PrivateRouter/PrivateRoute";

export const DetailsContext = createContext();
export const UserDataContext = createContext();

function App() {
  const [details, setDetails] = useState({});
  const [loggedinUser, setLoggedinUser] = useState({});

  return (
    <div className="App">
      <DetailsContext.Provider value={[details, setDetails]}>
        <UserDataContext.Provider value={[loggedinUser, setLoggedinUser]}>
          <Router>
            <Switch>
              <Route path="/booking">
                <Booking />
              </Route>

              <Route path="/login">
                <Login />
              </Route>

              <PrivateRoute path="/hotel">
                <HotelList />
              </PrivateRoute>

              <Route exact path="/">
                <Home />
              </Route>

              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Router>
        </UserDataContext.Provider>
      </DetailsContext.Provider>
    </div>
  );
}
export default App;
