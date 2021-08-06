import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ShopItem from '../../components/shop-item';
import FiltersHeader from '../../components/filters';
import {
  fetchProductsList,
  increasePage,
  decreasePage,
  setSearchFilters,
} from '../../store/product/actions';
import CustomButton from '../../components/custom-button';
import './_styles.scss';

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const totalPages = useSelector((state) => state.products.totalPages);
  const filters = useSelector((state) => state.products.searchFilters);
  const page = useSelector((state) => state.products.searchFilters.page);
  const loading = useSelector((state) => state.products.loading);
  useEffect(() => {
    dispatch(fetchProductsList(filters));
  }, [filters, dispatch]);

  useEffect(() => {
    const url_string = window.location.href;
    const url = new URL(url_string);
    const page = url.searchParams.get('page')
      ? url.searchParams.get('page')
      : '';

    const rows = url.searchParams.get('rows')
      ? url.searchParams.get('rows')
      : '';
    const priceMin = url.searchParams.get('price[min]')
      ? url.searchParams.get('price[min]')
      : '';
    const priceMax = url.searchParams.get('price[max]')
      ? url.searchParams.get('price[max]')
      : '';
    const has_selling_stock = url.searchParams.get('has_selling_stock')
      ? url.searchParams.get('has_selling_stock')
      : '';
    const sort = url.searchParams.get('sort')
      ? url.searchParams.get('sort')
      : '';
    const q = url.searchParams.get('q') ? url.searchParams.get('q') : '';
    setSearchFilters({
      page,
      rows,
      price: { priceMin, priceMax },
      has_selling_stock,
      sort,
      q,
    });
  }, []);
  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set('page', filters.page);
    url.searchParams.set('rows', filters.rows);
    url.searchParams.set('price[min]', filters.price.priceMin);
    url.searchParams.set('price[max]', filters.price.priceMax);
    url.searchParams.set('has_selling_stock', filters.has_selling_stock);
    url.searchParams.set('sort', filters.sort);
    url.searchParams.set('q', filters.q);
    window.history.replaceState(null, null, url);
  }, [
    filters.page,
    filters.rows,
    filters.price.priceMin,
    filters.price.priceMax,
    filters.has_selling_stock,
    filters.sort,
    filters.q,
  ]);

  const renderItems = () => {
    return products.map((el) => <ShopItem key={el.id} item={el} />);
  };

  let display = <div>loading</div>;
  if (!loading) {
    display = (
      <div className="homepage ">
        <FiltersHeader />
        <div className="items">{renderItems()}</div>
        <div className="btn-container">
          {page < totalPages ? (
            <CustomButton
              className="custom-button next"
              onClick={() => {
                dispatch(increasePage(page));
              }}
            >
              next
            </CustomButton>
          ) : (
            ''
          )}

          {page > 1 ? (
            <CustomButton
              className="custom-button previous"
              onClick={() => {
                dispatch(decreasePage(page));
              }}
            >
              previous
            </CustomButton>
          ) : (
            ''
          )}
        </div>
      </div>
    );
  }
  return display;
};

export default HomePage;
