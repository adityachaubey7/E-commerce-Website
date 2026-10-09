import React, { useState } from 'react'
import '../css/Login.css'

const Login = () => {
  const [currentState, setCurrentState] = useState('Signup')

  const onSubmitHandler = async (e) => {
    e.preventDefault()
  }

  return (
    <form className="login" onSubmit={onSubmitHandler}>

      <div className="login-card">

        <div className="login-title">
          <p>{currentState}</p>
          <hr />
        </div>

        {currentState === 'Login' ? null : (
          <input
            className="login-input"
            type="text"
            placeholder="Name"
            required
          />
        )}

        <input
          className="login-input"
          type="email"
          placeholder="Email"
          required
        />

        <input
          className="login-input"
          type="password"
          placeholder="Password"
          required
        />

        <div className="login-links">

          <p>Forget password</p>

          {currentState === 'Login' ? (
            <p onClick={() => setCurrentState('Signup')}>
              Create account
            </p>
          ) : (
            <p onClick={() => setCurrentState('Login')}>
              Login here
            </p>
          )}

        </div>

        <button className="login-button" type="submit">
          {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
        </button>

      </div>

    </form>
  )
}

export default Login