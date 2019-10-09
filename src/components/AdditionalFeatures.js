import React from 'react';
import {connect} from "react-redux";
import AdditionalFeature from './AdditionalFeature';
import * as actionCreators from './state/actionCreators';

export const AdditionalFeatures = props => {
  console.log("additional features props", props)
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.carBuilder.store.length ? (
        <ol type="1">
          {props.carBuilder.store.map(item => (
            <AdditionalFeature buyItem={props.type} key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default connect(state => state, actionCreators.buyItem)(AdditionalFeatures);
