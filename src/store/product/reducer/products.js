import * as actionTypes from '../actions/actionTypes';

const initialState = {
  products: [],
  loading: false,
  error: true,
  page: 1,
  totalPages: 0,
  searchFilters: {
    page: 1,
    rows: 25,
    price;{}
    'price[min]': 0,
    'price[max]': 100000,
    has_selling_stock: 1,
    sort: 4,
    q: 'سی',
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SEARCH_FILTERS: {
      return { ...state, searchFilters: action.payload };
    }
    case actionTypes.SET_PAGES_COUNT: {
      return { ...state, totalPages: action.payload };
    }
    case actionTypes.FETCH_PRODUCTS_LIST_START:
      return { ...state, loading: true };

    case actionTypes.FETCH_PRODUCTS_LIST_FAILED: {
      return { ...state, loading: false, error: true };
    }
    case actionTypes.FETCH_PRODUCTS_LIST_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        products: action.payload,
      };
    }
    case actionTypes.INCREASE_PAGE: {
      return {
        ...state,
        page: state.page + 1,
      };
    }
    case actionTypes.DECREASE_PAGE: {
      return {
        ...state,
        page: state.page - 1,
      };
    }
    default:
      return state;
  }
};

export default reducer;
