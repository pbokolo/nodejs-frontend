import React from "react";
import { useDispatch } from "react-redux";
import { openAuthDialog } from "../../controller/authSlice";

export default function UserProfilePicture() {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(openAuthDialog());
  return (
    <img
      onClick={handleClick}
      src="https://cdn.pixabay.com/photo/2019/01/10/12/20/animal-3925260_1280.jpg"
      alt="utilisateur"
      className="img img__user-profile-picture--sm"
    />
  );
}
