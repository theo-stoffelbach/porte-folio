import React, { useState } from "react";
import File from "./File";
import Folder from "./Folder";

const Home = () => {
  const [page, setPage] = useState("");

  return (
    <div>
      <div className="Computer">
        <div className="grid">
          <File text={"CV.pdf"} />
          <Folder text={"Porte_folio"} />
          <Folder text={"Sources"} />
          <Folder text={"Features"} />
          <Folder text={"New text"} />
        </div>
      </div>
      <div className="pied de l'ordi">
        <p>I'm a support of screen</p>
      </div>
    </div>
  );
};

export default Home;
