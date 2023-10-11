import React, { useState } from "react";
import FormInput from "../components/FormInput";
import { stuffController as controller } from "../../controller/stuff";

const initialState = {
  title: "",
  price: "",
  imageUrl: "",
  description: "",
  userId: "pbokolo",
};
export default function StuffForm({ selectedStuff }) {
  const [stuff, setStuff] = useState(selectedStuff || initialState);
  const handleInputChange = (e) => {
    setStuff({ ...stuff, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedStuff) {
      controller.submitNew(stuff);
      return;
    }
    controller.submitUpdate(stuff);
    // setStuff(initialState);
  };
  return (
    <form className="stuff__form" onSubmit={handleSubmit}>
      <FormInput
        label={"Titre"}
        id="title"
        placeholder={"Ex: Macbook pro"}
        type={"text"}
        value={stuff.title}
        changeHandler={handleInputChange}
      />
      <FormInput
        label={"Prix"}
        id="price"
        placeholder={"Ex: 30€"}
        type={"number"}
        value={stuff.price}
        changeHandler={handleInputChange}
      />
      <FormInput
        label={"Image"}
        id="imageUrl"
        placeholder={"Ex: https://serveur/image.jpg"}
        type={"text"}
        value={stuff.imageUrl}
        changeHandler={handleInputChange}
      />

      <textarea
        className="form__fieldset-textinput"
        id="description"
        placeholder="Décrivez votre produit"
        value={stuff.description}
        onChange={handleInputChange}
      />
      <br />

      <input
        type="submit"
        value={selectedStuff ? "Modifier" : "Vendre"}
        className="btn btn--primary"
      />
    </form>
  );
}
