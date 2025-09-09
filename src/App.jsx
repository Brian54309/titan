// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './component/Navbar';
import Footer from './component/Footer';
import HomePage from './page/Homepage';
import Broco from './page/Broco';
import About from './page/About';
import Contact from './page/Contact';
import Kvision from './page/Kvision';
import Nex from './page/Nex';
import Matrix from './page/Matrix';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/broco" element={<Broco/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/kvision" element={<Kvision/>} />
        <Route path="/nex" element={<Nex/>} />
        <Route path="/matrix" element={<Matrix/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
