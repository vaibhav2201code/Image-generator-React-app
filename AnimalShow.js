import "./AnimalShow.css";
import { useState } from "react";
import bird from "./animals/bird.svg";
import cat from "./animals/cat.svg";
import cow from "./animals/cow.svg";
import dog from "./animals/dog.svg";
import gator from "./animals/gator.svg";
import horse from "./animals/horse.svg";
import heart from "./animals/heart.svg";

const mapSvg = { bird, cat, cow, dog, gator, horse };

function AnimalShow({ type }) {
  const [click, setClick] = useState(0);
  const handleclick = () => {
    setClick(click + 1);
  };
  return (
    <div onClick={handleclick} className="animal-show">
      <img className="animal" src={mapSvg[type]} alt="animals" />
      <img
        className="heart"
        src={heart}
        alt="heat-image"
        style={{ width: 10 + 10 * click + "px" }}
      />
    </div>
  );
}

export default AnimalShow;
