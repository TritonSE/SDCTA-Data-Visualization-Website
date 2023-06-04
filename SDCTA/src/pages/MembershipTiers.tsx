import { useState } from "react";
import { Footer } from "../components/Footer";
import { Collapsible } from "../components/Collapsible";
import "./MembershipTiers.css"
import membershipIcon from "../Images/membershipIcon.png";
import orgIcon from "../Images/organizationIcon.png";

export const MembershipTiers: React.FC = () => {
  const [planType, setPlanType] = useState("Not Selected");
  const [orgType, setOrgType] = useState("");
  const [memType, setMemType] = useState("");

  const adjustPlan = (): void => {
    setPlanType("");          {/* TODO: Implement algorithm that chooses plan based on org type and plan level. */}
  }

  const handleOrgChange = (e): void => {
    setOrgType(e.target.value);
    adjustPlan();
  };

  const handleMemChange = (e): void => {
    setMemType(e.target.value);
    adjustPlan();
  };

  return (
    <>
      <div className="header-container">
        <h1>San Diego Taxpayers Educational Foundation Membership</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, sed do.
        </p>
      </div>

      <div className="mem-plan-container">
        <div className="mem-plan-header">
          <h2>Selecting Your Membership Plan</h2>
          <button>Skip for Now</button>
        </div>
        <div className="mem-plan-dropdown">
          {/* TODO: Initial Display Value Needs to be Changed. to Organization Type */}
          <div className="mem-plan-org">
          <p>Step 1: Select Organization Type</p>
          <select value={orgType} onChange={handleOrgChange}>
            <option value="Corporate">Corporate</option>
            <option value="Small Business">Small Business</option>
            <option value="Household">Household</option>
            <option value="Individual">Individual</option>
          </select>
          </div>
          <p>Plan: {planType}</p>

          {/* TODO: Initial Display Value Needs to be Changed. to Membership Level  */}
          <div className="mem-plan-lvl">
          <p>Step 2: Select Membership Level</p>
          <select value={memType} onChange={handleMemChange}>
            <option value="Supporting">Supporting</option>
            <option value="Dialoguing">Dialoguing</option>
            <option value="Debating">Debating</option>
            <option value="Sustaining">Sustaining</option>
          </select>
          </div>
          <div className="price-and-button">
          <p>Price: To Be Calculated</p>            {/* TODO: Convert price to variable. It is currently hardcoded. */}
          <button disabled={!planType}>Proceed to Payment</button>
          </div>
        </div>
      </div>

      <div>
        <div>
          <img src={orgIcon} alt="Icon of a buiilding" />
          <p> Organization Types</p>
        </div>

        <Collapsible title="Introduction">
          <div className="description">
            <p>
              <strong><u>Description</u></strong>
            </p>

            <ul>
              <li> Firm with 10 or more employees </li>
              <li> 501(c) 4 or 6 with 10 or more members</li>
            </ul>      
          </div>

          <table className="pricingTable">
            <tr >
              <th className="tableHeader" colSpan={4}>Price by Membership Level</th>
            </tr>
            <tr className="pricingCategory">
              <td>Supporting</td>
              <td>Dialoguing</td>
              <td>Debating</td>
              <td>Sustaining</td>
            </tr>
            <tr className="prices">
              <td>$1,000</td>
              <td>$2,500</td>
              <td>$5,000</td>
              <td>$7,500</td>
            </tr>
          </table>
        </Collapsible>
      </div>
      <Footer />
    </>
  );
};
