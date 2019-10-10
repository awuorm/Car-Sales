import React from "react";

import AddedFeature from "./AddedFeature";
import { connect } from "react-redux";
import { removeFeature } from "./state/actionCreators";

export const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.store.car.features.length ? (
        <ol type="1">
          {props.store.car.features.map(item => {
            return (
              <AddedFeature
                removeFeature={props.removeFeature}
                key={item.id}
                feature={item}
              />
            );
          })}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default connect(
  state => state,
  removeFeature
)(AddedFeatures);
