import logo from './logo.svg';
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TextForm from './component/Textform';

function App() {
  const [mode, setMode] = useState('dark');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} togglemode={toggleMode} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/about" element={
              <TextForm heading="Enter your text to analyse" />
            } />
          </Routes>
        </div>
      </BrowserRouter>
      {/* <About/> */}
    </>
  );
}

export default App;
