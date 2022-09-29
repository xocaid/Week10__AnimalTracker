import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header.js"
import Footer from './components/footer';
import Layout from "./components/TabPages/Layout";
import Home from "./components/TabPages/home";
import Species from './components/TabPages/species';
import Individuals from './components/TabPages/individuals';
import Sightings from './components/TabPages/sightings';


function App() {
  return (
    <>
    <Header/>
    <Router>
      <Layout />
      <Routes>
          <Route path = "/home" element = {<Home />} ></Route>
          <Route path="/species" element={<Species />}></Route>
          <Route path="/individuals" element={<Individuals />}></Route>
          <Route path="/sightings" element={<Sightings />}></Route>
      </Routes>
    </Router>
    <Footer/>
    </>
  );

}

export default App;
