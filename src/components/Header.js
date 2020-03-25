import React from "react";
import { connect } from "react-redux";

export const Header = props => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.store.car.image} alt={props.store.car.name} />
      </figure>
      <h2>{props.store.car.name}</h2>
      <p>Amount: ${props.store.car.price}</p>
    </>
  );
};

export default connect(state => state)(Header);
