import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSingleProduct } from '../../store/product/actions';
import { addItem } from '../../store/cart/actions';
import './_styles.scss';
import CustomButton from '../../components/custom-button';

const DetailPage = () => {
  const product = useSelector((state) => state.product.product);
  const dispatch = useDispatch();
  const { productId } = useParams();
  useEffect(() => {
    dispatch(fetchSingleProduct(productId));
  }, [productId, dispatch]);
  let render;
  if (product.images) {
    render = (
      <div className="detail-page">
        <img
          width="250"
          height="250"
          alt={product.title}
          src={product.images.main}
        />

        <div className="content">
          <span className="title">{product.title}</span>
          <span className="price">قیمت :{product.price.selling_price}</span>
          <div className="btn-container">
            <CustomButton
              onClick={() => {
                dispatch(addItem(product));
              }}
              className="custom-button"
            >
              خرید
            </CustomButton>
          </div>
        </div>
      </div>
    );
  } else render = <div>loading</div>;
  return render;
};

export default DetailPage;
