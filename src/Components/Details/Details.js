import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {DetailsContext} from "../../App";
import "./Details.css";

const Details = () => {
  const [details, setDetails] = useContext(DetailsContext);
  const {name, description} = details;

  return (
    <div className="details">
      <h2>{name}</h2>
      <p>{description}</p>
      <Link to="/booking">{name && <button>Booking now 🠮</button>}</Link>
    </div>
  );
};

export default Details;
