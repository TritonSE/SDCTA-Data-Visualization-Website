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
            
            if (error instanceof Error) {
                setErrorMessage(await logInErrorHandler(error));
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
                        className="text-input"
                        onChange={(event) => {
                            setLoginEmail(event.target.value);
                        }}
                    />

                    <h3 className="textbox-label">Password</h3>
                    <input
                        type="password"
                        className="text-input"
                        onChange={(event) => {
                            setLoginPassword(event.target.value);
                        }}
                    />
                    <p className='error-message'>{errorMessage}</p>
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