import { Footer } from "../components/Footer"
import React, { useState, useEffect } from "react";
import "./Profile.css";
import stateList from "../constants/state-list.json"
import countryList from "../constants/country-list.json"
import languageList from "../constants/language-list.json"
import { Membership } from "../components/Membership";
import { getUser } from "../slices/loginSlice";
import { useAppSelector } from "../app/hooks";
// import { CardChip } from "../components/Profile/card_chip";
// import Box from "@mui/material/Box";

const landscape = "/Images/Landing_Image.jpg";
const edit = "/Images/Edit.png";

export const Profile: React.FC = () => {
  useEffect(() => { document.body.style.backgroundColor = "#F9F9F9" }, [])

  const User = useAppSelector(getUser);

  const [submitted, setSubmitted] = useState(true);

  const [formData, setFormData] = useState({
    compName: User != null ? User.compName : '',
    username: User != null ? User.username : '',
    email: User != null ? User.email : '',
    password: '',
    phone: User != null ? User.phone : '',
    address: User != null ? User.address : '',
    city: User != null ? User.city : '',
    state: User != null ? User.state : '',
    zipCode: User != null ? User.zipCode : '',
    country: User != null ? User.country : '',
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

  if (submitted) {
    return (
      <div className="Profile-Page">
        <img className="header" src={landscape} alt="sd landscape" />
        <div className="edit-button-parent">
          <button className="edit-button" onClick={handleEdit}>edit <img className="edit-img" src={edit} alt="edit image" /></button>
        </div>
        <div className="parent_box_display">
          <div className="profile-info">
            <h2>Profile Information</h2>
            <label className="label">Company Name
              <p className="textDisplay"> {formData.compName} </p>
            </label>
            <div className="fullNameDisplay">
              <label className="label">Username
                <p className="half-display"> {formData.username} </p>
              </label >
            </div>
            <label className="label">Email
              <p className="textDisplay"> {formData.email} </p>
            </label>
            <label className="label">Password
              <p className="textDisplay"> {formData.password.replace(/./g, "*")}</p>
            </label>
            <label className="label">Phone Number
              <p className="textDisplay"> {formData.phone} </p>
            </label>
            <label className="label">Mailing Address
              <p className="textDisplay"> {formData.address} </p>
            </label>
            <div className="threeInOne">
              <div className="cityDiv">
                <label className="label-short">City
                  <p className="short-display"> {formData.city} </p>
                </label>
              </div>
              <div className="threeBlockDiv">
                <label className="label-short">State
                  <p className="short-display"> {formData.state} </p>
                </label>
              </div>
              <div className="threeBlockDiv">
                <label className="label-short">Zip Code
                  <p className="short-display"> {formData.zipCode} </p>
                </label>
              </div>
            </div>
            <label className="label">Country
              <p className="textDisplay"> {formData.country} </p>
            </label>
            <label className="label">Preferred Language
              <p className="textDisplay"> {formData.lang} </p>
            </label>
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
