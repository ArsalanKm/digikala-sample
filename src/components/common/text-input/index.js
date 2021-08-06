import React from 'react';
import './_styles.scss';

const TextInput = ({
  label,
  value,
  type = 'text',
  placeholder,
  onChange,
  ...props
}) => {
  const changed = (event) => {
    const val = event.target.value;
    if (onChange) {
      onChange(val);
    }
  };

  return (
    <div className="text-input">
      <div className="text-input-lable">{label && <label>{label}</label>}</div>
      <input
        value={value}
        type={type}
        onChange={changed}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
