import * as actionTypes from '../actions/actionTypes';
const initialState = {
  product: {},
  loading: false,
  error: false,
};

const index = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCT_START: {
      return {
        ...state,
        loading: true,
      };
    }
    case actionTypes.FETCH_PRODUCT_FAILED: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case actionTypes.FETCH_PRODUCT_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        product: action.payload.product,
      };
    }
    default:
      return state;
  }
};
export default index;
