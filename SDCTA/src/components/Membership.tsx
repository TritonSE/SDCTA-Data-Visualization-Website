import React, { useState } from "react";

const membershipPic = "/Images/membership-status.png";

export const Membership: React.FC = () => {
  const [readMore, setReadMore] = useState(false);

  const extraContent =
    <text>
      <li>Participate in the <b>Issues Sub-Committee</b></li>
      <li>Receive major <b>event ticket discounts</b>, invitations to <b>VIP events</b>, and invitations to <b>friendraisers</b> at Board Members’ houses</li>
      <li><b>Chair events</b> and membership committees</li>
      <li>Eligibility to be nominated to serve on the <b>Board of Directors</b> and the <b>Executive or Rules Committee</b></li>
    </text>

  const linkName = readMore ? 'See less benefits' : 'See more benefits'

  const handleMembership = (event: any): void => {
    event.preventDefault();
    alert('You want to change your membership.')
  }

  // const [isDisabled, setIsDisabled] = useState(false);

  return (
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
  );
};
