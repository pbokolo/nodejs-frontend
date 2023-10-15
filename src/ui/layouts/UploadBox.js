import React, { useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

export default function UploadBox({ url, urlSetter }) {
  const [image, setImage] = useState(null);

  let loadImage = (e) => {
    //getting first user selected file
    let file = e.target.files[0];

    //returning if file is not selected
    if (!file) return;
    urlSetter(URL.createObjectURL(file));
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
        src={url ? url : ""}
        alt=""
        className={`previewImg ${url ? "previewImg--loaded" : ""}`}
      />
      <CloudUploadIcon sx={{ fontSize: "100px", color: "#dedede" }} />
      <p>Sélectionnez une image</p>
    </div>
  );
}
