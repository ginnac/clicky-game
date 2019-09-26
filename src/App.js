import React from 'react';
//import './App.css';
import CardsUpdate from './components/CardsUpdate';
import Navbar  from './components/bodyParts/Navbar.js';
import Jumbotron  from './components/bodyParts/Jumbotron.js';
import Footer  from './components/bodyParts/Footer.js';

function App() {
  return (
    <div >
    <Navbar/>
    <Jumbotron/>
     <CardsUpdate/>
     <Footer/>
    </div>
  );
}

export default App;
