import { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import './signup.css';
import { auth } from "../../firebase-config";

const LogIn = () => {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const login = async () => {
        try {
    
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            console.log(user);
    
        } catch (error) {
    
            if (error instanceof Error) {
                console.log(error.message);
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
            </div>
            <button
              onClick={login} 
              className="btn btn-primary"
            ></button>
        </div>
    )
}

export default LogIn