import React, { useState } from "react";
import BlogArticle from "../components/BlogArticle";
import ScrollToTop from "react-scroll-up";
import { BsArrowUpCircle } from "react-icons/bs";
import "../components/blogArticle.scss";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="blog">
      <MDBContainer className="blog-section">
        <MDBRow className="blog-header" style={{ alignItems: "center" }}>
          <MDBCol md={6} style={{ padding: "0px" }}>
            <h1 className="blog-page-title"> School blog</h1>
          </MDBCol>
          <MDBCol md={6} style={{ padding: "0px" }}>
            <Link to="/teacher/createpost" className="create-new-post">
              Create new post
            </Link>
          </MDBCol>
        </MDBRow>

        <div className="blog-card-container">
          <BlogArticle />
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

export default Blog;
