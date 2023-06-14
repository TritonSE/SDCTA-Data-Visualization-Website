import { Navbar } from "./Navbar/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes as ReactRoutes,
} from "react-router-dom";
import { Login } from "../pages/Login";
import { SignUp } from "../pages/sign-up/SignUp";
import { LandingPage } from "../pages/LandingPage";
import { Education } from "../pages/Education";
import { Homelessness } from "../pages/Homelessness";
import { Municipal } from "../pages/Municipal";
import { Subscribe } from "../pages/Subscribe";
import { Profile } from "../pages/Profile";
import { IndividualVisualization } from "../pages/IndividualVisualization";
import { Error404 } from "../components/404";
import { CategoryType } from "../slices/categorySlice";
import { CategoryPage } from "../pages/CategoryPage";

export const Routes: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <ReactRoutes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Education" element={<CategoryPage category={CategoryType.Education} />} />
        <Route path="/Homelessness" element={<CategoryPage category={CategoryType.Homelessness} />} />
        <Route path="/Municipal" element={<CategoryPage category={CategoryType.Municipal} />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Subscribe" element={<Subscribe />} />
        <Route path="/Profile" element={<Profile />} />
        <Route
          path="/IndividualVisualization"
          element={<IndividualVisualization />}
        />
        <Route path="*" element={<Error404 />} />
      </ReactRoutes>
    </Router>
  );
};
