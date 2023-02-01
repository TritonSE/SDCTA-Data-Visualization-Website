import { useState } from 'react';
import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import './signup.css';
import { auth } from "../../firebase-config";
import {registerUser} from "../../api/auth";

const SignUpPage = () => {

  const [userDisplayName, setUserDisplayName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const register = async () => {
    try {

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );

      updateProfile(userCredential.user, {
        displayName: userDisplayName
      });

      console.log(userCredential);

    } catch (error) {

      if (error instanceof Error) {
        console.log(error.message);
      }

    }
  }


  return (
    <div className='signup-form-wrapper'>
      <div className="signup-form">
        <div className="signup-form-content">
          <h1 className='signup-form-title'>Create Your Account</h1>
          <div className="form-group mt-3">
            <p className='textbox-label'>Full Name</p>
            <input
              type="fullname"
              className="form-control mt-1"
              onChange={(event) => {
                setUserDisplayName(event.target.value);
              }}
            />
          </div>
          <div className="form-group mt-3">
            <p className='textbox-label'>Email</p>
            <input
              type="email"
              className="form-control mt-1"
              onChange={(event) => {
                setRegisterEmail(event.target.value);
              }}
            />
          </div>
          <div className="form-group mt-3">
            <p className='textbox-label'>Password</p>
            <input
              type="password"
              className="form-control mt-1"
              onChange={(event) => {
                setRegisterPassword(event.target.value);
              }}
            />
          </div>
          <div className='terms-checkbox'>
            <label className='checkbox-label'>
              <input type='checkbox'/>
              I agree to the Terms of Service and Privacy Policy
            </label>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button onClick={register} className="btn signup">Submit</button>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default SignUpPage