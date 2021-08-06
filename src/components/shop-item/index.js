import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../store/cart/actions/index';
import CustomButton from '../custom-button';
import './_styles.scss';

const ShopItem = ({ item }) => {
  const { id, images, price, title } = item;
  const dispatch = useDispatch();
  return (
    <div className="collection-item">
      <img width="150" height="150" alt={title} src={images.main} />
      <div className="collection-footer">
        <span className="price">{title}</span>
        <span className="price">قیمت : {price.selling_price}</span>
      </div>
      <div className="btn-container">
        <CustomButton
          onClick={() => {
            dispatch(actions.addItem(item));
          }}
          className="custom-button"
        >
          خرید
        </CustomButton>
        <Link to={`/product/${id}`}>
          <CustomButton className="custom-button preview">مشاهده</CustomButton>
        </Link>
      </div>
    </div>
  );
};

export default ShopItem;
