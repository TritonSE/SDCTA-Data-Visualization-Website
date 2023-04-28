import { Footer } from "../components/Footer"
import landscape from ".//../Images/Landing_Image.jpg";
import React, { useState, useEffect } from "react";
import "./Profile.css";
import stateList from "../constants/state-list.json"
import countryList from "../constants/country-list.json"
import languageList from "../constants/language-list.json"
import membershipPic from "../Images/membership-status.png"

export const Profile: React.FC = () => {
  useEffect(() => { document.body.style.backgroundColor = "#F9F9F9" }, [])

  const handleSave = (event: any): void => {
    event.preventDefault();
    alert('You have saved the form.')
  }

  const handleCancel = (event: any): void => {
    event.preventDefault();
    alert('You have cancelled the form.')
  }

  const handleMembership = (event: any): void => {
    event.preventDefault();
    alert('You want to change your membership.')
  }

  const [readMore, setReadMore] = useState(false);

  const extraContent =
    <text>
      <li>Participate in the <b>Issues Sub-Committee</b></li>
      <li>Receive major <b>event ticket discountsevent ticket discounts</b>, invitations to <b>VIP events</b>, and invitations to <b>friendraisers</b>at Board Members’ houses</li>
      <li><b>Chair events</b> and membership committees</li>
      <li>Eligibility to be nominated to serve on the <b>Board of Directors</b> and the <b>Executive or Rules Committee</b></li>
    </text>

  const linkName = readMore ? 'See less benefits' : 'See more benefits'
  return (
    <div className="Profile-Page">
      <img className = "header" src={landscape} alt="sd landscape" />
      <form onSubmit={handleSave}>
      <div className = "parent_box">
        <div className = "profile-info">
          <h2>Profile Information</h2>
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
        </div>
        <div className = "payment_info">
          <h2>Payment Information</h2>
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
          </div>
        </div>
        <button className="cancel-button" onClick={handleCancel}>Cancel</button>
        <button className="save-button" onClick={handleSave}>Save</button>
      </form>

      <div className = "membership">
        <h1>
          <b>Membership Information</b>
        </h1>
        <p>Membership Level: <span style={ { color: "#7F1922" } }>Free</span> <br /> Organization Type: N/A</p>
        <img src = {membershipPic} alt="membership-graph" width="814.8px" height="120px"/>
        <h2>
          <b>Why should I upgrade my membership?</b>
        </h2>
        <ul>
          <li>Access to <b>exclusive data visualizations</b></li>
          <li>Serve on the <b>Oversight Committee</b></li>
          <li>Access to <b>Watchdog Alerts</b></li>
          <li>Eligibility to be featured in the <b>members-only newsletter</b></li>

        {readMore && extraContent}
        </ul>
        <a className = "read-more-link" onClick={ () => { setReadMore(!readMore) } }><u style = { { color: "#C3272E" } }>{linkName}</u><br/></a>

        <button className = "change-membership" onClick={handleMembership}>Change Membership</button>
      </div>
      <Footer />
    </div>

  );
}
