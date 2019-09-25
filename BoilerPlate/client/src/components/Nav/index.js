import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"><span><img class="nav-logo" src="/images/logo2.png"/></span><span id="titleStore">The Storehouse</span>  | <span id="titleCity">CHICAGO</span></a>
           
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
            </button>
            <div className="collapse navbar-collapse w-100 order-2" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Bio <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Newsletter</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Donate</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><i className="fas fa-shopping-cart"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  );
}

export default Nav;
