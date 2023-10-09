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
    <fieldset className="form__fieldset">
      <label className="form__fieldset-label text--label" htmlFor={id}>
        {label}
      </label>
      <input
        className="form__fieldset-textinput"
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={changeHandler}
      />
    </fieldset>
  );
}
