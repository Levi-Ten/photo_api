import axios from "axios";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import Buttons from "../buttons/Buttons";
import { CartContext } from "../context/Context";
import HomeTemplayed from "../templayed/HomeTemplayed";
import "./home.css";

function Home() {
  const { data } = useContext(CartContext);

  // https://stackoverflow.com/questions/45578844/how-to-set-header-and-options-in-axios
  const apiUrl = ` https://api.pexels.com/v1/search?query=${data}`;

  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    axios
      .get(apiUrl, {
        headers: { 
          Authorization:
            "97AMUjTXfax4TIOImjIVjvsvIAIRJz1XyRtmNKp9QjnLgKdV2AjCJAC3",
        },
      })
      .then((res) => setPhoto(res.data.photos));
  }, [apiUrl]);

  const rezultPhoto = photo.map((e, i) => {
    const smallPhoto = e.src.small;
    const mediumPhoto = e.src.medium;
    const altPhoto = e.alt;
    return (
      <HomeTemplayed
        key={i}
        x={smallPhoto}
        images={mediumPhoto}
        alt={altPhoto}
        id={i}
      />
    );
  });

  return (
    <div className="container">
      <div className="photos">{rezultPhoto}</div>
      <Buttons />
    </div>
  );
}

export default Home;
