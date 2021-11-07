import React from "react";
import { useParams } from "react-router";
import Profile from "./../../Images/Profile.png";
import classes from "./ContactProfile.module.css";
export default function ContactProfile() {
  const { fullName, email } = useParams();
  return (
    <div className={classes.profile}>
      <div>
        <img src={Profile} alt="Profile" />
      </div>
      <div>
        <h4>{fullName}</h4>
      </div>
      <div>
        <p>
          <a href={`mailto:${email}`}>{email}</a>
        </p>
      </div>
    </div>
  );
}
