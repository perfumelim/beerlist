import * as actionTypes from "./beerlist-types";

const INITIAL_STATE = {
  beer: [],
  cart: [],
  currentItem: null,
};

const beerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {};
    case actionTypes.REMOVE_FROM_CART:
      return {};
    case actionTypes.LOAD_CURRENT_ITEM:
      return {};
    default:
      return state;
  }
};

export default beerReducer;
