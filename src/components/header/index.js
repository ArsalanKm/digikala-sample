import React from 'react';
import { Link } from 'react-router-dom';
import './_styles.scss';
import { ReactComponent as Icon } from '../../assets/shop.svg';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCartHidden } from '../../store/cart/actions';
import CartDropDown from '../cart-dropdown';

const Header = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.cartItems);
  const hidden = useSelector((state) => state.cart.hidden);
  return (
    <div className="header">
      <div className="options">
        <Link to="/" className="option">
          خانه
        </Link>
        <Link to="/checkout" className="option">
          کارت
        </Link>
      </div>
      <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
        <Icon className="shopping-icon" />
        <span className="item-count">{items.length}</span>
      </div>
      {hidden ? null : <CartDropDown />}
    </div>
  );
};

export default Header;
