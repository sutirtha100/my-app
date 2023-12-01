
import { useState } from 'react';
import './App.css';
//import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (massege, type)=>{
      setAlert({
         msg: massege,
         type: type
     })
    
    }
    
  return (
<>
<Navbar title="SUTIRTHA"  aboutText="About US" />
<Alert alert={alert}/>
<div className = "container my-3"/>
< TextForm showAlert={showAlert} heading="Enter the text to analys"/>
{/*<About/>*/}
</>

  );
}

export default App;
