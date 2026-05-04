import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/home";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
       
            <Route path="/" element={<Home />} />
         
      </Routes>
    </BrowserRouter>
  );
}