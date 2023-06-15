import { Footer } from "../components/Footer"
import React, { useState, useEffect } from "react";
import "./Profile.css";
import stateList from "../constants/state-list.json"
import countryList from "../constants/country-list.json"
import languageList from "../constants/language-list.json"
import { useDispatch } from "react-redux";
import { Membership } from "../components/Membership";
import { selectLoadingUser, selectUser } from "../slices/loginSlice";
import { useAppSelector } from "../app/hooks";
import { User } from '../api/data';
import { auth } from "../firebase-config";

// import { CardChip } from "../components/Profile/card_chip";
// import Box from "@mui/material/Box";

const landscape = "/Images/Landing_Image.jpg";
const edit = "/Images/Edit.png";

// Edit button is disabled
export const Profile: React.FC = () => {
  const dispatch = useDispatch();
  let userData: User | null = useAppSelector(selectUser);

  const [submitted, setSubmitted] = useState(true);

  // Form data should not be used, use userData (redux state) only
  const [formData, setFormData] = useState({
    compName: userData != null ? userData.compName : '',
    username: userData != null ? userData.username : '',
    email: userData != null ? userData.email : '',
    password: '',
    phone: userData != null ? userData.phone : '',
    address: userData != null ? userData.address : '',
    city: userData != null ? userData.city : '',
    state: userData != null ? userData.state : '',
    zipCode: userData != null ? userData.zipCode : '',
    country: userData != null ? userData.country : '',
    lang: '',
  });

  const handleChange = (e: any): void => {
    const updatedSave = {
      ...formData,
      [e.target.name]: e.target.value
    }
    setFormData(updatedSave);
  }

  const handleSave = (event: any): void => {
    event.preventDefault();
    setSubmitted(true);
  }

  const handleCancel = (event: any): void => {
    event.preventDefault();
    // setFormData(currentSave);
    setSubmitted(true);
  }

  const handleEdit = (event: any): void => {
    event.preventDefault();
    setSubmitted(false);
  }

  if (submitted && userData) {
    return (
      <div className="Profile-Page">
        <img className="header" src={landscape} alt="sd landscape" />
        {/* <div className="edit-button-parent">
          <button className="edit-button" onClick={handleEdit}>edit <img className="edit-img" src={edit} alt="edit image" /></button>
        </div> */}
        <div className="parent_box_display">
          <div className="profile-info">
            <h2>Profile Information</h2>
            <label className="label">Email
              <p className="textDisplay"> {userData.email} </p>
            </label>
            {/* <label className="label">Password
              <p className="textDisplay"> {userData.password.replace(/./g, "*")}</p>
            </label> */}
            <label className="label">Phone Number
              <p className="textDisplay"> {userData.phone} </p>
            </label>
            <label className="label">Mailing Address
              <p className="textDisplay"> {userData.address} </p>
            </label>
            <div className="threeInOne">
              <div className="cityDiv">
                <label className="label-short">City
                  <p className="short-display"> {userData.city} </p>
                </label>
              </div>
              <div className="threeBlockDiv">
                <label className="label-short">State
                  <p className="short-display"> {userData.state} </p>
                </label>
              </div>
              <div className="threeBlockDiv">
                <label className="label-short">Zip Code
                  <p className="short-display"> {userData.zipCode} </p>
                </label>
              </div>
            </div>
            <label className="label">Country
              <p className="textDisplay"> {userData.country} </p>
            </label>
            {/* <label className="label">Preferred Language
              <p className="textDisplay"> {userData.lang} </p>
            </label> */}
          </div>
        </div>
        <Membership />
        <Footer />
      </div>
    );
  } else {
    return (
      <>
        <div className="Profile-Page">
          <img className="header" src={landscape} alt="sd landscape" />
          <form onSubmit={handleSave}>
            <div className="parent_box">
              <div className="profile-info">
                <h2>Profile Information</h2>
                <label className="label">Company Name<span style={{ color: "red" }}>*</span>
                  <input className="long-input" type="text" value={formData.compName} name="compName" onChange={(e) => { handleChange(e) }} />
                </label>
                <div className="fullName">
                  <label className="label">First Name<span style={{ color: "red" }}>*</span>
                    <input className="half-input" type="text" value={formData.username} name="fName" onChange={(e) => { handleChange(e) }} />
                  </label >
                </div>
                <label className="label">Email Address<span style={{ color: "red" }}>*</span>
                  <input className="long-input" type="text" value={formData.email} name="email" onChange={(e) => { handleChange(e,) }} />
                </label >
                <label className="label">Password<span style={{ color: "red" }}>*</span>
                  <input className="long-input" type="text" value={formData.password} name="password" onChange={(e) => { handleChange(e) }} />
                </label>
                <label className="label">Phone Number<span style={{ color: "red" }}>*</span>
                  <input className="long-input" type="text" value={formData.phone} name="phone" onChange={(e) => { handleChange(e) }} />
                </label>
                <label className="label">Mailing Address<span style={{ color: "red" }}>*</span>
                  <input className="long-input" type="text" value={formData.address} name="mailing" onChange={(e) => { handleChange(e) }} />
                </label>
                <div className="threeInOne">
                  <div className="cityDiv">
                    <label className="label-short">City<span style={{ color: "red" }}>*</span>
                      <input className="short-input" type="text" value={formData.city} name="city" onChange={(e) => { handleChange(e) }} />
                    </label>
                  </div>
                  <div className="threeBlockDiv">
                    <label className="label-short">State<span style={{ color: "red" }}>*</span>
                      <select className="stateDrop" name="state" value={formData.state} onChange={(e) => { handleChange(e) }}>
                        {stateList.state.map((state) => {
                          return <option key={state.id} value={state.name}>{state.name}</option>
                        })}
                      </select>
                    </label>
                  </div>
                  <div className="threeBlockDiv">
                    <label className="label-short">Zip Code<span style={{ color: "red" }}>*</span>
                      <input className="short-input" type="text" value={formData.zipCode} name="zip" onChange={(e) => { handleChange(e) }} />
                    </label>
                  </div>
                </div>
                <label className="label">Country<span style={{ color: "red" }}>*</span>
                  <select className="long-input" name="country" value={formData.country} onChange={(e) => { handleChange(e) }}>
                    {countryList.country.map((country) => {
                      return <option key={country.code} value={country.name}>{country.name}</option>
                    })}
                  </select>
                </label>
                <label className="label">Preferred Language<span style={{ color: "red" }}>*</span>
                  <select className="long-input" name="lang" value={formData.lang} onChange={(e) => { handleChange(e) }}>
                    {languageList.language.map((language) => {
                      return <option key={language.code} value={language.name}>{language.name}</option>
                    })}
                  </select>
                </label>
                <label className="reqLabel"><span style={{ color: "red" }}>*</span>Required Fields</label>
              </div>
            </div>
            <button className="cancel-button" onClick={handleCancel}>Cancel</button>
            <button className="save-button" onClick={handleSave}>Save</button>
          </form>
        </div>
        <div style={{ opacity: 0.4 }}>
          <Membership />
        </div>
        <Footer />
      </>
    );
  }
}
