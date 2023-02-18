
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
      {/* <LandingPage /> */}
      <Municipal />
    </div>
  );
}


export default App;
