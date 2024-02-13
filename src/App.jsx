import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css"
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Popup from './Components/Popup';
import AddNew from './Components/AddNew';


const App = () => {

  return (
    <>
      <BrowserRouter>
        <Popup />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addnew" element={<AddNew />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
