import React, { useEffect } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";

import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/register/index";
import ResetPswdScreen from "./screens/resetpswd/index";
import HomeScreen from "./screens/home/index";
import ExamScreen from "./screens/exam/index";
import Appointment from "./screens/appointment/index";

import "./App.css";

const AuthenticatedRoute = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return children;
};

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/resetpswd" element={<ResetPswdScreen />} />
          <Route
            path="/home"
            element={
              <AuthenticatedRoute>
                <HomeScreen />
              </AuthenticatedRoute>
            }
          />
          <Route
            path="/exam"
            element={
              <AuthenticatedRoute>
                <ExamScreen />
              </AuthenticatedRoute>
            }
          />
          <Route path="/appointment" element={<Appointment />} />
          <Route path='*' element={<LoginScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
