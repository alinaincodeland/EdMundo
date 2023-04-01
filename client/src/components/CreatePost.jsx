import React from "react";
import { FormGroup, Input, Label, Form, FormText, Button } from "reactstrap";
import ReactQuill from "react-quill";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import "react-quill/dist/quill.snow.css";
import Laptop from "../assets/laptop.png";

const CreatePost = () => {
  return (
    <Form className="create-post-form">
      <div className="create-post-container">
        <h1 className="new-post">Create new post </h1>
        <MDBRow>
          <MDBCol md="6" className="image-col">
            <img src={Laptop} alt="new idea" className="create-post-image" />
          </MDBCol>
          <MDBCol md="6" className="form-table">
            <FormGroup>
              <Label for="title" className="title-label">
                Title
              </Label>
              <Input
                id="title"
                name="title"
                placeholder="Write the title.."
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="summary" className="summary-label">
                Summary
              </Label>
              <Input
                id="summary"
                name="summary"
                placeholder="Write the summary.."
                type="textarea"
              />
            </FormGroup>
            <FormGroup>
              <Label for="file" className="image-label">
                Image
              </Label>
              <Input id="file" name="file" type="file" className="file" />
            </FormGroup>
            <FormGroup>
              <Label for="article-content" className="content-label">
                Content
              </Label>
              <ReactQuill />
            </FormGroup>
            <Button className="post-button">Post</Button>
          </MDBCol>
        </MDBRow>
      </div>
    </Form>
  );
};

export default CreatePost;
