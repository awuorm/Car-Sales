import React from "react";
import { connect } from "react-redux";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import { buyItem, removeFeature } from "../src/components/state/actionCreators";

export const App = props => {
  console.log("props from app", props);

  const removedFeature = item => {
    console.log(" remove button was clicked", item);
    removeFeature(item);
  };

  const boughtItem = item => {
    // e.preventDefault();
    // dipsatch an action here to add an item
    console.log("button was clicked", item);
    buyItem(item);
  };
 
  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.carBuilder.car} />
        <AddedFeatures
          car={props.carBuilder.car}
          removedFeature={removedFeature}
        />
      </div>
      <div className="box">
        <AdditionalFeatures
          store={props.carBuilder.store}
          boughtItem={boughtItem}
        />
        <Total
          additionalPrice={props.carBuilder.additionalPrice}
          car={props.carBuilder.car}
        />
      </div>
    </div>
  );
};

export default connect(
  state => state,
  { buyItem, removeFeature }
)(App);
