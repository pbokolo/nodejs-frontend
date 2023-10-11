import React, { useState } from "react";
import { useDispatch } from "react-redux";
import FormInput from "../components/FormInput";
import { Stuff } from "../../controller/stuff";

export default function StuffForm({ selectedStuff }) {
  const dispatch = useDispatch();
  const controller = new Stuff(dispatch);
  const [stuff, setStuff] = useState(selectedStuff || controller.initialState);
  const [editable, setEditable] = useState(true);
  const handleInputChange = (e) => {
    if (!editable) return;
    setStuff({ ...stuff, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setEditable(false);
    if (!selectedStuff) {
      controller.submitNew(stuff, setStuff);
      return;
    }
    controller.submitUpdate(stuff, setStuff);
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
        className="form__fieldset-textinput form__fieldset-textinput--textarea"
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
