import React, { useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

export default function UploadBox() {
  const [image, setImage] = useState(null);

  let loadImage = (e) => {
    //getting first user selected file
    let file = e.target.files[0];

    //returning if file is not selected
    if (!file) return;
    setImage(file);
  };

  return (
    <div
      className="upload__box"
      onClick={() => {
        document.getElementById("fileInput").click();
      }}
    >
      <input
        id="fileInput"
        onChange={loadImage}
        type="file"
        className="fileInput"
        hidden
      />
      <img
        src={image ? URL.createObjectURL(image) : ""}
        alt=""
        className={`previewImg ${image ? "previewImg--loaded" : ""}`}
      />
      <CloudUploadIcon sx={{ fontSize: "100px", color: "#dedede" }} />
      <p>Sélectionnez une image</p>
    </div>
  );
}
