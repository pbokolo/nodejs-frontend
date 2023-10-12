import React, { useState } from "react";
import FormInput from "../components/FormInput";
import { useDispatch } from "react-redux";
import { Controller } from "../../controller/auth";

export default function AuthForm() {
  /* STATES */
  const dispatch = useDispatch();
  const controller = new Controller(dispatch);
  const [creds, setCreds] = useState(controller.initialState);
  const [editable, setEditable] = useState(true);

  /* EVENT HANDLERS */
  const handleSubmit = (e) => {
    e.preventDefault();
    setEditable(false);
  };
  const handleInputChange = (e) => {
    if (!editable) return;
    setCreds({ ...creds, [e.target.id]: e.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Email"}
          id="email"
          placeholder={"Ex: kasereka@gmail.com"}
          type={"email"}
          value={creds.email}
          changeHandler={handleInputChange}
        />
        <FormInput
          label={"Mot de passe"}
          id="password"
          placeholder={"Ex: secred"}
          type={"password"}
          value={creds.password}
          changeHandler={handleInputChange}
        />
        <br />
        <fieldset className="form__fieldset">
          <input
            type="submit"
            value={"Connexion"}
            className="btn btn--primary"
          />
        </fieldset>
      </form>
      <p className="text text--cta">Créez un compte ici</p>
    </>
  );
}
