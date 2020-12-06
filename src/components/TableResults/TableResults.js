import React, { useState, useEffect } from "react";
// import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";
import "./TableResults.css";

const TableResults = ({ employees }) => {

  console.log(employees);
  const [randomEmployee, setRandomEmployee] = useState([]);

  useEffect(() => setRandomEmployee(employees), [employees]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">City</th>
            <th scope="col">State</th>
            <th scope="col">Postcode</th>
            <th scope="col">Picture</th>
          </tr>
        </thead>
        <tbody>
          {randomEmployee.map(
            ({
              location: { city, state, postcode },
              picture: { thumbnail },
              phone,
              email,
              name: { first, last },
              id: { value },
            }) => (
              <tr key={value}>
                <td>{first}</td>
                <td>{last}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{city}</td>
                <td>{state}</td>
                <td>{postcode}</td>
                <td>
                  <img src={thumbnail} alt=" employees of company" />
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableResults;
