import React from 'react';
import { useDispatch } from 'react-redux';
import {
  clearItemFromCount,
  removeItem,
  addItem,
} from '../../store/cart/actions';
import './_styles.scss';

const CheckOutItem = ({ cartItem }) => {
  const { title, quantity, price, images } = cartItem;
  const dispatch = useDispatch();
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={images.main} alt="item" />
      </div>
      <span className="name">{title}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() => {
            dispatch(addItem(cartItem));
          }}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>

        <div
          className="arrow"
          onClick={() => {
            dispatch(removeItem(cartItem));
          }}
        >
          &#10095;
        </div>
      </span>
      <span className="price">{price.selling_price}</span>
      <span
        className="remove-button"
        onClick={() => dispatch(clearItemFromCount(cartItem))}
      >
        &#9747;
      </span>
    </div>
  );
};

export default CheckOutItem;
