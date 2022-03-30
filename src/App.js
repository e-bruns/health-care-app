import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/register/index';
import ResetPswdScreen from './screens/resetpswd/index';
import HomeScreen from './screens/home/index';
import ExamScreen from './screens/exam/index';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/resetpswd" element={<ResetPswdScreen />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/exam" element={<ExamScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
