import React, {useContext} from "react";
import "./Header.css";
import logo from "../../images/Logo.png";
import {Link} from "react-router-dom";
import {UserDataContext} from "../../App";

const Header = () => {
  const [loggedinUser, setLoggedinUser] = useContext(UserDataContext);

  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo}></img>
      </div>
      <div>
        <input
          className="header__search"
          type="text"
          placeholder="search anything"
        ></input>
      </div>

      <div>
        <h3>News</h3>
      </div>
      <div>
        <h3>Destination</h3>
      </div>
      <div>
        <h3>Blog</h3>
      </div>
      <div>
        <h3>Contact</h3>
      </div>
      <div>
        {/* ---------Login Button----------- */}
        <Link to="/login">
          <h3>
            {loggedinUser.name ? (
              loggedinUser.name
            ) : (
              <button className="header__loginBtn">Log In</button>
            )}
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default Header;
