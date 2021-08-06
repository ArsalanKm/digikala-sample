import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchFilters } from '../../store/product/actions';
import TextInput from '../common/text-input';
import CustomButton from '../custom-button';
import './_styles.scss';

const FiltersHeader = () => {
  const filters = useSelector((state) => state.products.searchFilters);
  const [value, setValue] = useState({
    q: filters.q,
    priceMin: filters.price.priceMin,
    priceMax: filters.price.priceMax,
  });

  const dispatch = useDispatch();
  const filterItems = [
    {
      key: 1,
      value: value.q,
      lable: 'جست و جو ',
      placeHolder: 'نام محصول را جست و جو کنید',
      onChanged: (q) => {
        setValue((prevState) => ({ ...prevState, q }));
      },
    },
    {
      key: 2,
      value: value.priceMin,
      lable: 'حداقل قیمت',
      placeHolder: 'حداقل قیمت را وارد کنید ',
      onChanged: (priceMin) => {
        if (!isNaN(priceMin))
          setValue((prevState) => ({ ...prevState, priceMin }));
      },
    },
    {
      key: 3,
      value: value.priceMax,
      lable: 'خداکثر قیمت',
      placeHolder: '  حداکثز قیمت را وارد کنید',
      onChanged: (priceMax) => {
        if (!isNaN(priceMax))
          setValue((prevState) => ({ ...prevState, priceMax }));
      },
    },
  ];
  const [state, setState] = useState(filterItems);

  const submitHandler = (e) => {
    e.preventDefault();
    const price = filters.price;
    price.priceMax = value.priceMax;
    price.priceMin = value.priceMin;
    dispatch(setSearchFilters({ ...filters, q: value.q, price }));
  };

  useEffect(() => {
    setState(filterItems);
  }, [value, filterItems]);
  return (
    <form className="filters-header" onSubmit={submitHandler}>
      {state.map((item) => {
        return (
          <TextInput
            key={item.key}
            placeholder={item.placeHolder}
            label={item.lable}
            type={item.type}
            value={item.value}
            onChange={item.onChanged}
          />
        );
      })}

      <CustomButton className="custom-button" type="submit">
        جست و جو
      </CustomButton>
    </form>
  );
};

export default FiltersHeader;
