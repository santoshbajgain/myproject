
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Form from './components/Form';
import Contact from './components/Contact';
import Navigbar from './components/Navigbar';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
 } from "react-router-dom";

function App() {
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
   setAlert({ 
    msg:message,
    type:type
  })
  setTimeout(()=>{
    setAlert(null)
  },1000)
}
  const[btnSwitch,setBtnSwitch]=useState('Enable Dark Mode');
  const[mode,setMode]=useState('light');
  const toggleMode=()=>{
  if (mode==="light"){

    setMode('dark')
    setBtnSwitch('Enable Light Mode')
    document.body.style.background='#0b0d54'
    showAlert("Dark mode enabled ","success")  
    document.title="Dark Mode"
  //   setInterval(() => {
  //     document.title="Dark mode enabled"
  //   }, 1400);
  //   setInterval(() => {
  //     document.title="Enjoy Dark mode"
  //   }, 1500);
  // }
  }
  else{
    setMode('light')
    setBtnSwitch('Enable Dark Mode')
    document.body.style.background="white"
    showAlert("Light mode is enabled","success")
    document.title='Home'

  }
  }

  return (
    <>
    <Router>
        <Navigbar companyName='TextController' details="About Us" cntDetails="Contact" mode={mode} toggleMode={toggleMode} btnSwitch={btnSwitch} />
        <Alert alert={alert}/>
  <div className='container'>
  <Routes>
          <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
        <Route path="/" element={<Form showAlert={showAlert} heading="Enter your information" mode={mode}/>
            }/>
         
         
   </Routes>
  </div>
  </Router>
          
         
  </>
  );
}

export default App;



