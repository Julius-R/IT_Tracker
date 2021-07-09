import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { toggleModal } from "../redux/reducers/modalSlice";
import { addTicket } from "../redux/reducers/ticketSlice";
import { Modal, Button, Form, Container } from "react-bootstrap";

export default function TicketCreator() {
  const showModal = useSelector((state) => state.modalActive.isActive);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    const [category, description, priority] = form.elements;
    if (description.value.match(/^\s*$/)) {
      alert("Please do not leave this field empty");
    } else {
      createTicket(category.value, description.value, priority.value);
      dispatch(toggleModal());
    }
  };

  const createTicket = (category, description, priority) => {
    dispatch(
      addTicket({
        id: uuidv4(),
        category,
        description,
        priority,
        dateCreated: Date.now(),
        resolved: false,
      })
    );
  };
  return (
    <Modal
      size="lg"
      show={showModal}
      onHide={() => dispatch(toggleModal())}
      aria-labelledby="example-modal-sizes-title-lg">
      <Container className="ticketCreator">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="Category of issue">
            <Form.Label>Category</Form.Label>
            <Form.Control as="select" custom>
              <option>Software</option>
              <option>Hardware</option>
              <option>Unsure</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="Description of issue">
            <Form.Label>Description</Form.Label>
            <Form.Control
              required
              as="textarea"
              rows={3}
              placeholder="Give a detailed description of your issue"
            />
          </Form.Group>
          <Form.Group controlId="Priority Selector">
            <Form.Label>Priority</Form.Label>
            <Form.Control as="select" custom>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>{" "}
          <Button variant="danger" onClick={() => dispatch(toggleModal())}>
            Cancel
          </Button>
        </Form>
      </Container>
    </Modal>
  );
}
