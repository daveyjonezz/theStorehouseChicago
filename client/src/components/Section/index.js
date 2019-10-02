import React from "react";
import "./style.css";



function Section({background, children}) {
  return (

    <section
    className={background.split(" ").map(background => "section background " + background).join(" ")}
     >
        {children}
    </section>
  )}  

export default Section;
