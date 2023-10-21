import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/login-register/Login';
import Register from './components/login-register/Register';
import Home from './components/Home';
import ResultsPage from './components/ResultsPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Home />} />
        <Route path='/results' element={<ResultsPage />} />
      </Routes>
    </>
  );
}

export default App;
