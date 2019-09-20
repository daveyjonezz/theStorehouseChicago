import React from "react";
import "./style.css";

function Section({children}) {
  return (

    <section className="section parallax bg1">
        {children}
    </section>
  )}

export default Section;
