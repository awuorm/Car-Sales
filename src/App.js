import React from "react";
import { connect } from "react-redux";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import * as actionCreators from "../src/components/state/actionCreators";

export const App = props => {
  const removeFeature = item => {
    actionCreators.removeFeature(item);
  };

  const buyItem = item => {
    actionCreators.buyItem(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures buyItem={buyItem} />
        <Total />
      </div>
    </div>
  );
};

export default connect(
  state => state,
  actionCreators
)(App);
