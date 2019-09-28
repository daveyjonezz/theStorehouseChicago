import React from "react";
import "./style.css";

function Spacer({children}) {
    return (
    <div className="spacer">
        &nbsp;
        {children}
    </div>
    );
}

export default Spacer;