import { BUY_ITEM, REMOVE_FEATURE } from "./actionTypes";

export function removeFeature(item) {
  return {
    type: REMOVE_FEATURE,
    payload: item
  };
}

export function buyItem(item) {
  return {
    type: BUY_ITEM,
    payload: item
  };
}
