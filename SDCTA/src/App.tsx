
import IndividualVisualization from './pages/IndividualVisualization';

import { LandingPage } from './pages/LandingPage';
import './App.css';
import { Municipal } from './pages/Municipal';
import { Routes } from './components/Routes';
import { Education } from './pages/Education';

declare global {
  interface Window {
    tableau: any,
  }
}
const App = () => {

  return (
    <>
      <Routes />
      <div className="App">
        <Municipal />
      </div>
    </>

  );
}


export default App;
