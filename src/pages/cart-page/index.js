import React from 'react';
import './_styles.scss';
import { useSelector } from 'react-redux';
import CheckoutItem from '../../components/checkout-item';
const CheckoutPage = () => {
  const items = useSelector((state) => state.cart.cartItems);
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>محصول</span>
        </div>
        <div className="header-block">
          <span>اسم محصول</span>
        </div>
        <div className="header-block">
          <span>تعداد</span>
        </div>
        <div className="header-block">
          <span>ثیمت</span>
        </div>
        <div className="header-block">
          <span>حذف</span>
        </div>
      </div>
      {items.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}

      <div className="total">{/* <span>TOTAL : $ {totalValue}</span> */}</div>
    </div>
  );
};

export default CheckoutPage;
