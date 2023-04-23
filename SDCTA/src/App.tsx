import "./App.css";
import { Routes } from "./components/Routes";
import { auth } from "./firebase-config";
import { login, logout } from "./slices/loginSlice";
import { useDispatch } from "react-redux";

declare global {
  interface Window {
    tableau: any;
  }
}

const App: React.FC = () => {
  const dispatch = useDispatch();
  auth.onAuthStateChanged(user => {
    if (user != null) {
      dispatch(login());
    } else {
      dispatch(logout());
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
