import React, { useState } from "react";
import "./lessonCard.scss";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
} from "mdb-react-ui-kit";
import { FormGroup, Input, Label, Col, Row, Form } from "reactstrap";
import { CiEdit } from "react-icons/ci";

export default function EditLessonModal() {
  const [optModal, setOptModal] = useState(false);
  const toggleShow = () => setOptModal(!optModal);

  const [lessonDetails, setLessonDetails] = useState({
    date: "2023-02-02",
    slot: "8 - 8.40am",
    class: "1 A",
    subject: "Math",
    topic: "Odd numbers",
    objectives: "Learn arithmetic with odd numbers.",
    classwork: "http://www.primaryresources.co.uk/maths/pdfs/LH_oddandeven.pdf",
    homework: "http://www.primaryresources.co.uk/maths/pdfs/LH_oddandeven.pdf",
    notes: "Please review even numbers.",
    link: "google.com",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLessonDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("lesson details saved", lessonDetails);
    // save changes to database
  };

  return (
    <>
      <button className="edit-delete-buttons" onClick={toggleShow}>
        <CiEdit className="edit-button" />
      </button>
      <MDBModal show={optModal} tabIndex="-1" setShow={setOptModal}>
        <MDBModalDialog size="lg" centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Edit lesson</MDBModalTitle>
              <MDBBtn className="btn-close" color="none" onClick={toggleShow} />
            </MDBModalHeader>
            <MDBModalBody>
              <Form onSubmit={handleFormSubmit}>
                <Row>
                  <Col md={5}>
                    <FormGroup>
                      <Label for="date">Date</Label>
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        defaultValue={lessonDetails.date}
                        onChange={(e) => handleInputChange(e)}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="slot">Slot</Label>
                      <Input
                        id="slot"
                        name="slot"
                        type="select"
                        defaultValue={lessonDetails.slot}
                        onChange={(e) => handleInputChange(e)}
                      >
                        <option>8 - 8.40am</option>
                        <option>9 - 9.40am</option>
                        <option>10 - 10.40am </option>
                        <option>11 - 11.40am</option>
                        <option>12 - 12.40pm</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md={3}>
                    <FormGroup>
                      <Label for="class">Class</Label>
                      <Input
                        id="class"
                        name="class"
                        type="select"
                        defaultValue={lessonDetails.class}
                        onChange={(e) => handleInputChange(e)}
                      >
                        <option>1 A</option>
                        <option>1 B</option>
                        <option>2 A</option>
                        <option>2 B</option>
                        <option>3 A</option>
                        <option>3 B</option>
                        <option>4 A</option>
                        <option>4 B</option>
                        <option>5 A</option>
                        <option>5 B</option>
                        <option>6 A</option>
                        <option>6 B</option>
                        <option>7 A</option>
                        <option>7 B</option>
                        <option>8 A</option>
                        <option>8 B</option>
                        <option>9 A</option>
                        <option>9 B</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="select"
                        defaultValue={lessonDetails.subject}
                        onChange={(e) => handleInputChange(e)}
                      >
                        <option>Math</option>
                        <option>English</option>
                        <option>German</option>
                        <option>Politics</option>
                        <option>Geography</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="topic">Topic</Label>
                      <Input
                        id="topic"
                        name="topic"
                        defaultValue={lessonDetails.topic}
                        onChange={(e) => handleInputChange(e)}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <Label for="objectives">Objectives</Label>
                  <Input
                    id="objectives"
                    name="objectives"
                    type="textarea"
                    defaultValue={lessonDetails.objectives}
                    onChange={(e) => handleInputChange(e)}
                  />
                </FormGroup>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="classwork">Classwork</Label>
                      <Input
                        id="classwork"
                        name="classwork"
                        placeholder="Classwork url"
                        type="url"
                        defaultValue={lessonDetails.classwork}
                        onChange={(e) => handleInputChange(e)}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="homework">Homework</Label>
                      <Input
                        id="homework"
                        name="homework"
                        placeholder="Homework url"
                        type="url"
                        defaultValue={lessonDetails.homework}
                        onChange={(e) => handleInputChange(e)}
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <FormGroup>
                  <Label for="meetingLink">Classroom link</Label>
                  <Input
                    id="meetingLink"
                    name="meetingLink"
                    type="url"
                    defaultValue={lessonDetails.link}
                    disabled
                  />
                </FormGroup>
                <Row
                  style={{
                    marginTop: "1rem",
                    marginBottom: "1rem",
                    marginRight: "auto",
                    marginLeft: "auto",
                  }}
                >
                  <btn className="lesson-save-button">Save</btn>
                </Row>
              </Form>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
