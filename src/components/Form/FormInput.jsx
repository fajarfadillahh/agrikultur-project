import React from "react";

const Input = ({
  handleChange,
  value,
  labelText,
  labelFor,
  id,
  name,
  type,
  isRequired = false,
  placeholder,
}) => {
  return (
    <div>
      <label htmlFor={labelFor} className="sr-only">
        {labelText}
      </label>
      <input
        onChange={handleChange}
        value={value}
        id={id}
        name={name}
        type={type}
        required={isRequired}
        placeholder={placeholder}
        className="relative flex h-[52px] w-full items-center rounded-md border border-gray-300 px-4 text-gray-900 placeholder-gray-600 focus:z-10 focus:border-green-600 focus:outline-none"
      />
    </div>
  );
};

export default Input;
