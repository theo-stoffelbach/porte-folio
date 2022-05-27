import React from "react";
import { Link } from "react-router-dom";

const Folder = ({ text }) => {
  const lang = "fr";
  let url = `/window/${text}-${lang}`;

  return (
    <Link to={url} className="folder">
      <div className="folder_canva_img">
        <div className="languette"></div>
        <div className="folder_img"></div>
      </div>
      <p>{text}</p>
    </Link>
  );
};

/* 

    Put that for not opened window !
Not up 960x621 px

  <p>
By <a href="https://catalystvibes.dribbble.com/"> catalyseur </a>
</p> */

export default Folder;
