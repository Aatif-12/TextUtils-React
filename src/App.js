import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useInsertionEffect } from 'react';
import React, { useState } from 'react';
import About from './components/About';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar title='TextUtils' about='About Us' mode={mode} toggleMode={toggleMode} />
        <div className="container my-3">
          <Routes>
            <Route path="/" element={
              <TextForm heading="Enter the text to analyze below" mode={mode} />
            } />
            <Route path="/about" element={
              <About mode={mode} />
            } />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
