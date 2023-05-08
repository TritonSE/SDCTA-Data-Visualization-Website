import { Footer } from "../components/Footer"
import landscape from ".//../Images/Landing_Image.jpg";
import React, { useState, useEffect } from "react";
import "./Profile.css";
import stateList from "../constants/state-list.json"
import countryList from "../constants/country-list.json"
import languageList from "../constants/language-list.json"
import { Membership } from "../components/Membership";

export const Profile: React.FC = () => {
  useEffect(() => { document.body.style.backgroundColor = "#F9F9F9" }, [])

  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    compName: '',
    fName: '',
    lName: '',
    email: '',
    password: '',
    phone: '',
    mailing: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    lang: '',
  });

  // const currentSave = {
  //  ...formData
  // }

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
      <div>
        <button onClick={handleEdit}>Edit</button>
        <p>Company Name {formData.compName}</p>
        <p>First Name {formData.fName}</p>
        <p>Last Name {formData.lName}</p>
        <p>Email {formData.email}</p>
        <p>Password {formData.password}</p>
        <p>Phone Number {formData.phone}</p>
        <p>Mailing Address {formData.mailing}</p>
        <p>City {formData.city}</p>
        <p>State {formData.state}</p>
        <p>Zip Code {formData.zip}</p>
        <p>Country {formData.country}</p>
        <p>Preferred Language {formData.lang}</p>
      <Membership />
      <Footer/>
      </div>
    );
  } else {
    return (
      <>
      <div className="Profile-Page">
        <img className = "header" src={landscape} alt="sd landscape" />
        <form onSubmit={handleSave}>
        <div className = "parent_box">
          <div className = "profile-info">
            <h2>Profile Information</h2>
              <label className = "label">Affiliated Company<span style={ { color: "red" } }>*</span>
                <input className="long-input" type="text" value = {formData.compName} name="compName" onChange={(e) => { handleChange(e) }}/>
              </label>
              <div className = "fullName">
                <label className = "label">First Name<span style={ { color: "red" } }>*</span>
                  <input className="half-input" type="text" value = {formData.fName} name="fName" onChange={(e) => { handleChange(e) }}/>
                </label >
                <label className = "label">Last Name<span style={ { color: "red" } }>*</span>
                  <input className="half-input" type="text" value = {formData.lName} name="lName" onChange={(e) => { handleChange(e) }}/>
                </label >
              </div>
              <label className = "label">Email Address<span style={ { color: "red" } }>*</span>
                  <input className="long-input" type="text" value = {formData.email} name="email" onChange={(e) => { handleChange(e,) }}/>
              </label >
              <label className = "label">Password<span style={ { color: "red" } }>*</span>
                <input className="long-input" type="text" value = {formData.password} name="password" onChange={(e) => { handleChange(e) }}/>
              </label>
              <label className = "label">Phone Number<span style={ { color: "red" } }>*</span>
                <input className="long-input" type="text" value = {formData.phone} name="phone" onChange={(e) => { handleChange(e) }}/>
              </label>
              <label className = "label">Mailing Address<span style={ { color: "red" } }>*</span>
                <input className="long-input" type="text" value = {formData.mailing} name="mailing" onChange={(e) => { handleChange(e) }}/>
              </label>
              <div className = "threeInOne">
                <div className = "cityDiv">
                  <label className = "label-short">City<span style={ { color: "red" } }>*</span>
                    <input className="short-input" type="text" value = {formData.city} name="city" onChange={(e) => { handleChange(e) }}/>
                  </label>
                </div>
                <div className = "threeBlockDiv">
                  <label className = "label-short">State<span style={ { color: "red" } }>*</span>
                    <select className="stateDrop" name="state" value = {formData.state} onChange={(e) => { handleChange(e) }}>
                      {stateList.state.map((state) => {
                        return <option key={state.id} value={state.name}>{state.name}</option>
                      })}
                    </select>
                  </label>
                </div>
                <div className = "threeBlockDiv">
                  <label className = "label-short">Zip Code<span style={ { color: "red" } }>*</span>
                    <input className="short-input" type="text" value = {formData.zip} name="zip" onChange={(e) => { handleChange(e) }}/>
                  </label>
                </div>
              </div>
              <label className = "label">Country<span style={ { color: "red" } }>*</span>
                <select className="long-input" name="country" value = {formData.country} onChange={(e) => { handleChange(e) }}>
                  {countryList.country.map((country) => {
                    return <option key={country.code} value={country.name}>{country.name}</option>
                  })}
                  </select>
              </label>
              <label className = "label">Preferred Language<span style={ { color: "red" } }>*</span>
                <select className="long-input" name="lang" value = {formData.lang} onChange={(e) => { handleChange(e) }}>
                  {languageList.language.map((language) => {
                    return <option key={language.code} value={language.name}>{language.name}</option>
                  })}
                </select>
              </label>
              <label className = "reqLabel"><span style={ { color: "red" } }>*</span>Required Fields</label>
            </div>
          </div>
        <button className="cancel-button" onClick={handleCancel}>Cancel</button>
        <button className="save-button" onClick={handleSave}>Save</button>
        </form>
        </div>
        <div style={ { opacity: 0.4 } }>
          <Membership/>
        </div>
        <Footer/>
        </>
    );
  }
}
