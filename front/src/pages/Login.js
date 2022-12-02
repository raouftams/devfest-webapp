import React, { useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../contexts/AuthContext';

import { checkUser } from '../utilities';

const Login = () => {
  const [username, setusername] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate()

  const { setAuthData, auth } = useContext(authContext);

  const onFormSubmit = e => {
    e.preventDefault();
    console.log(checkUser(username, password))
    if(checkUser(username, password) === true){
      console.log("bien2")
      setAuthData({username: username});
      setAuthData(username)
      console.log(auth)
      navigate("/dashboard")
    }
  };

  return (
      <div style={{ width: 300 }}>
        <h1 className="text-center">Sign in</h1>
        <form onSubmit={onFormSubmit}>
            <label>username </label>
            <input
              type="username"
              placeholder="Enter username"
              onChange={e => {
                setusername(e.target.value);
              }}
            />
          <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              onChange={e => {
                setPassword(e.target.value);
              }}
            />
          
          <button
            type="submit"
          >
            Sign in
          </button>
        </form>
      </div>
  );
};

export default Login;
