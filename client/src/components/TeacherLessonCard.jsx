import React, { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { BsCalendarDate } from "react-icons/bs";
import { TfiTime } from "react-icons/tfi";
import { IoMdPeople } from "react-icons/io";
import "./lessonCard.scss";
import EditLessonModal from "./EditLessonModal";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import { Form, Col, Row, FormGroup, Label, Input, Badge } from "reactstrap";
import { useUser } from "../hooks/useUser";
import { useGetTeacherLessons } from "../hooks/useGetTeacherLessons";
import { useSchoolConfig } from "../hooks/useSchoolConfig";

const TeacherLessonCard = () => {
  const [user] = useUser();
  const { data: lessons, isLoading, error } = useGetTeacherLessons();
  const [{ slots }] = useSchoolConfig();

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleEdit = () => {
    setShowEditModal(true);
  };
  const handleDelete = () => {
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = () => {
    setShowDeleteModal(false);
    setIsVisible(false);
  };

  return (
    <>
      {isVisible &&
        lessons?.map((lesson) => (
          <div className="lesson-card">
            <div className="lesson-header">
              <div className="title-container">
                <h2>{lesson.session.subjectName}</h2>
              </div>
              <div className="buttons-container">
                <button className="edit-delete-buttons " onClick={handleDelete}>
                  <TiDeleteOutline className="delete-button" />
                </button>

                {/* Delete Modal  */}

                <MDBModal
                  show={showDeleteModal}
                  setShow={setShowDeleteModal}
                  tabIndex="-1"
                >
                  <MDBModalDialog centered>
                    <MDBModalContent>
                      <MDBModalHeader>
                        <MDBModalTitle>Delete lesson</MDBModalTitle>
                        <MDBBtn
                          className="btn-close"
                          color="none"
                          onClick={() => setShowDeleteModal(false)}
                        />
                      </MDBModalHeader>
                      <MDBModalBody>
                        Once you delete the lesson you won't be able to restore
                        it. Are you sure you want to delete this lesson?
                      </MDBModalBody>
                      <MDBModalFooter>
                        <MDBBtn
                          className="cancel-modal-button"
                          color="secondary"
                          onClick={() => setShowDeleteModal(false)}
                        >
                          Cancel
                        </MDBBtn>
                        <MDBBtn
                          className="delete-modal-button"
                          color="danger"
                          onClick={handleDeleteConfirm}
                        >
                          Delete
                        </MDBBtn>
                      </MDBModalFooter>
                    </MDBModalContent>
                  </MDBModalDialog>
                </MDBModal>
                <button className="edit-delete-buttons" onClick={handleEdit}>
                  <EditLessonModal />
                </button>
              </div>
            </div>
            <hr />

            {/* Card body  */}

            <Form>
              <Row>
                <FormGroup row>
                  <Col for="date" md={1} className="vertical-center">
                    <BsCalendarDate className="lesson-card-icon" />
                  </Col>
                  <Col md={3} className="date-input">
                    <Input
                      className="lesson-card-input"
                      id="date"
                      name="date"
                      type="text"
                      defaultValue={lesson.date.slice(0, 10)}
                      disabled
                    />
                  </Col>
                  <Col for="date" md={1} className="vertical-center">
                    <TfiTime className="lesson-card-icon" />
                  </Col>
                  <Col md={3} className="date-input">
                    <Input
                      className="lesson-card-input"
                      id="slot"
                      name="slot"
                      type="text"
                      defaultValue={`${slots[lesson.session.slot].from} - ${
                        slots[lesson.session.slot].to
                      }`}
                      disabled
                    />
                  </Col>
                  <Col for="date" md={1} className="vertical-center">
                    <IoMdPeople className="lesson-card-icon" />
                  </Col>
                  <Col md={3} className="date-input">
                    <Input
                      className="lesson-card-input"
                      id="class"
                      name="class"
                      type="text"
                      defaultValue={lesson.session.class.name}
                      disabled
                    />
                  </Col>
                </FormGroup>
              </Row>

              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="topic" className="lesson-card-label">
                      Topic
                    </Label>
                    <Input
                      className="lesson-card-input"
                      id="topic"
                      name="topic"
                      type="text"
                      defaultValue={lesson.topic}
                      disabled
                    />
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <Label for="link" className="lesson-card-label">
                    Zoom link
                  </Label>
                </Col>
                <Col md={4}>
                  <Badge
                    className="lesson-card-badge"
                    id="classroomLink"
                    name="classroomLink"
                    target="_blank"
                    href={lesson.session.class.liveMeetingLink}
                    defaultValue={lesson.session.class.liveMeetingLink}
                    disabled
                  >
                    Classroom link
                  </Badge>
                </Col>
              </Row>
              <FormGroup>
                <Label for="objectives" className="lesson-card-label">
                  Objectives
                </Label>
                <Input
                  id="objectives"
                  name="objectives"
                  type="textarea"
                  className="lesson-card-input"
                  defaultValue={lesson.objectives}
                  disabled
                />
              </FormGroup>

              <Row>
                <Col md={2}>
                  <Label for="classwork" className="lesson-card-label">
                    Classwork
                  </Label>
                </Col>
                <Col md={4}>
                  {lesson?.classworks.map((classwork) => (
                    <Badge
                      className="lesson-card-badge"
                      id="classwork"
                      name="classwork"
                      target="_blank"
                      href={lesson.classworks}
                      defaultValue={lesson.classworks}
                    >
                      Classwork PDF
                    </Badge>
                  ))}
                </Col>
                <Col md={2}>
                  <Label for="homework" className="lesson-card-label">
                    Homework
                  </Label>
                </Col>
                <Col md={4}>
                  {lesson?.homeworks.map((homework) => (
                    <Badge
                      className="lesson-card-badge"
                      id="homework"
                      name="homework"
                      target="_blank"
                      href={lesson.homework}
                      defaultValue={lesson.homework}
                    >
                      Homework PDF
                    </Badge>
                  ))}
                </Col>
              </Row>
              <hr style={{ marginTop: "1rem" }} />
              <div className="lesson-creation-date">
                Created on {lesson.createdAt.slice(0, 10)}
              </div>
            </Form>
          </div>
        ))}
    </>
  );
};

export default TeacherLessonCard;
