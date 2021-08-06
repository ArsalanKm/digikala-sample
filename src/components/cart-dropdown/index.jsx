import React from 'react';
import CustomButton from '../custom-button';
import { useSelector, useDispatch } from 'react-redux';
import './_styles.scss';
import CartItem from '../cart-item';
import { toggleCartHidden } from '../../store/cart/actions';
import { useHistory } from 'react-router-dom';

const CartDropdown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const history = useHistory();
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => {
            return <CartItem key={cartItem.id} item={cartItem} />;
          })
        ) : (
          <span className="empty-message">کارت شما خالی است </span>
        )}
        <CustomButton
          onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
          }}
          className="custom-button"
        >
          رفتن به صفحه
        </CustomButton>
      </div>
    </div>
  );
};

export default CartDropdown;
