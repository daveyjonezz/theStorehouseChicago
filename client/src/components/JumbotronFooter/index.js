import React from "react";
import {Input, TextArea, FormBtn} from "../Form"

function JumbotronFooter(props) {
  return (
    <div
      style={{  clear: "both", textAlign: "center", marginBottom: 0 }}
      className="jumbotron"
    >
      <img src="/images/chicagoskyline.png" alt="chicago skyline" style={{width:"20%"}}/>

      <h2>The StoreHouse Chicago</h2>
      
      <Input {...props}></Input>
      <FormBtn {...props}>Submit</FormBtn>

     <a href="/contact" style={{color:"#CABCB0"}}><h4>Contact us</h4></a>
      <h6 style={{textAlign:"center"}}>EST. 2019</h6>
    </div>
  );
}

export default JumbotronFooter;
