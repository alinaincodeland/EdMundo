import React from "react";
import ProfileForm from "../components/ProfileForm";
import teacher_profile_image from "../images/teacher_profile_image.png";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { MDBTypography } from "mdb-react-ui-kit";
import styles from "./TeacherProfile.scss";

const TeacherProfile = () => {
  return (
    <div className="teacher-profile-page-container">
      <header className="teacher-profile-header-container">
        <h1>My Profile</h1>
      </header>
      <MDBContainer
        fluid
        className="p-3 my-5 h-custom teacher-profile-main-container"
      >
        <main>
          <MDBRow
            className="d-flex  align-items-center m-auto"
            style={{ maxWidth: "1300px" }}
          >
            <MDBCol col="10" md="6" className="d-flex justify-content-center">
              <img
                src={teacher_profile_image}
                alt="Teacher Profile Decorative "
                className="my-5 rounded object-cover teacher-profile-image"
              />
            </MDBCol>
            <MDBCol className="mt-4" col="4" md="6">
              <div className="  d-flex align-items-center justify-content-center">
                <ProfileForm role={"teacher"} />
              </div>
            </MDBCol>
          </MDBRow>
        </main>
      </MDBContainer>
    </div>
  );
};

export default TeacherProfile;
