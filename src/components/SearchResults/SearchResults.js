import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form'
import "./SearchResults.css";


const SearchResults = ({ employees, setEmployees }) => {
  const [employeeValue, setEmployeeValue] = useState("");

  useEffect(() => {
      // console.log("hit useEffect");
    const employeeResults =
      employeeValue === ""
        ? employees
        : employees.filter(({ name: { last } }) =>
            last.toLowerCase().indexOf(employeeValue.toLowerCase()) >= 0
          );
    setEmployees(employeeResults);
  }, [employees, employeeValue, setEmployees, setEmployeeValue]);

  return (
    <Form>
      <input
        placeholder="Last Name"
        name="name"
        type="search"
        value={employeeValue}
        onChange={event => setEmployeeValue(event.target.value)}
      />
      {/* <button type="submit">Search</button> */}
    </Form>
  );
};

export default SearchResults;
