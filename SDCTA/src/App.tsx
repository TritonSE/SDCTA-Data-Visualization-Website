import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import LogInPage from './components/auth/LogInPage'
import SignUpPage from './components/auth/SignUpPage'

function App() {
  return (
    <div>
      <LogInPage/>
      {/* <SignUpPage/> */}
    </div>
  );
}

export default App;
