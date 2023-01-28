import { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import './signup.css';
import { auth } from "../../firebase-config";

const SignUp = () => {

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  console.log("here");
  const register = async () => {
    try {

      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);

    } catch (error) {

      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }


  return (
    <div className='signup-form-wrapper'>

      <p className='form-label'>
          Create Your Account
      </p>

      <div className="signup-form">
        <div className="signup-form-content">
          {/* <h3 className="Auth-form-title">Create Your Account</h3> */}
          <div className="form-group mt-3">
            <p>Full Name</p>
            <input
              className="form-control mt-1"
            />
          </div>
          <div className="form-group mt-3">
            <p>Email address</p>
            <input
              type="email"
              className="form-control mt-1"
              onChange={(event) => {
                setRegisterEmail(event.target.value);
              }}
            />
          </div>
          <div className="form-group mt-3">
            <p>Password</p>
            <input
              type="password"
              className="form-control mt-1"
              onChange={(event) => {
                setRegisterPassword(event.target.value);
              }}
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
            <button 
              onClick={register} 
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default SignUp