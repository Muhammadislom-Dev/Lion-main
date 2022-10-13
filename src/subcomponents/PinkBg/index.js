import React from "react";

export default function PinkBg({ light, style = {} }) {
  return (
    <div className="homeproduction-title">
      <img
        src={`/assets/images/ellipse${light ? "-light" : ""}.png`}
        alt="Lion Pink Bg"
        style={{ position: "absolute", opacity: light ? 1 : 0.6, ...style }}
        className="pink-img"
      />
    </div>
  );
}
