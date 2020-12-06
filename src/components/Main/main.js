import React, { useState, useEffect } from "react";
import SearchResults from "../SearchResults/SearchResults";
import TableResults from "../TableResults/TableResults";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { getRandomEmployee } from "../../utils/API";

function Main() {
  const [initialEmployees, setInitialEmployees] = useState([]);
  const [employeesUpdate, setEmployeesUpdate] = useState([]);

  useEffect(() => {
    //   console.log("hit app effect!")
    getRandomEmployee()
      .then(({ data: { results } }) => setInitialEmployees(results))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <SearchResults
              employees={initialEmployees}
              setEmployees={setEmployeesUpdate}
            />
            <TableResults employees={employeesUpdate} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Main;
