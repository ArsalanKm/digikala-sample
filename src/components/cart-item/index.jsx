import React from 'react';
import './_styles.scss';

const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <img src={item.images.main} alt={item.title} />
      <div className="item-details">
        <span className="name">{item.price.selling_price}</span>
        <span className="price">
          {item.quantity}x{item.price.selling_price}
        </span>
      </div>
    </div>
  );
};
export default CartItem;
