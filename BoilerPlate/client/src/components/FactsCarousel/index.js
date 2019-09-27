import React from "react";
import "./style.css";


function FactsCarousel({children}) {
  return (

<div id="slideshow">


    <div>
     <img className="factpic"src="/images/fact4.PNG" alt="facts"/>
   </div>


   <div>
     <img className="factpic"src="/images/chicago2.jpg" alt="chicago"/>
   </div>

   <div>
     <img className="factpic" src="/images/fact1.PNG" alt="facts"/>
   </div>


   <div>
     <img className="factpic"src="/images/chicago3.jpg" alt="chicago"/>
   </div>


   <div>
     <img className="factpic"src="/images/fact2.PNG" alt="facts"/>
   </div>


   <div>
     <img className="factpic"src="/images/chicago1.jpg" alt="chicago"/>
   </div>


   <div>
     <img className="factpic"src="/images/fact3.PNG" alt="facts"/>
   </div>




</div>


  )}

export default FactsCarousel;
