import React from 'react';
import {connect} from "react-redux";

import AddedFeature from './AddedFeature';
import * as actionCreators from "./state/actionCreators";

 export const AddedFeatures = props => {
   console.log("props from Added features", props);
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.carBuilder.car.features.length ? (
        <ol type="1">
          {props.carBuilder.car.features.map(item => (
            <AddedFeature removeFeature={props.type} key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default connect(state => state, actionCreators.removeFeature,)(AddedFeatures);
