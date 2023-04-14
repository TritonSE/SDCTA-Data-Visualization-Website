import { Footer } from "../components/Footer"
import landscape from ".//../Images/Landing_Image.jpg";
import React from "react"
import "./Profile.css";
import stateList from "../constants/state-list.json"
import countryList from "../constants/country-list.json"
import languageList from "../constants/language-list.json"

export const Profile: React.FC = () => {
  const handleSubmit = (event: any): void => {
    event.preventDefault();
    alert('You have submitted the form.')
  }

  return (
    <div>
      <img className = "header" src={landscape} alt="sd landscape" />
      <div className = "parent_box">
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
            <div className = "threeInOne">
              <div className = "cityDiv">
                <label className = "label-short">City
                  <input className="short-input"/>
                </label>
              </div>
              <div className = "threeBlockDiv">
                <label className = "label-short">State
                  <select className="stateDrop">
                    {stateList.state.map((state) => {
                      return <option key={state.id} value={state.id}>{state.name}</option>
                    })}
                  </select>
                </label>
              </div>
              <div className = "threeBlockDiv">
                <label className = "label-short">Zip Code
                  <input className="short-input"/>
                </label>
              </div>
            </div>
            <label className = "label">Country
              <select className="long-input">
                {countryList.country.map((country) => {
                  return <option key={country.code} value={country.code}>{country.name}</option>
                })}
                </select>
            </label>
            <label className = "label">Preferred Language
              <select className="long-input">
                {languageList.language.map((language) => {
                  return <option key={language.code} value={language.code}>{language.name}</option>
                })}
              </select>
            </label>
            <input type="submit" />
          </form>
        </div>
        <div className = "payment_info">
          <h2>Payment Information</h2>
          <form onSubmit={handleSubmit}>
            <label className = "label">Card Holder Name
              <input className="long-input"/>
            </label>
            <label className = "label">Full Name
              <input className="long-input"/>
            </label >
            <div className = "threeInOne">
              <div className = "cardDiv">
                <label className = "card-label">Card Number
                  <input className="card-input"/>
                </label>
              </div>
              <div className = "twoDiv">
                  <label className = "label-short">Exp Date
                    <input className="shorter-input"/>
                  </label>
              </div>
              <div className = "twoDiv">
                <label className = "label-short">CVC
                  <input className="shorter-input"/>
                </label>
              </div>
            </div>
            <label className = "label">Billing Address
                <input className="long-input"/>
            </label >
            <div className = "threeInOne">
              <div className = "cityDiv">
                <label className = "label-short">City
                  <input className="short-input"/>
                </label>
              </div>
              <div className = "threeBlockDiv">
                <label className = "label-short">State
                  <select className="stateDrop">
                    {stateList.state.map((state) => {
                      return <option key={state.id} value={state.id}>{state.name}</option>
                    })}
                  </select>
                </label>
              </div>
              <div className = "threeBlockDiv">
                <label className = "label-short">Zip Code
                  <input className="short-input"/>
                </label>
              </div>
            </div>
            <label className = "label">Country
              <select className="long-input">
                {countryList.country.map((country) => {
                  return <option key={country.code} value={country.code}>{country.name}</option>
                })}
                </select>
            </label>

            <input type="submit" />
          </form>
        </div>
        </div>
      <Footer />
    </div>

  );
}
