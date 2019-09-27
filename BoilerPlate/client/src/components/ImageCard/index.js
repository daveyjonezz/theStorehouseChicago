import React from "react";
import "./style.css";



export function ImageCard({imgsrc, children}) {
  return (
<div>
    <img alt="img"className="profilepic" src={imgsrc
        .split(" ")
        .map(imgsrc => imgsrc)
        .join(" ")}/>
</div>
  )}

export function StoryImage({Storyimgsrc, StoryImage, handleFade, children}){
  return(
    <img onClick={handleFade} alt="Sponsoree" className={StoryImage.split(" ").map(StoryImage => StoryImage).join(" ")}
    src={Storyimgsrc
      .split(" ")
      .map(Storyimgsrc => Storyimgsrc)
      .join(" ")}
    ></img>
  )
}