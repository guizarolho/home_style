import React from "react";
import './HoverCard.scss';

export default function HoverCard(props) {
  return (
    <div className="card">
      <h1>{props.title}</h1>
      <p>{props.thumbnail}</p>
    </div>
  )

}