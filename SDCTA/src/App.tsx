
import { LandingPage } from './pages/LandingPage';

import './App.css';
import { Routes } from './components/Routes';

const App = () => {
  return (
    <>
      <Routes />
      <div className="App">
        <LandingPage />
      </div>
    </>


  );
}


export default App;
