import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container } from "react-bootstrap";
import "./CreatePoll.css";
import Select from "react-select";

export default function CreatePoll() {
  const [tags, setTags] = useState([]);
  useEffect(() => {
    fetch("api/tags/")
      .then((response) => response.json())
      .then((tag_list) => {
        const temp_tags = tag_list.map((tag) => {
          return tag;
        });
        console.log(temp_tags);
        setTags(temp_tags);
      })
      .catch((error) => console.log(error));
  }, []);

  const tags_options = tags.map((tag) => {
    return {
      'value':tag.id,
      'label':tag.name
    };
  });

  const handleSubmit=(e)=>{
    fetch("api/create_question/",{
      method:"POST",
      headers:{
        'Accept':'application/json',
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({
        'content':e.state.content,
        'tags':e.state.tags,
        'choices':e.state.choices
      })
    })
  }

  return (
    <Container className="grid mt-5" fluid>
      <div className="box">
        <h4 className="text-center">Create your own Poll</h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Poll Question</Form.Label>
            <Form.Control type="text" placeholder="Enter your question here" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Options</Form.Label>
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
          <span>Choose Tags</span>
          <Select
            isMulti
            name="tags"
            options={tags_options}
            className="basic-multi-select"
            classNamePrefix="select"
          />
          <div className="submit-button">
            <Button variant="success" type="submit">
              Create Poll
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
}
