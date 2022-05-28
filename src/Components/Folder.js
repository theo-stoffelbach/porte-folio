import React from "react";
import all_Projet from "../asset/Tous_les_projets.zip";
import Projet_42 from "../asset/Projet_42.zip";

const Folder = ({ text, folder }) => {
  // const lang = "fr";
  // let url = `/window/${text}-${lang}`;

  if (folder === "Sources") folder = "https://catalystvibes.dribbble.com/";
  else if (folder === "all_Projet") folder = all_Projet;
  else if (folder === "Projet_42") folder = Projet_42;
  else folder = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

  function test() {
    console.log(folder);
  }

  return (
    <div className="file">
      <a href={folder} download onClick={test}>
        <div className="folder_canva_img">
          <div className="languette"></div>
          <div className="folder_img"></div>
        </div>
        <p>{text}</p>
      </a>
    </div>
  );
};

/* 

    Put that for not opened window !
Not up 960x621 px

  <p>
By <a href="https://catalystvibes.dribbble.com/"> catalyseur </a>
</p> */

export default Folder;
