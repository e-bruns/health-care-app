import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/register/index';
import ForgotScreen from './screens/forgot/index';
import HomeScreen from './screens/home/index';
import ExamScreen from './screens/exam/index';
import ExamDetail from './screens/exam/exam_detail';
import ExamNew from './screens/exam/exam_new';
import Appointment from './screens/appointment/index';
import { useSelector } from "react-redux";
import ResetScreen from './screens/reset';

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
          <Route path="/forgot" element={<ForgotScreen />} />
          <Route path="/reset" element={<ResetScreen />} />
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
          <Route
            path="/exam/exam-detail"
            element={
              <AuthenticatedRoute>
                <ExamDetail />
              </AuthenticatedRoute>
            }
          />    
          <Route
            path="/exam/exam-new"
            element={
              <AuthenticatedRoute>
                <ExamNew />
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
