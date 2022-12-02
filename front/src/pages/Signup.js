import React, { useState } from 'react'
import { addUser } from '../utilities';

const Signup = () => {
  const [username, setusername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  const onFormSubmit = () => {
    addUser(username, password, email)
  }


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
            <label>email: </label>
            <input
              type="email"
              placeholder="Enter your email"
              onChange={e => {
                setEmail(e.target.value);
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
  )
}

export default Signup