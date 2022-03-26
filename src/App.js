import React, {useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes,Route } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import LoginScreen from './screens/LoginScreen';
import Register from './screens/Register';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<LoginScreen/>} />  
            <Route path="/register" element={<Register/>} />             
          </Routes>
        </Router>
    </div>
  );
}

export default App;
