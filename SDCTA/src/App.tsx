// import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import './App.css';
import IndividualVisualization from './pages/IndividualVisualization';

import { LandingPage } from './pages/LandingPage';
import './App.css';
import { Municipal } from './pages/Municipal';

declare global {
  interface Window {
    tableau: any,
  }
}
const App = () => {

  return (
    <div className="App">
      <IndividualVisualization/>
      <Municipal />
    </div>
  );
}


export default App;
