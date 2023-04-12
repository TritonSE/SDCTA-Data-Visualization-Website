import { Footer } from "../components/Footer"
import landscape from ".//../Images/Landing_Image.jpg";
import React from "react"
import "./Profile.css";

export const Profile: React.FC = () => {
  const handleSubmit = (event: any): void => {
    event.preventDefault();
    alert('You have submitted the form.')
  }

  return (
    <div>
      <img src={landscape} alt="sd landscape" />
      <div className = "profile-info">
        <h2>Profile Information</h2>
        <form onSubmit={handleSubmit}>
          <label className = "label">Affiliated Company
            <input className="long-input"/>
          </label>
          <label className = "label">Full Name
            <input className="long-input"/>
          </label >
          <label className = "label">Email Address
              <input className="long-input"/>
          </label >
          <label className = "label">Password
            <input className="long-input"/>
          </label>
          <label className = "label">Phone Number
            <input className="long-input"/>
          </label>
          <label className = "label">Mailing Address
            <input className="long-input"/>
          </label>
          <label className = "label-short">City
            <input className="short-input"/>
          </label>
          <label className = "label-short">State
            <select className="short-input">
              <option>
                -- Select State --
              </option>
            </select>
          </label>
          <label className = "label-short">Zip Code
            <input className="short-input"/>
          </label>
          <label className = "label">Country
            <select className="long-input">
                <option>
                  -- Select Country --
                </option>
              </select>
          </label>
          <label className = "label">Preferred Language
            <select className="long-input">
              <option>
                -- Select Language --
              </option>
            </select>
          </label>
          <input type="submit" />
        </form>
      </div>
      <div className = "Payment Information">
        <h2>Payment Information</h2>

      </div>
      <Footer />
    </div>

  );
}
