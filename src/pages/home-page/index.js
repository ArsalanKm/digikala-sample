import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ShopItem from '../../components/shop-item';
import {
  fetchProductsList,
  increasePage,
  decreasePage,
} from '../../store/product/actions';
import CustomButton from '../../components/custom-button';
import './_styles.scss';

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const totalPages = useSelector((state) => state.products.totalPages);
  const filters = useSelector((state) => state.products.searchFilters);
  const page = useSelector((state) => state.products.searchFilters.page);
  useEffect(() => {
    dispatch(fetchProductsList(page));
  }, [page, dispatch]);

  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set('page', filters.page);
    url.searchParams.set('rows', filters.rows);
    url.searchParams.set('price[min]', filters.'price[min]');

    url.searchParams.set('field', filters.field ? filters.field : '');
    window.history.replaceState(null, null, url);
  }, []);

  const renderItems = () => {
    return products.map((el) => <ShopItem key={el.id} item={el} />);
  };

  return (
    <div className="homepage ">
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
};

export default HomePage;
