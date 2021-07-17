import React, { useState, useEffect } from "react";
import axios from "axios";
import history from "history/browser";

import Header from "../../Components/Header.jsx";

import { Card, Toast, Button, Form, Container } from "react-bootstrap";

export default function ViewTicket(props) {
  /*
  TODO:
  Create call to backend using the ID of the current ticket

  Add call to backend to submit changes to DB

  */

  const [isLoading, setLoading] = useState(false);
  const [ticket, setTicket] = useState({});
  const [isErr, setErr] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    console.log(props.match.params.id);

    axios
      .get(`http://localhost:3001/getTicket/${props.match.params.id}`)
      .then((res) => {
        setTicket(res.data);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    const comment = form.elements[0].value;
    if (comment.match(/^\s*$/)) {
      setLoading(false);
      setErr(true);
      setShowToast(true);
    } else {
      setErr(false);
      resolveTicket(comment);
    }
  };

  const resolveTicket = (comment) => {
    let data = {
      id: ticket.id,
      resolved: true,
      additionalcomments: comment,
    };
    axios
      .post("http://localhost:3001/updateTicket", data)
      .then(() => {
        setLoading(false);
      })
      .then(() => {
        setShowToast(true);
      });
  };

  return (
    <>
      <Header />
      <Container>
        <Card>
          <Card.Body>
            <Card.Title>Ticket #{ticket.id}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Category: {ticket.category}
            </Card.Subtitle>
            <Card.Text>Description: {ticket.description}</Card.Text>
            <Card.Text>
              Created: {new Date(parseInt(ticket.datecreated)).toLocaleString()}
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="Description of issue">
            <Form.Label>Summary of Resolution</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Give a detailed description of your issue"
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            disabled={isLoading}
            onClick={() => {
              setLoading(true);
            }}>
            {isLoading ? "Submiting..." : "Mark Resolved"}
          </Button>{" "}
          <Button
            variant="danger"
            onClick={() => {
              history.back();
            }}>
            Return
          </Button>
        </Form>
      </Container>
      <Toast
        className="toasty"
        show={showToast}
        onClose={() => {
          if (isErr) {
            setShowToast(false);
          } else {
            history.back();
          }
        }}>
        <Toast.Header>
          <strong className="me-auto">{isErr ? "Warning!" : "Success"}</strong>
        </Toast.Header>
        <Toast.Body>
          {isErr
            ? "You must include a summary of your steps to solve the issue!"
            : "Successfully submitted resolution. Close to go back home."}
        </Toast.Body>
      </Toast>
    </>
  );
}
