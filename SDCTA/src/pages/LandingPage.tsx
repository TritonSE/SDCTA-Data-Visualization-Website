import React from "react";
import { Body } from "../components/Landing_Page/Body";
import { Footer } from "../components/Footer/Footer";

export const LandingPage: React.FC = () => {
  return (
    <div className="LandingPage">
      <Body />
      <Footer />
    </div>
  );
};
