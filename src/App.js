

// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GreetingsPage from "./components/GreetingsPage/GreetingsPage";
import HomePage from "./components/HomePage/HomePage";
import IlanaPage from './components/Ilana/IlanaPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/greetings/:name" element={<GreetingsPage />} />
        <Route path="/ilana" element={<IlanaPage />} />
      </Routes>
    </Router>
  );
}

export default App;
