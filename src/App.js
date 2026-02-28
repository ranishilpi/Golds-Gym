import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';

import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => (
  <Box
    sx={{
      width: '100%',
      maxWidth: '1488px',
      mx: 'auto',
    }}
  >
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/exercise/:id"
        element={(
          <ProtectedRoute>
            <ExerciseDetail />
          </ProtectedRoute>
        )}
      />
    </Routes>
    <Footer />
  </Box>
);

export default App;

