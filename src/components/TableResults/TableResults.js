import React, { useState, useEffect } from "react";
// import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";
import "./TableResults.css";



const TableResults = ({ employees }) => {
  console.log(employees);
  const [randomEmployee, setRandomEmployee] = useState([]);

  useEffect(() => setRandomEmployee(employees), [employees]);

  return (
    <div>
        <table responsive class="table" cellspacing="0" width="100%">
          <thead>
            <tr>
              {/* sort employees https://www.smashingmagazine.com/2020/03/sortable-tables-react/ */}
              <th class="th-sm">Last</th>
              <th class="th-sm">First</th>
              <th class="th-sm">Email</th>
              <th class="th-sm">Phone</th>
              <th class="th-sm">City</th>
              <th class="th-sm">State</th>
              <th class="th-sm">Postcode</th>
              <th class="th-sm">Photo</th>
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
              }) => (
                // id is social security number, not a secure unique id. Used email as unique 
                <tr key={email}>
                  <td>{last}</td>
                  <td>{first}</td>
                  <td><a href={"mailto:" + email} target="_blank" rel="noreferrer">{email}</a></td>
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
