import React from 'react';
import ReactDOM from "react-dom/client";
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/margins/header.js"
import Footer from './components/margins/footer';
import LinkRoutes from "./components/LinkRoutes";
import Home from "./components/TabLinks/home";
import Species from './components/TabLinks/Species/species';
import Individuals from './components/TabLinks/Individuals/individuals';
import Sightings from './components/TabLinks/Sightings/sightings';
import JoinedInformation from './components/TabLinks/summary';


function App() {


return (
  <>
    <Header />
    <Router>
      <LinkRoutes />
      <Routes >
        <Route path="/home" element={<Home />}></Route>
        <Route path="/joinTable" element={<JoinedInformation />}></Route>
        <Route path="/species" element={<Species />}></Route>
        <Route path="/individuals" element={<Individuals />}></Route>
        <Route path="/sightings" element={<Sightings />}></Route>
      </Routes>
    </Router>
    <br />
    <h2>This is the home page from App.js</h2>
    <br />
    <Footer />
  </>
);

}

export default App;
