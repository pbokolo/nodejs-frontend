import React, { useState } from "react";

export default function UploadBox() {
  const [image, setImage] = useState(null);

  let loadImage = (e) => {
    //getting first user selected file
    let file = e.target.files[0];

    //returning if file is not selected
    if (!file) return;
    setImage(file);

    // if file selected

    //passing selected file url as source to preview image
    // previewImg.src = URL.createObjectURL(file);

    //once image loaded
    /*previewImg.addEventListener("load", () => {
      //displaying image height & width in respective inputs
      widthInput.value = previewImg.naturalWidth;
      heightInput.value = previewImg.naturalHeight;
      orgRatio = previewImg.naturalWidth / previewImg.naturalHeight;
      wrapper.classList.add("active");
    });*/
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
      <i className="fas fa-cloud-upload-alt"></i>
      <p>Select image from device</p>
    </div>
  );
}
