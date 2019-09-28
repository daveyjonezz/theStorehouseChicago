import React from "react";
import {Input, TextArea, FormBtn} from "../Form"

function JumbotronFooter() {
  return (
    <div
      style={{ height: "100vh", clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron"
    >

      <img src="/images/chicagoskyline.png" alt="chicago skyline" style={{width:"20%"}}/>

      <h2>The StoreHouse Chicago</h2>
      <hr></hr>
      <Input></Input>

      <FormBtn>Submit</FormBtn>
     <hr></hr>
      <h5 style={{textAlign:"center"}}>EST. 2019</h5>
    </div>
  );
}

export default JumbotronFooter;
