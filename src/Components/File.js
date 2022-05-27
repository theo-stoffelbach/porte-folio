import React from "react";
import File_img from "../asset/csv-file-format-extension2.png";
import CV from "../asset/CV_Théo-Stoffelbach.pdf";
// import { Link } from "react-router-dom";

const File = ({ text }) => {
  return (
    <div className="file">
      <a href={CV} download>
        <img src={File_img} alt="Fichier" />
        <p>{text}</p>
      </a>
    </div>
  );
};

export default File;
