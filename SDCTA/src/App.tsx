import "./App.css";
import { Education } from "./pages/Education";

declare global{
  interface Window {
    tableau: any;
  }
}
const App: React.FC = () => {
  return (
    <>
      {/* <Routes /> */}
      <div className="App">
        <Education />
        </div>
    </>
  );
};

export default App;
