import './App.css';
import React from "react";
import Patient from "./Pages/Patient"
import Home from "./Pages/Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {

  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/patient" element={<Patient/>}/>
      </Routes>
    </Router>
    

  );
}

export default App;
