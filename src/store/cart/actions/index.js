import * as actionTypes from './actionTypes.js';

export const toggleCartHidden = () => {
  return {
    type: actionTypes.TOGGLE_CART_HIDDEN,
  };
};
export const addItem = (item) => {
  return {
    type: actionTypes.ADD_ITEM,
    payload: item,
  };
};

export const clearItemFromCount = (item) => {
  return {
    type: actionTypes.CLEAR_ITEM_FROM_CART,
    payload: item,
  };
};
export const removeItem = (item) => {
  return {
    type: actionTypes.REMOVE_ITEM,
    payload: item,
  };
};
