import { useState, useEffect } from "react";
import "../TopPolls/TopPolls.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from 'react-bootstrap/ListGroup'

export default function TopPolls() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/questions/")
      .then((response) => response.json())
      .then((questions) => {
        setData(questions);
      });
  }, []);


  return (
    <>
      <header>
        <h1 className="page-title">Top Polls</h1>
      </header>
      <hr className="title-hr" />
      <section className="question-cards-wrapper">
        <Row xs={1} md={2} className="g-4">
          {data.map((question) => {
            console.log(question.id)
            return (
              <Col key={question.id}>
                  <Card className="full-card">
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                      <Card.Title className="question-text">{question.content}</Card.Title>
                      <Card.Body className="card-body">
                        <ListGroup as="ol">
                          {question.choices.map((choice)=>{
                            return <ListGroup.Item as="li" key={choice.id}>
                              {choice.content}
                            </ListGroup.Item>
                          })}
                        </ListGroup>
                      </Card.Body>
                    </Card.Body>
                  </Card>
              </Col>
            );
          })}
        </Row>
      </section>
    </>
  );
}
