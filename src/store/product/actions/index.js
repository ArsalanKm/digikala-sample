import * as actionTypes from './actionTypes';
import axios from 'axios';

//product-list
export const fetchProductsListStart = () => {
  return {
    type: actionTypes.FETCH_PRODUCTS_LIST_START,
  };
};

export const fetchProductsListFail = (error) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_LIST_FAILED,
    payload: error,
  };
};

export const fetchProductsListSuccess = (products) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_LIST_SUCCESS,
    payload: products,
  };
};
export const increasePage = () => {
  return {
    type: actionTypes.INCREASE_PAGE,
  };
};
export const decreasePage = () => {
  return {
    type: actionTypes.DECREASE_PAGE,
  };
};
export const setPagesCount = (pageCount) => {
  return {
    type: actionTypes.SET_PAGES_COUNT,
    payload: pageCount,
  };
};

export const setSearchFilters = (searchFilters) => {
  return {
    type: actionTypes.SET_SEARCH_FILTERS,
    payload: searchFilters,
  };
};
export const fetchProductsList = (searchFilters) => {
  return (dispatch) => {
    dispatch(fetchProductsListStart());
    axios
      .get(`https://www.digikala.com/front-end/search/`, {
        headers: { token: 'mpfKW9ghVTCSuBZ7qTkSmEyvL38ShZxv' },
        params: {
          page: searchFilters.page,
          rows: searchFilters.rows,
          "price[min]": searchFilters.price.priceMin,
          "price[max]": searchFilters.price.priceMax,
          sort: searchFilters.sort,
          q: searchFilters.q,
          has_selling_stock:searchFilters.has_selling_stock
        },
      })
      .then((data) => {
        dispatch(setPagesCount(data.data.data.pager.total_pages));
        dispatch(fetchProductsListSuccess(data.data.data.products));
      })
      .catch((err) => dispatch(fetchProductsListFail(err)));
  };
};

//single-product

export const fetchSingleProductStart = () => {
  return {
    type: actionTypes.FETCH_PRODUCT_START,
  };
};

export const fetchSingleProductFail = (error) => {
  return {
    type: actionTypes.FETCH_PRODUCT_FAILED,
    payload: error,
  };
};

export const fetchSingleProductSuccess = (product) => {
  return {
    type: actionTypes.FETCH_PRODUCT_SUCCESS,
    payload: product,
  };
};

export const fetchSingleProduct = (productId) => {
  return (dispatch) => {
    dispatch(fetchSingleProductStart());
    axios
      .get(
        `https://www.digikala.com/front-end/product/${productId}/
        `,
        { headers: { token: 'mpfKW9ghVTCSuBZ7qTkSmEyvL38ShZxv' } }
      )
      .then((res) => {
        dispatch(fetchSingleProductSuccess(res.data.data));
      })
      .catch((err) => dispatch(fetchSingleProductFail(err)));
  };
};
