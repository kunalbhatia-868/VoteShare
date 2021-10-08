import React, { useEffect, useState } from "react";
import "../TopPolls/TopPolls.css";
import { Card } from "react-bootstrap";

export default function TopPolls() {
  const [data, setData] = useState([]);
  const [currChoices,setCurrChoices]=useState([]);

  useEffect(() => {
    fetch("/api/questions")
      .then((response) => response.json())
      .then((questions) => {
        const content = questions.map((question) => {
          const choices=question.choice_set.all()
          console.log(choices)
          
          return question;
        });
        console.log(content)
        setData(content);
      })
      .catch((error) => console.log(error));
  }, []);

  function getCurrentChoices(question_id) {
    const url="/api/choices/"+question_id;

    fetch(url)
    .then(response=>{
      if (response.ok) {
        return response.json()
      }
    })
    .then(choices=>{
      const choice_content=choices.map((choice)=>{
        return choice;
      });
      setCurrChoices(choice_content)
    })
    .catch((error) => console.log(error));
  }

  return (
    <div>
      <header className="page-title">
        <h1>Top Polls</h1>
      </header>
      <section className="question_list">
        {data.map((question) => {
          // getCurrentChoices(question.id) 
          // console.log(currChoices)
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
