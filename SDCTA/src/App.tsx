import "./App.css";
import { Routes } from "./components/Routes";
import { auth } from "./firebase-config"
import { login, logout, storeUser } from "./slices/loginSlice";
import { useDispatch } from "react-redux";
import { getUser } from "./api/auth"

declare global {
  interface Window {
    tableau: any;
  }
}

const App: React.FC = () => {
  const dispatch = useDispatch();
  auth.onAuthStateChanged(async (user) => {
    if (user != null) {
      dispatch(login());
      console.log(user.email);
      await getUser(user.email).then((mongoUser) => {
        dispatch(storeUser(mongoUser));
      });
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
