import React from "react";
import Main from "../Main/main"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row' 
import Col from 'react-bootstrap/Col'

function Wrapper() {
  return (
    <div>
    <Container fluid>
      <Row>
        <Col>
            <Main />
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Wrapper;