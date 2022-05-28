import React from "react";
import File from "./File";
import Folder from "./Folder";

const Home = () => {
  return (
    <div>
      <div className="Computer">
        <div className="grid">
          <File text={"CV.pdf"} />
          <Folder text={"Porte_folio"} folder={"all_Projet"} />
          <Folder text={"Sources"} folder={"Sources"} />
          <Folder text={"future fonctionnalités"} folder={"Projet_42"} />
          <Folder text={"New text"} folder={"Rick"} />
        </div>
      </div>
      <div className="pied de l'ordi">
        <p>I'm a support of screen</p>
      </div>
    </div>
  );
};

export default Home;
