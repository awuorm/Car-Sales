import { BUY_ITEM, REMOVE_FEATURE } from "./actionTypes";

export const removeFeature = item => {
  return {
    type: REMOVE_FEATURE,
    payload: {
      id: item.id,
      name: item.name,
      price: item.price,
    }
  };
};

export const buyItem = item => {
  return {
    type: BUY_ITEM,
    payload: {
      id: item.id,
      name: item.name,
      price: item.price,
    }
  };
};
