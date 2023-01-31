import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import LogIn from './components/auth/LogIn'
import SignUp from './components/auth/SignUp'

function App() {
  return (
    <div>
      {/* <LogIn/> */}
      <SignUp/>
    </div>
  );
}

export default App;
