import React, { useState } from "react";
import { useCookies } from "react-cookie";
import FormInput from "../components/FormInput";
import { useDispatch } from "react-redux";
import { Controller } from "../../controller/auth";

export default function AuthForm() {
  const [cookies, setCookies] = useCookies(["user"]);
  /* STATES */
  const dispatch = useDispatch();
  const controller = new Controller(dispatch);
  const [creds, setCreds] = useState(controller.initialState);
  const [editable, setEditable] = useState(true);
  const [type, setType] = useState("signin");

  /* EVENT HANDLERS */
  const handleInputChange = (e) => {
    if (!editable) return;
    setCreds({ ...creds, [e.target.id]: e.target.value });
  };
  const handleCtaClick = () => {
    let mode = "";
    switch (type) {
      case "signin":
        mode = "signup";
        break;
      case "signup":
        mode = "signin";
        break;
      default:
        mode = "signin";
        break;
    }
    setType(mode);
  };

  return (
    <>
      <form
        className="form"
        onSubmit={(e) =>
          controller.handleSubmit(e, type, creds, setEditable, setCookies)
        }
      >
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
          placeholder={"Ex: secret"}
          type={"password"}
          value={creds.password}
          changeHandler={handleInputChange}
        />
        {type === "signup" ? (
          <FormInput
            label={"Retaper le mot de passe"}
            id="repassword"
            placeholder={"Ex: secret"}
            type={"password"}
            value={creds.repassword}
            changeHandler={handleInputChange}
          />
        ) : (
          ""
        )}
        <fieldset className="form__fieldset">
          <input
            type="submit"
            value={type === "signin" ? "Connexion" : "Créer compte"}
            className="btn btn--primary"
          />
        </fieldset>
      </form>
      <p onClick={handleCtaClick} className="text text--cta">
        {type === "signin" ? "Créez un compte ici" : "Connexion"}
      </p>
    </>
  );
}
