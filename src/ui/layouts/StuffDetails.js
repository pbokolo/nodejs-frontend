import React from "react";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";

import { Stuff } from "../../controller/stuff";
import { setType } from "../../controller/stuffDialogSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function StuffDetails({ stuff }) {
  const [cookies, setCookies] = useCookies(["user"]);

  const dispatch = useDispatch();
  const controller = new Stuff(dispatch);

  const handleDelete = () => {
    controller.delete(stuff._id);
  };

  const handleUpdate = () => {
    dispatch(setType("update"));
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
      {cookies.user?.id === stuff.userId ? (
        <div className="stuff__details-actions">
          <button onClick={handleDelete} className="btn btn--text btn--danger">
            <DeleteIcon fontSize="large" /> supprimer
          </button>
          <button onClick={handleUpdate} className="btn btn--text">
            <EditIcon fontSize="large" /> modifier
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
