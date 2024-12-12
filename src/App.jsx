import './App.css'
import React, { useEffect, useState } from 'react';
import BackendConnection from './components/BackendConnection'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Marketing from './Marketing'
import Home from './Home'
import Investment from './Investment';
import Employee from './Employee';
import Reporting from './Reporting';
function App() {

  return (
    <Router>
    <BackendConnection/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/reporting" element={<Reporting />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/investment" element={<Investment />} />
      </Routes>
    </Router>
  )
}

export default App
