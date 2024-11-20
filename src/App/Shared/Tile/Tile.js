import React from "react";

export default function Tile( { props } ) {
  const {title, description} = props;
  return(
    <div>
      <p>{title}</p>
      <p>{description}</p>
    </div>
  )
}