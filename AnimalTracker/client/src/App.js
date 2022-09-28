import React from 'react';
import "./App.css";
import Header from "./components/header.js"
import Species from './components/TabPages/species';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Species />
      <Footer /> 
    </div>
  );
}

export default App;
