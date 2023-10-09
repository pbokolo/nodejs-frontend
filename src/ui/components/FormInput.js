import React from "react";

export default function FormInput({
  label,
  id,
  placeholder,
  type,
  value,
  changeHandler,
}) {
  return (
    <fieldset>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={changeHandler}
      />
    </fieldset>
  );
}
