import React from "react";

export default function UploadBox() {
  return (
    <div className="upload__box">
      <input type="file" className="fileInput" hidden />
      <img src="" alt="" className="previewImg" />
      <i className="fas fa-cloud-upload-alt"></i>
      <p>Select image from device</p>
    </div>
  );
}
