import React from "react";
import { combineReducers, createStore } from "redux";
import {Provider} from "react-redux";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import * as reducers from "./components/state/reducer";
import * as actionCreators from "./components/state/actionCreators";

const App = () => {
  // const state = {
  //   additionalPrice: 0,
  //   car: {
  //     price: 26395,
  //     name: "2019 Ford Mustang",
  //     image:
  //       "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
  //     features: []
  //   },
  //   stores: [
  //     { id: 1, name: "V-6 engine", price: 1500 },
  //     { id: 2, name: "Racing detail package", price: 1500 },
  //     { id: 3, name: "Premium sound system", price: 500 },
  //     { id: 4, name: "Rear spoiler", price: 250 }
  //   ]
  // };

  const monsterReducer = combineReducers({
    carBuilder: reducers.carReducer
  });

  const store = createStore(
    monsterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  const removeFeature = item => {
    actionCreators.removeFeature(item);
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    actionCreators.buyItem(item);
  };
console.log("store from provider", store);
  return (<Provider store={store}>
    <div className="boxes">
      <div className="box">
        <Header/>
        <AddedFeatures  />
      </div>
      <div className="box">
        <AdditionalFeatures  />
        <Total/>
      </div>
    </div>
    </Provider>
  );
};

export default App;
