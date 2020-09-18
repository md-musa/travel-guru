import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import Card from "../Card/Card";
import img1 from "../../images/Image/Sajek.png";
import img2 from "../../images/Image/Sreemongol.png";
import img3 from "../../images/Image/sundorbon.png";
import bgImg from "../../images/Image/bgImg.png";
import Details from "../Details/Details";
var bgimg2 =
  "https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2019/01/zakynthos-JPEG.jpg?fit=1920%2C1080&ssl=1";
var sreemangol =
  "Sreemangal is located at 24.3083°N 91.7333°E. It has 43,952 households and total area 450.74 km². It is bordered by Moulvibazar Sadar to the north, Tripura to the south, Kamalganj to the east and Chunarughat, Nabiganj and Bahubal to the west.";
var sundorbon =
  "The Sundarbans Reserve Forest (SRF), located in the south-west of Bangladesh between the river Baleswar in the East and the Harinbanga in the West, adjoining to the Bay of Bengal, is the largest contiguous mangrove forest in the world";
var sajek =
  "Sajek is an emerging tourist spot in Bangladesh situated among the hills of the Kasalong range of mountains in Sajek union, Baghaichhari Upazila in Rangamati District.[1] The valley is 1,476 feet (450 m) above sea level.[2] Sajek valley is known as the Queen of Hills & Roof of Rangamati.";

const Home = () => {
  return (
    <div className="home" style={{backgroundImage: `url(${bgimg2})`}}>
      <Header />
      <div className="home__slider-container">
        <div className="home__slider-left">
          <Details />
        </div>

        <div className="home__slider-right">
          <div className="home__slider-rignt-inner">
            <Card style={{border: "solid red 2px"}} img={img3} name={"SUNDARBAN"} description={sundorbon}/>
            <Card img={img2} name={"SREEMONGOL"} description={sreemangol} />
            <Card img={img1} name={"SAJEK"} description={sajek} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
