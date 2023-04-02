import React from "react";
import "./blogArticle.scss";
import "./lessonCard.scss";
import { Card, Row, Col } from "reactstrap";
import Yea from "../assets/yea.png";

const BlogArticle = () => {
  const currentDate = new Date();
  return (
    <Card className="article-card">
      <Row className="g-0">
        <Col md="5" className="image-col">
          <img src={Yea} alt="card" fluid className="article-img" />
        </Col>

        <Col md="7">
          <div md="2" className="article-card-body">
            <h1 className="article-title">Congratulations, you made it!</h1>
            <p className="name-date">
              Chat GPT
              <span>
                {" "}
                {` ${currentDate.getDate()}/${
                  currentDate.getMonth() + 1
                }/${currentDate.getFullYear()}`}
              </span>
            </p>

            <p md="6" className="article-text">
              Congratulations to the recent graduates of the Full Stack Web
              Development course! Your hard work and dedication have paid off,
              and you should be proud of your achievements in gaining valuable
              skills and experience in web development.
            </p>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default BlogArticle;
