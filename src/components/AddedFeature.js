import React from 'react';


const AddedFeature = props => {
  console.log("added feature ==>", props);
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => props.removedFeature(props.feature)} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
