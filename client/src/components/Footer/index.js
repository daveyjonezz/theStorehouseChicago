import React from "react";


export function Footer() {
    return (

        <div
            style={{ clear: "both", textAlign: "center", marginBottom: 0, padding: 0, backgroundColor: "transparent" }}
            className="jumbotron"
        >
            <a href="/"><img src="/images/chicagoskyline.png" alt="chicago skyline" style={{ width: "20%" }} /></a>

            {/* <h2>The StoreHouse Chicago</h2> */}
        </div>

    );
}

export function Footer2() {
    return (

        <div
            style={{ clear: "both", textAlign: "center", marginBottom: 0, padding: 0, backgroundColor: "transparent" }}
            className="jumbotron"
        >
            <a href="https://stripe-thestorehousechicago.herokuapp.com/" target="_blank"><img src="/images/chicagoskyline.png" alt="chicago skyline" style={{ width: "20%" }} /></a>

            {/* <h2>The StoreHouse Chicago</h2> */}
        </div>

    );
}