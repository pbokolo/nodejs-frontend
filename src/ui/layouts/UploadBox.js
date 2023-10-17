import React from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

export default function UploadBox({ url, imageSetter }) {
  let loadImage = (e) => {
    //getting first user selected file
    let file = e.target.files[0];

    //returning if file is not selected
    if (!file) return;
    imageSetter(file);
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
        name="file"
        className="fileInput"
        hidden
      />
      <img
        src={url ? url : ""}
        alt=""
        className={`previewImg ${url ? "previewImg--loaded" : ""}`}
      />

      {!url ? (
        <>
          <CloudUploadIcon sx={{ fontSize: "100px", color: "#dedede" }} />
          <p>Sélectionnez une image</p>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
