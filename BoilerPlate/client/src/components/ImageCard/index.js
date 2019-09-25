import React from "react";
import "./style.css";



function ImageCard({imgsrc, children}) {
  return (
<div>
    <img alt="img"className="profilepic" src={imgsrc
        .split(" ")
        .map(imgsrc => imgsrc)
        .join(" ")}/>
</div>
  )}

export default ImageCard;