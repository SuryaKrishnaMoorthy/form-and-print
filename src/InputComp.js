import Recat, { useState } from "react";

const Input = ({ onChange, value, label, type, placeholder }) => {
  return (
    <div className="input">
      <label>{label}</label>
      <input
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
