import React, {useContext} from "react";
import "./Booking.css";
import Header from "../Header/Header";
import bgImg from "../../images/Image/bgImg.png";
import Details from "../Details/Details";
import {Link} from "react-router-dom";
import {DetailsContext} from "../../App";
var backgroundImg =
  "https://www.gannett-cdn.com/presto/2019/10/28/USAT/bf3b0340-a8b7-4600-bd67-244fa3a20d6e-p.76_Santorini_1000_PLACES.jpg?width=2560";

const Booking = () => {
  const [details, setDetails] = useContext(DetailsContext);
  return (
    <div className="home" style={{backgroundImage: `url(${backgroundImg})`}}>
      <Header />
      <div className="home__slider-container">
        <div className="home__slider-left">
          <Details />
        </div>

        <div className="home__slider-right">
          {/* -------booking form---------- */}
          <div className="login__login-form">
            <form className="booking__form">
              <span>Origin</span>
              <input
                className="login__login-field"
                placeholder="Origin"
                value="Dhaka"
              />
              <br />
              <span>Destination</span>
              <input
                className="login__login-field"
                placeholder="Destination"
                value={details.name}
              />
              <div style={{display: "flex"}}>
                <div>
                  <span>From</span>
                  <br />
                  <input className="booking__date-field" type="date" />
                </div>
                <div>
                  <span>To</span>
                  <br />
                  <input className="booking__date-field" type="date" />
                </div>
              </div>

              <Link to="/hotel">
                <input
                  className="login__login-btn booking_btn"
                  type="submit"
                  value="Start Booking"
                />
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
