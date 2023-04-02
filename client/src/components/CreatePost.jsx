import React, { useState } from "react";
import { FormGroup, Input, Label, Form, Button } from "reactstrap";
import ReactQuill from "react-quill";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import "react-quill/dist/quill.snow.css";
import Laptop from "../assets/laptop.png";
import { Navigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState("");

  async function createNewPost(e) {
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", file[0]);
    e.preventDefault();
    //     const response = await fetch("http://localhost:5000/post", {
    //       method: "POST",
    //       body: data,
    //       credentials: "include",
    //     });
    //     if (response.ok) {
    //       setRedirect(true);
    //     }
    //   }

    //   if (redirect) {
    //     return <Navigate to={"/"} />;
  }

  return (
    <Form className="create-post-form" onSubmit={createNewPost}>
      <div className="create-post-container">
        <h1 className="new-post">Create new post </h1>
        <MDBRow>
          <MDBCol md="6" className="image-col">
            <img src={Laptop} alt="new idea" className="create-post-image" />
          </MDBCol>
          <MDBCol md="6" className="form-table">
            <FormGroup>
              <Label for="title" className="title-label" value={title}>
                Title
              </Label>
              <Input
                id="title"
                name="title"
                placeholder="Write the title.."
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="file" className="image-label">
                Image
              </Label>
              <Input
                id="file"
                name="file"
                type="file"
                className="file"
                onChange={(e) => setFile(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="article-content" className="content-label">
                Content
              </Label>
              <ReactQuill value={content} onChange={setContent} />
            </FormGroup>
            <Button className="post-button">Post</Button>
          </MDBCol>
        </MDBRow>
      </div>
    </Form>
  );
};

export default CreatePost;
