import React from "react";
import FormInput from "../components/FormInput";

export default function NewStuffForm() {
  return (
    <form>
      <FormInput
        label={"Titre"}
        id="titleTxt"
        placeholder={"Ex: Macbook pro"}
        type={"text"}
      />
      <FormInput
        label={"Prix"}
        id="priceTxt"
        placeholder={"Ex: 30€"}
        type={"number"}
      />
      <FormInput
        label={"Image"}
        id="imgUrlTxt"
        placeholder={"Ex: https://serveur/image.jpg"}
        type={"text"}
      />

      <textarea placeholder="Décrivez votre produit" />
      <br />

      <input type="submit" value={"Vendre"} className="btn" />
    </form>
  );
}
