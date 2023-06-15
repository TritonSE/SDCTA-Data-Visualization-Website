import "./App.css";
import { Routes } from "./components/Routes";
import { auth } from "./firebase-config";
import { useDispatch } from "react-redux";

declare global {
  interface Window {
    tableau: any;
  }
}

const App: React.FC = () => {
  const dispatch = useDispatch();
  auth.onAuthStateChanged(async (user) => {
    if (user != null) {
      dispatch({
        type: "STORE_USER",
        payload: user.email,
      });
    }
  });
  return (
    <>
      <Routes />
      <div className="App"></div>
    </>
  );
};

export default App;
