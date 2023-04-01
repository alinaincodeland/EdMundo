import React from "react";
import "./blogArticle.scss";
import "./lessonCard.scss";
import { Card, CardImg, Row, Col } from "reactstrap";
import Accountant from "../assets/accountant.png";

const BlogArticle = () => {
  return (
    <Card className="article-card">
      <Row className="g-0">
        <Col md="5" className="image-col">
          <img src={Accountant} alt="card" fluid className="article-img" />
        </Col>

        <Col md="7">
          <div md="2" className="article-card-body">
            <h1 className="article-title">Card title</h1>
            <p className="name-date">
              Tina Turner <span>01.04.23</span>{" "}
            </p>

            <p md="6" className="article-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p md="2" className="article-footer">
              Last updated 3 mins ago
            </p>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default BlogArticle;
