import React from "react";
import { bindActionCreators } from "redux";
import * as types from "../state/actionTypes";

const initialCarstate = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  store: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 }
  ]
};

export function carReducer(state = initialCarstate, action) {
  switch (action.type) {
    case types.BUY_ITEM:
      return {
        ...state,
        additionalPrice: action.payload.price,
        [state.car.price]: state.car.price + action.payload.price,
        [state.car.features]: state.car.features.concat(action.payload),
      };
      case types.REMOVE_FEATURE:
        return {
          ...state,
          additionalPrice: action.payload.price,
          [state.car.price]: state.car.price - action.payload.price,
          [state.car.features]: state.car.features.filter((feature) => {
             return feature.id !== action.payload.id? feature : feature;
          }),
        };
    default:
      return state;
  }
}
