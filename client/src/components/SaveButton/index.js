import React from "react";
//button to submit user input - send to api
function SaveButton(props) {
    return (
        <button id="saveBtn" type="button" className="btn btn-secondary btn-block save-btn" {...props} tabIndex="0">
        <strong>Add to Cart</strong>
      </button>
    );
}
export default SaveButton;