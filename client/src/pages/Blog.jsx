import React from "react";
import BlogArticle from "../components/BlogArticle";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import ScrollToTop from "react-scroll-up";
import { BsArrowUpCircle } from "react-icons/bs";
import "../components/blogArticle.scss";

const Blog = () => {
  return (
    <div className="blog">
      <MDBContainer className="blog-section">
        <MDBRow
          className="teacher-lessons-header"
          style={{ alignItems: "center" }}
        >
          <h1 className="teacher-lessons-title"> School blog</h1>
        </MDBRow>

        <BlogArticle />

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

export default Blog;
