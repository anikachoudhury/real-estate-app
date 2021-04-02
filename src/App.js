import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Home />
    </div>
  )
}

export default App;

