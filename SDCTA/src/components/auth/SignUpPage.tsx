import { useState } from 'react';
import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import './auth.css';
import { auth } from "../../firebase-config";
import {registerUser} from "../../api/auth";
import {signUpErrorHandler} from "../../error_handling/auth-errors"
import {useNavigate} from 'react-router-dom';


import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { signInWithRedirect, getRedirectResult} from "firebase/auth";


const SignUpPage = () => {

  const [userDisplayName, setUserDisplayName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage,setErrorMessage] = useState("");
  const [agreedTerms,setAgreedTerms] = useState(false);
  const navigate = useNavigate();

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

      navigate("/");

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
    <div>

      <h1 className='signup-form-title'>Create Your Account</h1>

      <div className="signup-form">
        <div className = "input-boxes">
          {/* Name input */}
          <h3 className='textbox-label'>Full Name</h3>
          <input
            className = "text-input"
            type="fullname"
            onChange={(event) => {
              setUserDisplayName(event.target.value);
            }}
          />

          {/* Email input */}
          <h3 className='textbox-label'>Email</h3>
          <input
            className = "text-input"
            type="email"
            onChange={(event) => {
              setRegisterEmail(event.target.value);
            }}
          />

          {/* Password input */}
          <h3 className='textbox-label'>Password</h3>
          <input
            className = "text-input"
            type="password"
            onChange={(event) => {
              setRegisterPassword(event.target.value);
            }}
          />

          {/* Confirm password */}
          <h3 className='textbox-label'>Confirm Password</h3>
          <input
            className = "text-input"
            type="password"
            onChange={(event) => {
              setConfirmPassword(event.target.value);
            }}
          />

        
        </div>

        <div className='terms'>
          <input 
            className = 'terms-checkbox'
            onChange={(event)=> {
              setAgreedTerms(event.target.checked);
            }}
            type='checkbox'
          />
          <label className='terms-label'>
            I agree to the <a href="/">Terms of Service</a> and <a href="/">Privacy Policy</a>
          </label>
        </div>
        <p className='error-message'>{errorMessage}</p>
        <button onClick={register} className="btn-signup">Sign Up</button>
        <div className="separator">
          <div className="line"></div>
          <p className="or">&nbsp; or &nbsp;</p>
          <div className="line"></div>
        </div>
        <div>
          <button onClick={loginWithGoogle} className='btn google-signup'>Login With Google</button>
        </div>
      </div>

    </div>
  )
}

export default SignUpPage