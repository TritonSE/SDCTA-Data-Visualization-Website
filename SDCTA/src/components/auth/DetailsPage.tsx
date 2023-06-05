import { useState } from "react";
import { updateUserDetails } from "../../api/consumer";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase-config";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

export const DetailsPage: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("United States");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const updateDetails = async (): Promise<void> => {
    try {
      let email;
      if (auth.currentUser == null) {
        navigate("/Signup");
        return;
      } else {
        email = auth.currentUser.email;
      }
      if (email == null) {
        navigate("/Signup");
        return;
      } else {
        const response = await updateUserDetails(email, {
          phone: phoneNumber,
          address,
          city,
          state,
          zipCode,
          country,
        });
        console.log(response);
        navigate("/");
      }
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
    }
  };
  return (
    <div>
      <h1 className="signup-form-title details_title">
        Additional Profile Information
      </h1>
      <div className="signup-form details_form">
        <div className="input-boxes">
          <h3 className="textbox-label">Phone Number</h3>
          <input
            type="tel"
            placeholder="0-123-456-7890"
            className="text-input"
            onChange={(event) => {
              setPhoneNumber(event.target.value);
            }}
          />
          <h3 className="textbox-label">Mailing Address</h3>
          <input
            className="text-input"
            onChange={(event) => {
              setAddress(event.target.value);
            }}
          />
          <div className="info-item">
            <h3 className="textbox-label info-label">City</h3>
            <input
              className="text-input"
              onChange={(event) => {
                setCity(event.target.value);
              }}
            />
          </div>
          <div className="info-item middle-item">
            <h3 className="textbox-label info-label">State</h3>

            <RegionDropdown
              // @ts-expect-error Since using custom component, it gives an error
              // when passing the className, but otherwise works.
              className="text-input"
              country="United States"
              value={state}
              onChange={(state: string) => {
                setState(state);
              }}
            />
          </div>
          <div className="info-item">
            <h3 className="textbox-label info-label">Zip Code</h3>
            <input
              className="text-input"
              onChange={(event) => {
                setZipCode(event.target.value);
              }}
            />
          </div>
          <h3 className="textbox-label">Country</h3>
          <div className="dropdown">
            <CountryDropdown
              // @ts-expect-error Since using custom component, it gives an error
              // when passing the className, but otherwise works.
              className="text-input"
              onChange={(country: string) => {
                setCountry(country);
              }}
              value={country}
            />
          </div>
          <div className="info-button">
            <button
              onClick={() => {
                navigate("/");
              }}
              className="btn-skip"
            >
              Skip For Now
            </button>
          </div>
          <div className="btn-spacer"></div>
          <div className="info-button">
            <button
              onClick={async () => {
                await updateDetails();
              }}
              className="btn-signup btn-continue"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
      {errorMessage !== "" ? (
        <p className="error-message">{errorMessage}</p>
      ) : (
        ""
      )}
    </div>
  );
};
