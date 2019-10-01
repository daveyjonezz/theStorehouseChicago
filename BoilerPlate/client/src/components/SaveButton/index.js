import React from "react";
import "./style.css"

//button to submit user input - send to api

function SaveButton(props) {
    return (
        <button id="saveBtn" className="save-btn" {...props} tabIndex="0">
        <strong>&#10032;</strong>
      </button>
    );
}

export default SaveButton;