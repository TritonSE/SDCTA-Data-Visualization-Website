import React from 'react';
import SignupModal from './components/modal/signup';
import SubscribeModal from './components/modal/subscribe';
import './App.css';

function App() {
  return (
    <div className="App">
      <SignupModal/>
      <SubscribeModal/>
      
    </div>
  );
}

export default App;
