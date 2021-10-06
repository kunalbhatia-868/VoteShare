import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Image } from "react-bootstrap";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <Container className="wrapper">
      <div className="left">
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
        <Button> Create Poll</Button>
        <Button className="mx-3">View Top Polls</Button>
      </div>
      <div className="right p-5">
        <Image src="https://picsum.photos/400/400" fluid />
      </div>
    </Container>
  );
}
