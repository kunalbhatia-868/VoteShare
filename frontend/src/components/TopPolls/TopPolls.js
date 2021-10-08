import React, { useEffect, useState } from "react";
import "../TopPolls/TopPolls.css";
import { Card } from "react-bootstrap";

export default function TopPolls() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/questions")
      .then((response) => response.json())
      .then((questions) => {
        const content = questions.map((question) => {
          return question;
        });
        setData(content);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <header className="page-title">
        <h1>Top Polls</h1>
      </header>
      <section className="question_list">
        {data.map((question) => {
          return (
            <div className="card-question" key={question.id}>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>{question.content}</Card.Title>
                  <hr />
                  <Card.Text>choices</Card.Text>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </section>
    </div>
  );
}
