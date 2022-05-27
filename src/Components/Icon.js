import React from "react";
import { Link } from "react-router-dom";
// url, image_url, image_desc
import Close from "../asset/Close.png";
import Mode_Window from "../asset/Mode_Window.png";
import Remove_screen from "../asset/Remove_screen.png";

const Icon = ({ texte, url, name_image, image_desc = "test" }) => {
  let opacity = false;

  if (texte === "Remove_screen" || texte === "Mode_Window") {
    opacity = true;
  }

  if (name_image === "Close") {
    name_image = Close;
  } else if (name_image === "Mode_Window") {
    name_image = Mode_Window;
  } else if (name_image === "Remove_screen") {
    name_image = Remove_screen;
  }

  return (
    <Link to={url} className="icon">
      <img
        src={name_image}
        alt={image_desc}
        className={`${opacity ? "bind" : ""}`}
      />
    </Link>
  );
};

export default Icon;
