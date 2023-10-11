import React from "react";
import { useDispatch } from "react-redux";
import { Stuff } from "../../controller/stuff";
import DeleteIcon from "@mui/icons-material/Delete";

export default function StuffDetails({ stuff }) {
  const dispatch = useDispatch();
  const controller = new Stuff(dispatch);

  const handleDelete = () => {
    controller.delete(stuff);
  };
  return (
    <div className="stuff__details">
      <img
        src={stuff.imageUrl}
        alt={stuff.title}
        className="card--stuff__image"
      />
      <div className="card--stuf__details">
        <p className="text text--stuff-price">{`${stuff.price}€`}</p>
        <p className="text text--stuff-price">{`${stuff.description}€`}</p>
      </div>
      <div className="stuff__details-actions">
        <button onClick={handleDelete} className="btn btn--text btn--danger">
          <DeleteIcon fontSize="large" /> supprimer
        </button>
        <button className="btn btn--text">modifier</button>
      </div>
    </div>
  );
}
