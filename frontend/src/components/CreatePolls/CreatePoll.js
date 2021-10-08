import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container } from "react-bootstrap";
import "./CreatePoll.css";

export default function CreatePoll() {
  return (
    <Container className="grid mt-5" fluid>
      <div className="box">
        <h4 className="text-center">Create your own Poll</h4>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter your question here" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Answers</Form.Label>
            <Form.Control
              className="mb-2"
              type="text"
              placeholder="Enter your choice"
            />
            <Form.Control
              className="mb-2"
              type="text"
              placeholder="Enter your choice"
            />
            <Form.Control
              className="mb-2"
              type="text"
              placeholder="Enter your choice"
            />
            <Form.Control
              className="mb-2"
              type="text"
              placeholder="Enter your choice"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Tags</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Select the Tags</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>
          <Button variant="success" type="submit">
            Create Poll
          </Button>
        </Form>
      </div>
    </Container>
  );
}
