import React from "react";
import "./style.css";


function Carousel({children}) {
  return (

<div id="slideshow">
   <div>
     <img className="eboardimg" src="/images/eboard1.jpg" alt="eboard1"/>
     <h1>Meghan from Finance</h1>
   </div>
   <div>
     <img className="eboardimg"src="/images/eboard2.jpg" alt="eboard2"/>
     <h1>Matt from Marketing</h1>
   </div>
   <div>
     <img className="eboardimg"src="/images/eboard3.jpg" alt="eboard3"/>
     <h1>Mitch from Advertising</h1>
   </div>
   <div>
     <img className="eboardimg"src="/images/eboard4.jpg" alt="eboard4"/>
     <h1>Mel from Buying</h1>
   </div>

</div>


  )}

export default Carousel;
