
import { IndividualVisualization } from './pages/IndividualVisualization';

import { LandingPage } from './pages/LandingPage';
import './App.css';
import { Municipal } from './pages/Municipal';
import { Routes } from './components/Routes';

declare global {
  interface Window {
    tableau: any,
  }
}
const App = () => {

  return (
    <>
      <Routes />
    </>

  );
}


export default App;
