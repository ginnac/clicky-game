import React from 'react';
//import './App.css';
import Cards from './components/bodyParts/Cards.js';
import Navbar  from './components/bodyParts/Navbar.js';
import Jumbotron  from './components/bodyParts/Jumbotron.js';
import Footer  from './components/bodyParts/Footer.js';

function App() {
  return (
    <div >
    <Navbar/>
    <Jumbotron/>
     <Cards/>
     <Footer/>
    </div>
  );
}

export default App;
