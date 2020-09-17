import React, {useContext, useState} from "react";
import "./Home.css";
import Header from "../Header/Header";
import Card from "../Card/Card";
import img1 from "../../images/Image/Sajek.png";
import img2 from "../../images/Image/Sreemongol.png";
import img3 from "../../images/Image/sundorbon.png";
import bgImg from "../../images/Image/bgImg.png";
import Details from "../Details/Details";
import {DetailsContext} from "../../App";
var coxBazar =
  "Cox's bazar is a city. Where people come to visit.Cox's bazar is a city. Where people come to visit.Cox's bazar is a city. Where people come to visit";
var sundorbon =
  "Sundorbon bazar is a city. Where people come to visit.Cox's bazar is a city. Where people come to visit.Cox's bazar is a city. Where people come to visit";
var sajek =
  "Sajek is a city. Where people come to visit.Cox's bazar is a city. Where people come to visit.Cox's bazar is a city. Where people come to visit";

const Home = () => {
  const [details, setDetails] = useContext(DetailsContext);

  return (
    <div className="home" style={{backgroundImage: `url(${bgImg})`}}>
      <Header />
      <div className="home__slider-container">
        <div className="home__slider-left">
          <Details />
        </div>

        <div className="home__slider-right">
          <div className="home__slider-rignt-inner">
            <Card img={img3} name={"SUNDONBAN"} description={sundorbon} />
            <Card img={img2} name={"SREEMONGOL"} description={sajek} />
            <Card img={img1} name={"SAJEK"} description={coxBazar} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
