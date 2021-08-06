import React from 'react';
import './_styles.scss';

const CustomButton = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default CustomButton;
