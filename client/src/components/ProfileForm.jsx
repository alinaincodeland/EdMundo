import React, { useState, useEffect } from "react";
import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBSpinner } from "mdb-react-ui-kit";
import axios from "axios";
import styles from "./ProfileForm.module.scss";
import { useUser } from "../hooks/useUser";

const FormData = {
  name: "Your Name",
  email: "youremail@domain.com",
  phone: "1256783746",
  address: "Berlin, Berliner Plz., 1",
  class: "0z-00",
};

export default function ProfileForm() {
  const [user] = useUser();
  const [profile, setProfile] = useState(FormData);

  useEffect(() => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      name: user?.name,
      email: user?.email,
      phone: user?.phone,
      address: user?.address,
      class: user?.currentClass?.name,
    }));
  }, [user]);

  const baseUrl = process.env.REACT_APP_BASE_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();

    if (user?.role) {
      axios
        .put(
          `${baseUrl}/api/${user?.role}/update`,
          { phone: profile.phone, address: profile.address },
          { withCredentials: true },
        )
        .then((res) => {
          console.log("Save response:", res.data.user);
          if (res.status === 200) {
            alert("Profile updated successfully!");
          } else if (res.status !== 200) {
            alert("Profile update failed!");
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  if (!user?.name)
    return (
      <div>
        <MDBSpinner grow style={{ width: "3rem", height: "3rem" }}>
          <span className="visually-hidden">Loading...</span>
        </MDBSpinner>
      </div>
    );
  return (
    <form className={styles.profileForm}>
      <h2 className={styles.profileFormHeader}>
        Hello
        <span className={styles.profileVioletUnderline}>
          {profile.name ? ` ${profile?.name?.split(" ")[0]}` : ""}!
        </span>{" "}
        Here you can edit your information.
      </h2>
      <div className={styles.inputsContainer}>
        <div className={styles.inputContainer}>
          <label>Your name</label>
          <input
            className={styles.disabled}
            type="text"
            placeholder={profile?.name}
            readOnly
            disabled
          />
        </div>
        {user?.role === "student" && (
          <div className={styles.inputContainer}>
            <label>Class</label>
            <input
              className={styles.disabled}
              type="text"
              value={profile?.class}
              readonly
              disabled
            />
          </div>
        )}

        <div className={styles.inputContainer}>
          <label>Email</label>
          <input
            className={styles.disabled}
            type="email"
            value={profile?.email}
            label="Email"
            readonly
            disabled
          />
        </div>
        <div className={styles.inputContainer}>
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            value={profile?.phone}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
          <label>Address</label>
          <input
            name="address"
            value={profile?.address}
            onChange={handleChange}
          />
        </div>
        <button
          className={styles.saveButton}
          onClick={handleSave}
          type="submit"
        >
          Save
        </button>
      </div>
    </form>
  );
}
