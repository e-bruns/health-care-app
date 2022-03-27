import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginScreen from './screens/LoginScreen';
import Register from './screens/Register';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<HomeScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
