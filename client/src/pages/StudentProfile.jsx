import React from "react";
import ProfileForm from "../components/ProfileForm";
import student_profile_image from "../images/student_profile_image.png";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { MDBTypography } from "mdb-react-ui-kit";
import styles from "./StudentProfile.scss";

const StudentProfile = () => {
  return (
    <div className="student-profile-page-container">
      <header className="student-profile-header-container">
        <h1>My profile</h1>
      </header>
      <MDBContainer fluid className="p-3 my-5 h-custom">
        <main>
          <MDBRow
            className="d-flex  align-items-center m-auto students-profile-main"
            style={{ maxWidth: "1300px" }}
          >
            <MDBCol col="10" md="6" className="d-flex justify-content-center">
              <img
                src={student_profile_image}
                alt="Student Profile Decorative "
                className="my-5 rounded object-cover student-profile-img"
              />
            </MDBCol>
            <MDBCol className="mt-4" col="4" md="6">
              <div className="  d-flex align-items-center justify-content-center">
                <ProfileForm role={"student"} />
              </div>
            </MDBCol>
          </MDBRow>
        </main>
      </MDBContainer>
    </div>
  );
};

export default StudentProfile;
