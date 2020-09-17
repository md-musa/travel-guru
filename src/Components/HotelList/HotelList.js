import React, {useContext} from "react";
import {DetailsContext} from "../../App";
import HotelRoom from "../HotelRoom/HotelRoom";
import "./HotelList.css";
import img1 from "../../images/Image/Rectangle 26.png";
import img2 from "../../images/Image/Rectangle 27.png";
import img3 from "../../images/Image/Rectangle 28.png";
import Map from "../Map/Map";
import Header from "../Header/Header";

const HotelList = () => {
  const [details, setDetalis] = useContext(DetailsContext);
  return (
    <div>
      <Header />
      <hr />
      <div className="hotel-list">
        <div className="hotel-list__left">
          <h2>{details.name}</h2>
          <HotelRoom img={img1} />
          <HotelRoom img={img2} />
          <HotelRoom img={img3} />
        </div>
        <div className="hotel-list__right">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default HotelList;
