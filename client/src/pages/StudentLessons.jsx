import React from "react";
import ScrollToTop from "react-scroll-up";
import { BsArrowUpCircle } from "react-icons/bs";
import StudentLessonCard from "../components/StudentLessonCard";
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";

const StudentLessons = () => {
  return (
    <div className="student-lessons-page">
      <MDBContainer className="teacher-lessons-container">
        <MDBRow className="student-lessons-header" style={{ padding: "0px" }}>
          <h1 className="student-lessons-title" style={{ padding: "0px" }}>
            {" "}
            My Lessons
          </h1>
        </MDBRow>
        <div className="page-card-container">
          <StudentLessonCard />
        </div>

        <ScrollToTop showUnder={160}>
          <span>
            <BsArrowUpCircle
              style={{
                width: "2.5rem",
                height: "2.5rem",
                color: "#a876f5",
              }}
            />
          </span>
        </ScrollToTop>
      </MDBContainer>
    </div>
  );
};

export default StudentLessons;
