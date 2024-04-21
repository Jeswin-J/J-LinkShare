import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Share from './routes/Share';
import View from './routes/View';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Share />} />
        <Route path="/view" element={<View />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
