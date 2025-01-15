import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Employee() {
  return (
    <div>
      <div class='pl-2'>
      <Link to="/">
    <button class="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md transition-all duration-300">
      <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
      Back
    </button>
  </Link>
      </div>
    <div class='justify-items-center mt-5'>
      <p class='text-2xl font-bold text-black'>Employee Management System</p>
      <label class="relative block mt-3 mb-3">
        <span class="sr-only">Search</span>
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg class="h-10 w-10 fill-slate-300" viewBox="0 0 20 20"></svg>
        </span>
        <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
      </label>
      
      <table class="border border-slate-500 mt-3">
      <thead>
        <tr>
          <th class="border border-slate-600">State</th>
          <th class="border border-slate-600">City</th>
          <th class="border border-slate-600">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-slate-700">Indiana</td>
          <td class="border border-slate-700">Indianapolis</td>
          <td class="border border-slate-700"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-[4px] rounded">Add to Cart</button></td>
        </tr>
        <tr>
          <td class="border border-slate-700">Ohio</td>
          <td class="border border-slate-700">Columbus</td>
          <td class="border border-slate-700"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-[4px] rounded">Add to Cart</button></td>
        </tr>
        <tr>
          <td class="border border-slate-700">Michigan</td>
          <td class="border border-slate-700">Detroit</td>
          <td class="border border-slate-700"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-[4px] rounded">Add to Cart</button></td>
        </tr>
      </tbody>
    </table>

    </div>
    </div>
  );
}

export default Employee;
