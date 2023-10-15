import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import FormInput from "../components/FormInput";
import { Stuff } from "../../controller/stuff";
import UploadBox from "./UploadBox";

export default function StuffForm({ selectedStuff }) {
  const dispatch = useDispatch();
  const controller = new Stuff(dispatch);

  const [stuff, setStuff] = useState(selectedStuff || controller.initialState);
  const [editable, setEditable] = useState(true);
  const [stuffImage, setStuffImage] = useState(null);
  const imageUrl = stuffImage ? URL.createObjectURL(stuffImage) : null;
  // eslint-disable-next-line
  const [cookies, setCookes] = useCookies(["user"]);

  const handleInputChange = (e) => {
    if (!editable) return;
    setStuff({ ...stuff, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setEditable(false);
    if (!selectedStuff) {
      stuff.userId = cookies.user.userId;
      controller.submitNew(stuff, cookies.user);
      return;
    }
    controller.submitUpdate(stuff, cookies.user);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <UploadBox url={imageUrl} imageSetter={setStuffImage} />
      {/* <img className="img img--stuff" alt={stuff.title} src={stuff.imageUrl} /> */}
      {/* <FormInput
        label={"Image"}
        id="imageUrl"
        placeholder={"Ex: https://serveur/image.jpg"}
        type={"text"}
        value={stuff.imageUrl}
        changeHandler={handleInputChange}
      /> */}
      <div className="test">
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
      </div>

      <textarea
        className="form__fieldset-textinput form__fieldset-textinput--textarea"
        id="description"
        placeholder="Décrivez votre produit"
        value={stuff.description}
        onChange={handleInputChange}
      />

      <input
        type="submit"
        value={selectedStuff ? "Modifier" : "Vendre"}
        className="btn btn--primary"
      />
    </form>
  );
}
