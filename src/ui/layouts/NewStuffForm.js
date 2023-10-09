import React, { useState } from "react";
import FormInput from "../components/FormInput";

const initialState = {
  title: "",
  price: "",
  imageUrl: "",
  description: "",
  userId: "",
};
export default function NewStuffForm() {
  const [stuff, setStuff] = useState(initialState);
  const handleInputChange = (e) => {
    setStuff({ ...stuff, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(stuff);
    setStuff(initialState);
  };
  return (
    <form onSubmit={handleSubmit}>
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
        id="description"
        placeholder="Décrivez votre produit"
        value={stuff.description}
        onChange={handleInputChange}
      />
      <br />

      <input type="submit" value={"Vendre"} className="btn" />
    </form>
  );
}
