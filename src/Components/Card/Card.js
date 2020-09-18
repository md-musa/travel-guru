import React, {useContext, useState} from "react";
import {DetailsContext} from "../../App";
import "./Card.css";

const Card = ({img, name, description}) => {
  const [details, setDetails] = useContext(DetailsContext);

  const hendelDetails = (name, description) => {
    setDetails({name: name, description: description});
  };

  const [cardBorder, setCardBorder] = useState({
    border: "4px solid #efc92300",
  });

  return (
    <div
      onClick={() => {
        hendelDetails(name, description);
        setCardBorder({border: "4px solid rgb(239 201 35)"});
      }}
      className="card"
      style={{backgroundImage: `url(${img})`, border: cardBorder.border}}
    >
      <h2>{name}</h2>
    </div>
  );
};

export default Card;
