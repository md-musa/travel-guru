import React from "react";
import "./HotelRoom.css";

const HotelRoom = ({img}) => {
  return (
    <div className="hotelRoom">
      <div className="hotelRoom__img">
        <img src={img} />
      </div>
      <div className="hotelRoom__details">
        <h5>Light bright airly stylish apertment</h5>
        <p className="color">
          4 guests &nbsp; 2 bedrooms &nbsp; 2 beds &nbsp; 2 bathroom{" "}
        </p>
        <p className="color">ligth bright stylish room . </p>
        <small className="color">Cancellation fexibility availible</small>
        <br />
        <b>
          <span>
            <span className="star">★ </span>
            <span className="color">4.9(20)</span> &nbsp; 34$/
            <span className="color">night &nbsp; total 168$</span>
          </span>
        </b>
      </div>
    </div>
  );
};

export default HotelRoom;
