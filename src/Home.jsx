import './App.css'
import React, { useEffect, useState } from 'react';
import BackendConnection from './components/BackendConnection'
import EmployeeLogo from './assets/1.png'
import MarketingLogo from './assets/2.png'
import ReportingLogo from './assets/3.png'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
function App() {

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 m-5">
      <div className="cursor-pointer p-4 border rounded-lg hover:shadow-lg transition-shadow bg-white hover:scale-105">
        <Link to="/employee">
          <img src={EmployeeLogo}/>
          <h2 className="font-semibold text-lg mt-2 text-black text-center">Employee Management</h2>
          <h3 className="font-semibold text-xs mt-1 text-gray-600 text-center">A system for managing employee data, including personal details, job roles, performance, and attendance, to streamline HR processes</h3>
        </Link>
      </div>
      <div className="cursor-pointer p-4 border rounded-lg hover:shadow-lg transition-shadow bg-white hover:scale-105">
      <Link to="/marketing">
          <img src={MarketingLogo} alt="Logo" />
          <h2 className="font-semibold text-lg mt-2 text-black text-center">Marketing Management</h2>
          <h3 className="font-semibold text-xs mt-1 text-gray-600 text-center"> A system for planning, executing, and analyzing marketing campaigns to improve customer acquisition and retention</h3>
        </Link>
      </div>
      <div className="cursor-pointer p-4 border rounded-lg hover:shadow-lg transition-shadow bg-white hover:scale-105">
      <Link to="/reporting">
          <img src={ReportingLogo} alt="Logo" />
          <h2 className="font-semibold text-lg mt-2 text-black text-center">Reporting Management</h2>
          <h3 className="font-semibold text-xs mt-1 text-gray-600 text-center">A system for generating and tracking reports related to financials and performance, providing accurate and timely information to stakeholders</h3>
      </Link>
      </div>
      
      <div className="cursor-pointer p-4 border rounded-lg hover:shadow-lg transition-shadow bg-white hover:scale-105">
      <Link to="/investment">
          <img src={ReportingLogo} alt="Logo" />
          <h2 className="font-semibold text-lg mt-2 text-black text-center">Investment Management</h2>
          <h3 className="font-semibold text-xs mt-1 text-gray-600 text-center">A system for managing investments, tracking returns, and assessing risks to make informed investment decisions</h3>
        </Link>
      </div>
      </div>
      </>
  )
}

export default App
