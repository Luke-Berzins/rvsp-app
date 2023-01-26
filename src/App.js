import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Banner from './pages/Banner'
import Home from './pages/Home';
import Rsvp from './pages/Rsvp';
import Events from './pages/Events';
import Travel from './pages/Travel';
import './App.css';
function App() {

  return (
    <div className="App">
      <Banner />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rsvp" element={<Rsvp />} />
      <Route path="/events" element={<Events />} />
      <Route path="/travel" element={<Travel />} />
    </Routes>
    </div>
  );

}

export default App;