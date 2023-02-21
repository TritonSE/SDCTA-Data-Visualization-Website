import { SetStateAction, useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import './auth.css';
import { auth } from "../../firebase-config";
import {logInErrorHandler} from "../../error_handling/auth-errors"
import {useNavigate} from 'react-router-dom';

const LogInPage = () => {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [errorMessage,setErrorMessage] = useState("");
    const navigate = useNavigate();

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [unknownError, setUnknownError] = useState("");

    const login = async () => {
        try {
    
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            console.log(user);
            setErrorMessage("Logged in!");
            navigate("/");
    
        } catch (error) {
            setPasswordError("");
            setEmailError("");
            if (error instanceof Error) {
                const errorMessage = await logInErrorHandler(error);
                if (errorMessage[0] === "email") {
                    setEmailError(errorMessage[1]);
                }
                if (errorMessage[0] === "password") {
                    setPasswordError(errorMessage[1]);
                }
                if (errorMessage[0] === "unknown") {
                    setUnknownError(errorMessage[1] + " Reload and try again.");
                }
            }
            
        }
    }



    return (
        <div>
            <h1 className='signup-form-title'>Welcome Back</h1>

            <div className="signup-form">
                <div className="input-boxes">
                    <h3 className="textbox-label">Email</h3>
                    <input
                        type="email"
                        className={emailError === "" ? 'text-input':'text-input error'}
                        onChange={(event) => {
                            setLoginEmail(event.target.value);
                        }}
                    />
                    {emailError !== "" ? <h3 className="error-message">{emailError}</h3>:''}

                    <h3 className="textbox-label">Password</h3>
                    <input
                        type="password"
                        className={passwordError === "" ? 'text-input':'text-input error'}
                        onChange={(event) => {
                            setLoginPassword(event.target.value);
                        }}
                    />

                    {passwordError !== "" ? <h3 className="error-message">{passwordError}</h3>:''}

                    {unknownError !== "" ? <h3 className="error-message">{unknownError}</h3>:''}

                </div>
                <button
                    onClick={login} 
                    className="btn-signup"
                    >
                        Login
                </button>
                <div className="separator">
                    <div className="line"></div>
                    <p className="or">&nbsp; or &nbsp;</p>
                    <div className="line"></div>
                </div>
            </div>
        </div>
    )


}

export default LogInPage