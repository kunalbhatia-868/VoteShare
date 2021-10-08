import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button} from "react-bootstrap";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <Container className="wrapper">
      <div className="left p-5">
        <h1>VoteShare- Landing Quote</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          veritatis odit, ullam corrupti rerum quo. Quas ex consequuntur
          deserunt quaerat illum, corporis amet, ab vel fugiat quo, cum atque.
          Sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
          beatae aperiam rerum eligendi obcaecati excepturi, dolor esse
          repellendus, incidunt quae nisi doloremque reiciendis, fugit dolore
          veniam tenetur. Reprehenderit, voluptatibus sit.
        </p>
        <Button href = "/create_poll"> Create Poll</Button>
        <Button className="mx-3" href = "/polls">View Top Polls</Button>
      </div>
      
    </Container>
  );
}
