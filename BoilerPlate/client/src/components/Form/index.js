import React from "react";


// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group row justify-content-center">

      <div className="col-xs-8">
      <label for="InputEmail">Subscribe to news from us</label>
      <input type="email" className="form-control" name="email" id="exampleInputEmail1" required aria-describedby="emailHelp" placeholder="Enter email" value={props.stateEmail}  onChange={props.onChange}/>
      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>

  </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group mx-sm-3 mb-2">
      <textarea style={{ textAlign: "center"}}className="form-control" rows="20" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "center", marginBottom: 10 }} className="btn btn-dark newsletterBtn" onClick={props.onClick}>
      {props.children}
    </button>
  );
}
