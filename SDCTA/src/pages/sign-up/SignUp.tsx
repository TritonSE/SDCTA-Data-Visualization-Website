import React from 'react'
import './signup.css'

const SignUp = () => {
  return (
    <div className='signup-form-wrapper'>

      <p className='form-label'>
          Create Your Account
      </p>

      <form className="signup-form">
        <div className="signup-form-content">
          {/* <h3 className="Auth-form-title">Create Your Account</h3> */}
          <div className="form-group mt-3">
            <p>Full Name</p>
            <input
              type="email"
              className="form-control mt-1"
            />
          </div>
          <div className="form-group mt-3">
            <p>Email address</p>
            <input
              type="email"
              className="form-control mt-1"
            />
          </div>
          <div className="form-group mt-3">
            <p>Password</p>
            <input
              type="password"
              className="form-control mt-1"
            />
          </div>
          <div className='terms-checkbox'>
            <label>
              <input 
                type='checkbox'
              />
              I agree to the Terms of Service and Privacy Policy
            </label>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form> 
    </div>
  )
}

export default SignUp