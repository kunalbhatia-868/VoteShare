import React, { useEffect, useState } from "react";
import "../TopPolls/TopPolls.css";

export default function TopPolls() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("/api/questions")
      .then((response) => response.json())
      .then((questions) => {
        const content = questions.map((question) => {
          return question.content;
        });
        setQuestions(content);
        console.log(questions);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <header className="page-title">
        <h1>Top Polls</h1>
      </header>
      <section className="question_list">
          
      </section>
    </div>
  );
}
