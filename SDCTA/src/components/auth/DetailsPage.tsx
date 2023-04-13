import { useState } from "react";
import { updateUserDetails } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase-config";

export const DetailsPage: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");
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
        await updateUserDetails(
          phoneNumber,
          address,
          city,
          state,
          zipCode,
          country,
          email
        );
        navigate("/");
      }
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
    }
  }
  return (
        <div>
            <h1 className="signup-form-title details_title">
                Additional Profile Information
                (Optional)
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
                    <div className="address-info">
                        <div className="info-item">
                            <h3 className="textbox-label">City</h3>
                            <input
                                className="text-input"
                                onChange={(event) => {
                                  setCity(event.target.value);
                                }}
                            />
                        </div>
                        <div className="info-item middle-item">
                            <h3 className="textbox-label">State</h3>
                            <input
                                className="text-input"
                                placeholder="i.e. California"
                                onChange={(event) => {
                                  setState(event.target.value);
                                }}
                            />
                        </div>
                        <div className="info-item">
                            <h3 className="textbox-label">Zip Code</h3>
                            <input
                                className="text-input"
                                onChange={(event) => {
                                  setZipCode(event.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <h3 className="textbox-label">Country</h3>
                    <input
                        className="text-input"
                        onChange={(event) => {
                          setCountry(event.target.value);
                        }}
                    />
                    <button
                        onClick={async () => {
                          await updateDetails();
                        }}
                        className="btn-details btn-signup"
                    >
                    Continue
                    </button>
                </div>
            </div>
        </div>
  );
}
