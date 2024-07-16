import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/home';
import AboutPage from './components/about';
import ServicesPage from './components/services';
import Contact from './components/contact';
import Mri from './components/mri';
import Ct from './components/ct';
import Navbar from './components/Navbar'
import { AppBar, Toolbar, Button, Box, Typography } from '@mui/material';

function App() {
  return (
    <Router>
     <Navbar />       
      {/* <div className="App"> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mri" element={<Mri />} />
          <Route path="/ct" element={<Ct />} />

          
          
        </Routes>
      {/* </div> */}
    </Router>
  );
}

export default App;