

// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GreetingsPage from "./components/GreetingsPage/GreetingsPage";
import HomePage from "./components/HomePage/HomePage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/greetings/:name" element={<GreetingsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
