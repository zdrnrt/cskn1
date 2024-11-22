import React from "react";
import "./Tile.scss";

export default function Tile(props) {
  const type = props?.type || "default";
  const { title, description, steps } = props.data;
  return (
    <div className={`tile tile--${type}`}>
      <p className="tile__title">{title}</p>
      {description && <p className="tile__description">{description}</p>}
      {steps && <p className="tile__description">{steps}</p>}
    </div>
  );
}
