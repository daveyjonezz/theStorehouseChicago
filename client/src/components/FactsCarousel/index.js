import React from "react";
import "./style.css";


function FactsCarousel({children}) {
  return (

<div id="slideshow">


    <div>
     <img className="factpic"src="/images/stats4.jpg" alt="facts"/>
   </div>


   <div>
     <img className="factpic"src="/images/chicago2.jpg" alt="chicago"/>
   </div>

   <div>
     <img className="factpic" src="/images/stats1.jpg" alt="facts"/>
   </div>


   <div>
     <img className="factpic"src="/images/chicago3.jpg" alt="chicago"/>
   </div>


   <div>
     <img className="factpic"src="/images/stats2.jpg" alt="facts"/>
   </div>


   <div>
     <img className="factpic"src="/images/chicago1.jpg" alt="chicago"/>
   </div>


   <div>
     <img className="factpic"src="/images/stats3.jpg" alt="facts"/>
   </div>




</div>


  )}

export default FactsCarousel;
