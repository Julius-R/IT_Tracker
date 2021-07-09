import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../redux/reducers/modalSlice";
import { Modal, Button, Form, Container } from "react-bootstrap";

export default function TicketCreator() {
  const showModal = useSelector((state) => state.modalActive.isActive);
  const dispatch = useDispatch();
  return (
    <Modal
      size="lg"
      show={showModal}
      onHide={() => dispatch(toggleModal())}
      aria-labelledby="example-modal-sizes-title-lg">
      <Container className="ticketCreator">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>{" "}
          <Button variant="danger" type="submit">
            Cancel
          </Button>
        </Form>
      </Container>
    </Modal>
  );
}
