import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css"

function Header() {

  return (
    <div>
      <Jumbotron fluid >
          <Container>
        <h1>Employee Directory</h1>
        <p>
          A simple, lightweight Employee Filtering Service
        </p>
        </Container>
      </Jumbotron>
    </div>
  );
}


export default Header;
