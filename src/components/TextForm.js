import { useState } from "react"
import React from 'react'



export default function TextForm(props) {

  const handelUpClick= ()=>{
   console.log("uppercase was clicked" + text);
   let newText = text.toUpperCase();
   setText(newText)
   props.showAlert ("dark mode","succeces");
  }
  const handelLoClick= ()=>{
   console.log("lowercase was clicked" + text);
   let newText = text.toLowerCase();
   setText(newText)
  } 
  const handelClearClick= ()=>{
    console.log("text clear" + text);
    let newText ='';
    setText(newText)
   }  
  const handleOnChange= (event)=>{
    console.log("On change");
    setText(event.target.value)
  }
  const [ text,setText ] = useState ('Enter text here');
    //setText("new text");
  return (
    <>
    <div className="container">
       <h>{props.heading}</h>
  <div className="mb-3">
    
  
    <textarea className="form-control" value={text} onChange={handleOnChange} id="My Box" rows="8"></textarea>

  </div>
  <button className="btn btn-primary mx-2" onClick={handelUpClick} >convert to upper case</button>
  <button className="btn btn-primary mx-2" onClick={handelLoClick} >convert to lower case</button>
  <button className="btn btn-primary mx-2" onClick={handelClearClick} >clear text</button>
  </div>
  <div className="container my-3">
    <h1>your text summaRY</h1>
    <p>{text.split(" ").length} WORDS AND {text.length} TEXT CHARECTERs</p>
    <p>{0.008 * text.split(" ").length} minutes to read</p>
    <h2>preview</h2>
    <p>{text}</p>

  </div>

  </>
  )
}
