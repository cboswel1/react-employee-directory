import React, { useState, useEffect } from "react";

const SearchResults = ({ employees, setEmployees }) => {
  const [employeeValue, setEmployeeValue] = useState("");

  useEffect(() => {
      console.log("hit useEffect");
    const employeeResults =
      employeeValue === ""
        ? employees
        : employees.filter(({ name: { last } }) =>
            last.toLowerCase().indexOf(employeeValue.toLowerCase())
          );
    setEmployees(employeeResults);
  }, [employees, employeeValue, setEmployeeValue, setEmployees]);

  return (
    <form>
      <input
        placeholder="Last Name"
        name="name"
        type="search"
        value={employeeValue}
        onChange={event => setEmployeeValue(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchResults;
