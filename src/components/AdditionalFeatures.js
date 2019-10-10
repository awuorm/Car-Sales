import React from "react";
import AdditionalFeature from "./AdditionalFeature";
import { connect } from "react-redux";
import { buyItem } from "./state/actionCreators";

export const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.store.store.length ? (
        <ol type="1">
          {props.store.store.map(item => (
            <AdditionalFeature
              buyItem={props.buyItem}
              key={item.id}
              feature={item}
            />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default connect(
  state => state,
  buyItem
)(AdditionalFeatures);
