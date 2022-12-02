import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { authContext } from '../contexts/AuthContext';

const Dashboard = () => {
  const { setAuthData, auth } = useContext(authContext);
  const navigate = useNavigate()
  const logout = () => {
    setAuthData(null)
    navigate('/')
  }

  return (
    <div>
      Dashboard
      <button onClick={() => logout()}>logout</button>  
    </div>
  )
}

export default Dashboard