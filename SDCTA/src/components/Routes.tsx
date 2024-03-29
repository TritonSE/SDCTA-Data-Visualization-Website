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
import { SignUpDetails } from "../pages/SignUpDetails";
import { IndividualVisualization } from "../pages/IndividualVisualization";
import { Error404 } from "../components/404";

export const Routes: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <ReactRoutes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Homelessness" element={<Homelessness />} />
        <Route path="/Municipal" element={<Municipal />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Subscribe" element={<Subscribe />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/signupdetails" element={<SignUpDetails />} />
        <Route
          path="/IndividualVisualization"
          element={<IndividualVisualization />}
        />
        <Route path="*" element={<Error404 />} />
      </ReactRoutes>
    </Router>
  );
};
