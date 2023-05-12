import React from "react";
import "./App.css";
import { Education } from "./pages/Education";
import { LandingPage } from "./pages/LandingPage";

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
		{/*<Education />*/}
    <LandingPage /> 
	  </div>
    </>
  );
};

export default App;
