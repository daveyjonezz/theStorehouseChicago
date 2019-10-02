import React from "react";
//button to submit user input - send to api
function SaveButton(props) {
    return (
        <button id="saveBtn" className="save-btn" {...props} tabIndex="0">
        <strong>ADD TO CART</strong>
      </button>
    );
}
export default SaveButton;