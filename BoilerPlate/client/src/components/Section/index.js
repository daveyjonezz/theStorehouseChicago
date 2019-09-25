import React from "react";
import "./style.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


function Section({background, children}) {
  return (

    <section className="aos-init asos-animate"
    className={background
      .split(" ")
      .map(background => "section background " + background)
      .join(" ")}
     >
        {children}
    </section>
  )}

export default Section;
