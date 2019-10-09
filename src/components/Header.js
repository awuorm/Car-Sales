import React from 'react';
import {connect} from "react-redux";
 export const Header = props => {
  console.log("props from header",props)
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.carBuilder.car.image} alt={props.carBuilder.car.name} />
      </figure>
      <h2>{props.carBuilder.car.name}</h2>
      <p>Amount: ${props.carBuilder.car.price}</p>
    </>
  );
};

export default connect(state => state)(Header);
