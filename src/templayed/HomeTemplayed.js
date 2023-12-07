import React from "react";
import { useState } from "react";

import "./homeTemplayed.css";

function HomeTemplayed({ images, alt, id }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    if (!isActive) {
      setIsActive((current) => !current);
    }
  };

  const styleImage = isActive ? "magnific" : "reduction";
  const textTitle = isActive
    ? "Click to reduce the image"
    : "Click to enlarge the image";

  const reduceImage = () => {
    if (isActive) {
      setIsActive((current) => !current);
    }
  };

  return (
    <div
      className={`photo__block ${styleImage}`}
      onClick={reduceImage}
      title="Click to reduce the image"
    >
      <img
        src={images}
        alt={alt}
        onClick={handleClick}
        className={`basicStyle ${styleImage}`}
        title={textTitle}
      />
    </div>
  );
}

export default HomeTemplayed;
