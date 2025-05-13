import { useState } from 'react'
import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import DogImg from './components/DogImg';
import Login from "./components/Login";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";

function App() {
      return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />}/>
        <Route path="/DogImg" element={<DogImg />} />
      </Routes>
    </Router>

    );
  }


export default App;