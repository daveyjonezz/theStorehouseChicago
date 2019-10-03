import React, { useState } from "react";
import "./style.css";
import Fade from 'react-reveal/Fade';
import GoogleLogin from 'react-google-login';

const onSignIn = (googleUser) =>{
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());

    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);
  }

const Nav = () => {



    return (

        <Fade top duration={1000}>

            <nav className="navbar fixed-top navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand d-flex align-items-center" href="/"><span><img width="65" height="100%" alt="Nav Bar Logo" src="/images/NavBarLogo.png" /></span><span id="titleStore">The Storehouse</span>  | <span id="titleCity">CHICAGO</span></a>

                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="icon-bar top-bar"></span>
                        <span className="icon-bar middle-bar"></span>
                        <span className="icon-bar bottom-bar"></span>
                    </button>
                    <div className="collapse navbar-collapse stroke w-100 order-2" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/stories">Stories</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/merch">Merch</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Donate</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="usercart"><i className="fas fa-shopping-cart"></i></a>
                            </li>
                            <li className="nav-item">
                            <div data-onsuccess="onSignIn" data-theme="dark" className="g-signin2"></div>
                
                    </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Fade>
    );
}

export default Nav;
