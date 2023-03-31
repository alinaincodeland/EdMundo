import React from "react";
import "./blogArticle.scss";
import "./lessonCard.scss";
import {
  Card,
  CardTitle,
  CardText,
  CardBody,
  CardImg,
  Row,
  Col,
} from "reactstrap";
import { MDBSpinner } from "mdb-react-ui-kit";
import { useGetStudentLessons } from "../hooks/useGetStudentLessons";
import { useSchoolConfig } from "../hooks/useSchoolConfig";

const BlogArticle = () => {
  return (
    <Card style={{ maxWidth: "540px" }}>
      <Row className="g-0">
        <Col md="4">
          <CardImg
            src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp"
            alt="..."
            fluid
          />
        </Col>
        <Col md="8">
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            <CardText>
              <small className="text-muted">Last updated 3 mins ago</small>
            </CardText>
          </CardBody>
        </Col>
      </Row>
    </Card>
  );
};

export default BlogArticle;
