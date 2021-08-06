import * as actionTypes from '../actions/actionTypes';

const initialState = {
  products: [],
  loading: false,
  error: true,
  totalPages: 0,
  searchFilters: {
    page: 1,
    rows: 25,
    price: { priceMin: 0, priceMax: 100000 },
    has_selling_stock: 1,
    sort: 4,
    q: '',
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
      const temp = {
        ...state.searchFilters,
        page: state.searchFilters.page + 1,
      };

      return {
        ...state,
        searchFilters: temp,
      };
    }
    case actionTypes.DECREASE_PAGE: {
      const temp = {
        ...state.searchFilters,
        page: state.searchFilters.page - 1,
      };

      return {
        ...state,
        searchFilters: temp,
      };
    }
    default:
      return state;
  }
};

export default reducer;
