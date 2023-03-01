import { SetStateAction, useState } from 'react';
import { signInWithEmailAndPassword,sendPasswordResetEmail} from "firebase/auth";
import './auth.css';
import { auth } from "../../firebase-config";
import {logInErrorHandler} from "../../error_handling/auth-errors"
import {useNavigate} from 'react-router-dom';

import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { signInWithRedirect, getRedirectResult} from "firebase/auth";
import {login} from "../../slices/loginSlice"
import {useDispatch} from "react-redux";

export const LogInPage = () => {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [rememberUser,setRememberUser] = useState(false);
    const [resetMessage,setResetMessage] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    let [inputError, setInputError] = useState({
        emailError: "",
        passwordError: "",
        unknownError: ""
    });

    const loginUser = async () => {
        try {
            inputError = {
                emailError: "",
                passwordError: "",
                unknownError: ""
            };

            setInputError({
                emailError: "",
                passwordError: "",
                unknownError: ""
            });

            if (loginPassword == "") {
                inputError.passwordError = "Type in a password."
                setInputError(inputError);
            }
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );

            dispatch(login());
            navigate("/");
    
        } catch (error) {

            if (error instanceof Error) {
                const errorMessage = logInErrorHandler(error);

                inputError = {...inputError, ...errorMessage};
                setInputError({...inputError});
            }
            
        }
    }

    const sendReset = () => {
        sendPasswordResetEmail(auth, loginEmail)
        .then(() => {
            setResetMessage("Reset email sent successfully to: " + loginEmail);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setResetMessage(errorMessage + " (Try again, make sure to type email in email box)");
        });
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
  
          navigate("/");
  
        }).catch((error) => {

        }); // end of catch
    }



    return (
        <div>
            <h1 className='signup-form-title'>Welcome Back</h1>

            <div className="signup-form">
                <div className="input-boxes">
                    <h3 className="textbox-label">Email</h3>
                    <input
                        type="email"
                        className={inputError.emailError === "" ? 'text-input':'text-input error'}
                        onChange={(event) => {
                            setLoginEmail(event.target.value);
                        }}
                    />
                    {inputError.emailError !== "" ? <p className="error-message">{inputError.emailError}</p>:''}

                    <h3 className="textbox-label">Password</h3>
                    <input
                        type="password"
                        className={inputError.passwordError === "" ? 'text-input':'text-input error'}
                        onChange={(event) => {
                            setLoginPassword(event.target.value);
                        }}
                    />

                    {inputError.passwordError !== "" ? <p className="error-message">{inputError.passwordError}</p>:''}


                </div>
                <div className='terms'>
                    <input 
                        className = 'terms-checkbox'
                        onChange={(event)=> {
                        setRememberUser(event.target.checked);
                        }}
                        type='checkbox'
                    />
                    
                    <label className='terms-label'>
                        Remember me?
                    </label>
                </div>

                {inputError.unknownError !== "" ? <p className="error-message">{inputError.unknownError}</p>:''}

                <button
                    onClick={loginUser} 
                    className="btn-signup"
                    >
                        Login
                </button>

                <div className="separator">
                    <div className="line"></div>
                    <p className="or">&nbsp; or &nbsp;</p>
                    <div className="line"></div>
                </div>

                <div>
                    <button className='btn google-signup'>Log in With Google</button>
                </div>

                <div className="bottom-text">
                    <p 
                        className="clickable-text" 
                        onClick = {sendReset}>
                        Forgot your password?
                    </p>

                    {resetMessage !== "" ? <p>{resetMessage}</p>:''}

                    <p className="signup-link-text">
                        Don't have an account? 
                        <a
                            className="clickable-text"
                            onClick={()=>navigate("/Signup")}
                        > Sign up for free</a>
                    </p>
                </div>
            </div>
        </div>
    )


}