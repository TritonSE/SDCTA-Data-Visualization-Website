import { useState } from 'react';
import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import './signup.css';
import { auth } from "../../firebase-config";
import {registerUser} from "../../api/auth";
import {signUpErrorHandler} from "../../error_handling/auth-errors"

import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { signInWithRedirect, getRedirectResult} from "firebase/auth";


const SignUpPage = () => {

  const [userDisplayName, setUserDisplayName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage,setErrorMessage] = useState("");
  const [agreedTerms,setAgreedTerms] = useState(false);

  const register = async () => {
    try {

      //make sure display name is set.
      if (!(confirmPassword === registerPassword)) {
        throw Error("Passwords do not match.");
      }

      if (userDisplayName === "") {
        throw Error("Please enter your full name.")
      }

      if (!(agreedTerms)) {
        throw Error("Must agree to the terms and services to register.");
      }

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );

      await updateProfile(userCredential.user, {
        displayName: userDisplayName
      });

      await registerUser(userCredential);

    } catch (error) {

      if (error instanceof Error) {
        setErrorMessage(await signUpErrorHandler(error));
      }

    }
  }


  const provider = new GoogleAuthProvider();
  const auth_ = getAuth();

  const loginWithGoogle = async () => {
    signInWithRedirect(auth_, provider); 
    getRedirectResult(auth_)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        // @ts-ignore: Object is possibly 'null'.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // @ts-ignore: Object is possibly 'null'.
        const token = credential.accessToken;

        // The signed-in user info.
        // @ts-ignore: Object is possibly 'null'.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
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
          <div className="form-group mt-3">
            <p className='textbox-label'>Confirm Password</p>
            <input
              type="password"
              className="form-control mt-1"
              onChange={(event) => {
                setConfirmPassword(event.target.value);
              }}
            />
            <p className='error-message'>{errorMessage}</p>
          </div>
          <div className='terms-checkbox'>
            <label className='checkbox-label'>
              <input 
                onChange={(event)=> {
                  setAgreedTerms(event.target.checked);
                }}
                type='checkbox'/>
              I agree to the Terms of Service and Privacy Policy
            </label>
          </div>

          <div>
            <button onClick={register} className="btn signup">Submit</button>
          </div>

          <div>
            <button onClick={loginWithGoogle} className='btn google-signup'>Login With Google</button>
          </div>

        </div>
      </div> 
    </div>
  )
}

export default SignUpPage