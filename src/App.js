import React, { useContext } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';

import { authContext } from './contexts/AuthContext';


function App() {

  const { setAuthData, auth } = useContext(authContext);

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          { auth.data != null ? 
            <Route path='/dashboard' element={<Dashboard/>} />
          :
            <Route path='/login' element={<Login/>} />
        }
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;