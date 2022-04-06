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
import ExamFormScreen from './screens/exam/form';
import { useSelector } from "react-redux";
import ResetScreen from './screens/reset';
import TreatmentsScreen from './screens/treatments';
import TreatmentFormScreen from './screens/treatments/form';
import TreatmentDetailScreen from './screens/treatments/detail';
import Appointment from './screens/appointment/index';
import AppointmentFormScreen from './screens/appointment/form';
import AppointmentsDetailScreen from './screens/appointment/detail';

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
            path="/exam/:id/detail"
            element={
              <AuthenticatedRoute>
                <ExamDetail />
              </AuthenticatedRoute>
            }
          />
          <Route
            path="/exam/new"
            element={
              <AuthenticatedRoute>
                <ExamFormScreen />
              </AuthenticatedRoute>
            }
          />
          <Route
            path="/exam/:id/edit"
            element={
              <AuthenticatedRoute>
                <ExamFormScreen />
              </AuthenticatedRoute>
            }
          />

          <Route
            path="/treatment"
            element={<AuthenticatedRoute>
              <TreatmentsScreen />
            </AuthenticatedRoute>}
          >
          </Route>

          <Route
            path="/treatment/new"
            element={<AuthenticatedRoute>
              <TreatmentFormScreen />
            </AuthenticatedRoute>}
          >
          </Route>

          <Route
            path="/treatment/:id/detail"
            element={<AuthenticatedRoute>
              <TreatmentDetailScreen />
            </AuthenticatedRoute>}
          >
          </Route>

          <Route
            path="/treatment/:id/edit"
            element={<AuthenticatedRoute>
              <TreatmentFormScreen />
            </AuthenticatedRoute>}
          >
          </Route>

          <Route
            path="/appointment"
            element={<AuthenticatedRoute>
              <Appointment />
            </AuthenticatedRoute>}
          >
          </Route>

          <Route
            path="/appointment/new"
            element={<AuthenticatedRoute>
              <AppointmentFormScreen />
            </AuthenticatedRoute>}
          >
          </Route>

          <Route
            path="/appointment/:id/detail"
            element={<AuthenticatedRoute>
              <AppointmentsDetailScreen />
            </AuthenticatedRoute>}
          >
          </Route>

          <Route
            path="/appointment/:id/edit"
            element={<AuthenticatedRoute>
              <AppointmentFormScreen />
            </AuthenticatedRoute>}
          >
          </Route>


          <Route path='*' element={<LoginScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
