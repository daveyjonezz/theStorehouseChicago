import React from "react";
import "./style.css";


function Carousel({children}) {
  return (
<div>
    <div className="carousel-item">
        <img src="/images/eboard1.jpg" alt="eboard1"/>
            <div className="carousel-caption d-none d-md-block">
            <h5>...</h5>
            <p>...</p>
            </div>
    </div>
    <div className="carousel-item">
        <img src="/images/eboard2.jpg" alt="eboard2"/>
            <div className="carousel-caption d-none d-md-block">
            <h5>...</h5>
            <p>...</p>
            </div>
    </div>
    <div className="carousel-item">
        <img src="/images/eboard3.jpg" alt="eboard3"/>
            <div className="carousel-caption d-none d-md-block">
            <h5>...</h5>
            <p>...</p>
            </div>
    </div>
    <div className="carousel-item">
        <img src="/images/eboard4.jpg" alt="eboard4"/>
            <div className="carousel-caption d-none d-md-block">
            <h5>...</h5>
            <p>...</p>
            </div>
    </div>
</div>
  )}

export default Carousel;
