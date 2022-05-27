import React, { useState } from "react";
import File from "./File";
import Folder from "./Folder";
import Icon from "./Icon";

const Window = () => {
  let url = window.location.href;
  let title_window = url
    .split("http://localhost:3000/window/")[1]
    .split("-")[0];

  const [titlePage, setTitlePage] = useState(title_window);

  setInterval(() => {
    let url = window.location.href;
    setTitlePage(url.split("http://localhost:3000/window/")[1].split("-")[0]);
    console.log(`SetTitlePage est : ${titlePage}`);
  }, 1000);
  setInterval(() => {
    setTitlePage("");
    console.log(titlePage);
  }, 1000);

  console.log(titlePage);

  return (
    <div>
      <div className="Computer">
        <div className="container_window">
          <div className="main_window">
            <div className="main_shortcut">
              <div className="container_title_window">
                <p>{title_window}</p>
              </div>
              <div className="top_window">
                <div></div>
                <div className="short_cut">
                  <Icon
                    texte={"Remove_screen"}
                    url={"/"}
                    name_image={"Remove_screen"}
                  />
                  <Icon
                    texte={"Mode_Window"}
                    url={"/"}
                    name_image={"Mode_Window"}
                  />
                  <Icon texte={"Close"} url={"/"} name_image={"Close"} />
                </div>
              </div>
            </div>
            <div className="grid_in_window">
              <Folder text={"Projet#1"} />
              <div className="cube_test"></div>
              <div className="cube_test"></div>
              <div className="cube_test"></div>
              <div className="cube_test"></div>
              <div className="cube_test"></div>
              <div className="cube_test"></div>
              <div className="cube_test"></div>
              <div className="cube_test"></div>
            </div>
          </div>
        </div>

        {/* It's the Home */}
        <div className="grid">
          <File text={"CV.pdf"} />
          <Folder text={"Porte_folio"} />
          <Folder text={"Sources"} />
          <Folder text={"Features"} />
          <Folder text={"New text"} />
        </div>
      </div>
      <div className="pied_de_l'ordi">
        <p>I'm a support of screen</p>
      </div>
    </div>
  );
};

export default Window;
