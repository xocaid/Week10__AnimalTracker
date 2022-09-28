import React from 'react';
import "./App.css";
import Header from "./components/header.js"
import Species from './components/TabPages/species';
import Footer from './components/footer';
import Individuals from './components/TabPages/individuals';
import Sightings from './components/TabPages/sightings';


function App() {
  return (
    <div className="App">
      <Header />
      <Species />
      <Individuals />
      <Sightings />
      <Footer /> 
    </div>
  );
}

export default App;
