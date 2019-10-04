import React from "react";
import "./style.css";


function Carousel({children}) {
  return (

<div id="slideshow2" className="text-center">
   <div>
     <img className="eboardimg" src="/images/adi-eboard.jpg" alt="eboard1"/>
     <h2 style={{padding:"10px"}}>Adi Cepela</h2>
   </div>
   <div>
     <img className="eboardimg"src="/images/davis-eboard.jpg" alt="eboard2"/>
     <h2 style={{padding:"10px"}}>Davis Birsan</h2>
   </div>
   <div>
     <img className="eboardimg"src="/images/jenni-eboard.jpg" alt="eboard3"/>
     <h2 style={{padding:"10px"}}>Jenni Birsan</h2>
   </div>
   <div>
     <img className="eboardimg"src="/images/jimi-eboard.jpg" alt="eboard4"/>
     <h2 style={{padding:"10px"}}>Jimi Loc Nguyen</h2>
   </div>

</div>


  )}

export default Carousel;
