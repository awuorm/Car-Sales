import { BUY_ITEM, REMOVE_FEATURE } from "./actionTypes";

export function removeFeature(item)  {
  console.log("action creator removeFeature", item, REMOVE_FEATURE);
  return {
    type: REMOVE_FEATURE,
    payload: {
      id: item.id,
      name: item.name,
      price: item.price,
    }
  };
};

export function buyItem(item)  {
  console.log("action creator", item, BUY_ITEM);
  return {
    type: BUY_ITEM,
    payload: {
      id: item.id,
      name: item.name,
      price: item.price,
    }
  };
};
