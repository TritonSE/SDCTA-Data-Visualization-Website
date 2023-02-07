import { SetStateAction, useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import './login.css';
import { auth } from "../../firebase-config";
import {logInErrorHandler} from "../../error_handling/auth-errors"

const LogInPage = () => {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [errorMessage,setErrorMessage] = useState("");

    const login = async () => {
        try {
    
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            console.log(user);
            setErrorMessage("Logged in!");
    
        } catch (error) {
            
            if (error instanceof Error) {
                setErrorMessage(await logInErrorHandler(error));
            }
            
        }
    }



    return (
        <div>
            <div className="form-group mt-3">
                <p>Email address</p>
                <input
                type="email"
                className="form-control mt-1"
                onChange={(event) => {
                    setLoginEmail(event.target.value);
                }}
                />
            </div>
            <div className="form-group mt-3">
                <p>Password</p>
                <input
                type="password"
                className="form-control mt-1"
                onChange={(event) => {
                    setLoginPassword(event.target.value);
                }}
                />
                <p className='error-message'>{errorMessage}</p>
            </div>
            <button
              onClick={login} 
              className="btn btn-primary"
            >
                Login
            </button>
        </div>
    )


}

export default LogInPage