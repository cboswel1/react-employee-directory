import React, { useState, useEffect } from "react";
import "./TableResults.css";

const TableResults = ({ employees }) => {
  const [randomEmployee, setRandomEmployee] = useState([]);

  useEffect(() => setRandomEmployee(employees), [employees]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Hello from Table</th>
          </tr>
        </thead>
      </table>
    </div>
  )
  }

  export default TableResults;