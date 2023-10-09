import React from "react";
import FormInput from "../components/FormInput";

export default function NewStuffForm() {
  return (
    <form>
      <FormInput
        label={"Titre"}
        id="titleTxt"
        placeholder={"Ex: Macbook pro 2015(15 pouces)"}
        type={"text"}
      />
    </form>
  );
}
