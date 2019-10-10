import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {combineReducers,createStore} from "redux";

import App from "./App";
import carReducer from "./components/state/reducer";

import "bulma/css/bulma.css";
import "./styles.scss";

const rootElement = document.getElementById("root");
const monsterReducer = combineReducers({
    carBuilder: carReducer,
  });

  const store = createStore(
    monsterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  rootElement
);
