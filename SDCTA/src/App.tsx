import "./App.css";
import { Routes } from "./components/Routes";

declare global {
  interface Window {
    tableau: any;
  }
}

const App: React.FC = () => {
  return (
    <>
      <Routes />
      <div className="App"></div>
    </>
  );
};

export default App;
