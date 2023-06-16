import { Footer } from "../components/Footer";
import React, { useState, useEffect } from "react";
import "./Profile.css";
import stateList from "../constants/state-list.json";
import countryList from "../constants/country-list.json";
import { useDispatch } from "react-redux";
import { Membership } from "../components/Membership";
import { selectUser, updateUser } from "../slices/loginSlice";
import { useAppSelector } from "../app/hooks";
import { type User } from "../api/data";

// import { CardChip } from "../components/Profile/card_chip";
// import Box from "@mui/material/Box";

const landscape = "/Images/Landing_Image.jpg";
const edit = "/Images/Edit.png";

// Edit button is disabled
export const Profile: React.FC = () => {
  const dispatch = useDispatch();
  const userData: User | null = useAppSelector(selectUser);
  // currentSave will track the current user data so that the user can cancel an edit and their user data will be restored
  // in redux state.
  const [currentSave, setCurrentSave] = useState<User | null>(null);
  const [submitted, setSubmitted] = useState(true);

  // The purpose of this use effect is to set the currentSave state when the component mounts
  // We do not want current save to change every time userData changes, so we only setCurrentSave
  // if currentSave is currently null
  useEffect(() => {
    userData != null && currentSave === null && setCurrentSave(userData);
  }, [userData]);

  // Form data should not be used, use userData (redux state) only
  // const [formData, setFormData] = useState({
  //   compName: userData != null ? userData.compName : '',
  //   username: userData != null ? userData.username : '',
  //   email: userData != null ? userData.email : '',
  //   password: '',
  //   phone: userData != null ? userData.phone : '',
  //   address: userData != null ? userData.address : '',
  //   city: userData != null ? userData.city : '',
  //   state: userData != null ? userData.state : '',
  //   zipCode: userData != null ? userData.zipCode : '',
  //   country: userData != null ? userData.country : '',
  //   lang: '',
  // });

  const handleChange = (e: any): void => {
    // We should be changing redux state here instead of form data.
    // Dispatch an action and change the userData in a reducer in loginSlice.tsx
    if (e.target.value === undefined || userData == null) {
      return;
    }
    const updatedUser: User = {
      ...userData,
      [e.target.name]: e.target.value,
    };
    dispatch(updateUser(updatedUser));
  };

  const handleSave = (event: any): void => {
    // Make an API call to update the user, use a Saga for that call.
    event.preventDefault();
    setSubmitted(true);
    if (userData == null) {
      return;
    }
    // update the current save so cancel works correctly next time
    setCurrentSave(userData);
    dispatch({
      type: "SAVE_USER",
      payload: {
        email: userData.email,
        phone: userData.phone,
        address: userData.address,
        city: userData.city,
        state: userData.state,
        zipCode: userData.zipCode,
        country: userData.country,
      },
    });
  };

  const handleCancel = (event: any): void => {
    event.preventDefault();
    console.log(currentSave);
    if (currentSave != null) {
      dispatch(updateUser(currentSave));
    }
    setSubmitted(true);
  };

  const handleEdit = (event: any): void => {
    event.preventDefault();
    setSubmitted(false);
  };

  if (userData == null) {
    // redirect to homepage if they don't have user data.
    return <></>;
  }
  if (submitted) {
    return (
      <div className="Profile-Page">
        <img className="header" src={landscape} alt="sd landscape" />
        <div className="edit-button-parent">
          <button className="edit-button" onClick={handleEdit}>
            edit <img className="edit-img" src={edit} alt="edit image" />
          </button>
        </div>
        <div className="parent_box_display">
          <div className="profile-info">
            <h2>Profile Information</h2>
            <label className="label">
              First Name
              <p className="textDisplay"> {userData.firstName} </p>
            </label>
            <label className="label">
              Last Name
              <p className="textDisplay"> {userData.lastName} </p>
            </label>
            <label className="label">
              Email
              <p className="textDisplay"> {userData.email} </p>
            </label>
            {/* <label className="label">Password
              <p className="textDisplay"> {userData.password.replace(/./g, "*")}</p>
            </label> */}
            <label className="label">
              Phone Number
              <p className="textDisplay"> {userData.phone} </p>
            </label>
            <label className="label">
              Mailing Address
              <p className="textDisplay"> {userData.address} </p>
            </label>
            <div className="threeInOne">
              <div className="cityDiv">
                <label className="label-short">
                  City
                  <p className="short-display"> {userData.city} </p>
                </label>
              </div>
              <div className="threeBlockDiv">
                <label className="label-short">
                  State
                  <p className="short-display"> {userData.state} </p>
                </label>
              </div>
              <div className="threeBlockDiv">
                <label className="label-short">
                  Zip Code
                  <p className="short-display"> {userData.zipCode} </p>
                </label>
              </div>
            </div>
            <label className="label">
              Country
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
                {/* <label className="label">Company Name<span style={{ color: "red" }}>*</span>
                  <input className="long-input" type="text" value={userData.compName} name="compName" onChange={(e) => { handleChange(e) }} />
                </label> */}
                <div className="fullName">
                  <label className="label">
                    First Name
                    <p className="textDisplay"> {userData.firstName} </p>
                  </label>
                  <label className="label">
                    Last Name
                    <p className="textDisplay"> {userData.lastName} </p>
                  </label>
                </div>
                <label className="label">
                  Email
                  <p className="textDisplay"> {userData.email} </p>
                </label>
                {/* <label className="label">Password<span style={{ color: "red" }}>*</span>
                  <input className="long-input" type="text" value={userData.password} name="password" onChange={(e) => { handleChange(e) }} />
                </label> */}
                <label className="label">
                  Phone Number<span style={{ color: "red" }}>*</span>
                  <input
                    className="long-input"
                    type="text"
                    value={userData.phone}
                    name="phone"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </label>
                <label className="label">
                  Mailing Address<span style={{ color: "red" }}>*</span>
                  <input
                    className="long-input"
                    type="text"
                    value={userData.address}
                    name="mailing"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </label>
                <div className="threeInOne">
                  <div className="cityDiv">
                    <label className="label-short">
                      City<span style={{ color: "red" }}>*</span>
                      <input
                        className="short-input"
                        type="text"
                        value={userData.city}
                        name="city"
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      />
                    </label>
                  </div>
                  <div className="threeBlockDiv">
                    <label className="label-short">
                      State<span style={{ color: "red" }}>*</span>
                      <select
                        className="stateDrop"
                        name="state"
                        value={userData.state}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      >
                        {stateList.state.map((state) => {
                          return (
                            <option key={state.id} value={state.name}>
                              {state.name}
                            </option>
                          );
                        })}
                      </select>
                    </label>
                  </div>
                  <div className="threeBlockDiv">
                    <label className="label-short">
                      Zip Code<span style={{ color: "red" }}>*</span>
                      <input
                        className="short-input"
                        type="text"
                        value={userData.zipCode}
                        name="zipCode"
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      />
                    </label>
                    {/* <label className="label-short">Zip Code<span style={{ color: "red" }}>*</span>
                      <input className="short-input" type="text" value={userData.zipCode} name="zip" onChange={(e) => { handleChange(e) }} />
                    </label> */}
                  </div>
                </div>
                <label className="label">
                  Country<span style={{ color: "red" }}>*</span>
                  <select
                    className="long-input"
                    name="country"
                    value={userData.country}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  >
                    {countryList.country.map((country) => {
                      return (
                        <option key={country.code} value={country.name}>
                          {country.name}
                        </option>
                      );
                    })}
                  </select>
                </label>
                {/* <label className="label">Preferred Language<span style={{ color: "red" }}>*</span>
                  <select className="long-input" name="lang" value={userData.lang} onChange={(e) => { handleChange(e) }}>
                    {languageList.language.map((language) => {
                      return <option key={language.code} value={language.name}>{language.name}</option>
                    })}
                  </select>
                </label> */}
                <label className="reqLabel">
                  <span style={{ color: "red" }}>*</span>Required Fields
                </label>
              </div>
            </div>
            <button className="cancel-button" onClick={handleCancel}>
              Cancel
            </button>
            <button className="save-button" onClick={handleSave}>
              Save
            </button>
          </form>
        </div>
        <div style={{ opacity: 0.4 }}>
          <Membership />
        </div>
        <Footer />
      </>
    );
  }
};
