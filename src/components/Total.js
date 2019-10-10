import React from 'react';
import {connect} from "react-redux";

 export const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.store.car.price + props.store.additionalPrice}</h4>
    </div>
  );
};

export default connect(
  state => state
)(Total);

