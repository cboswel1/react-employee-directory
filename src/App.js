import React, { useState, useEffect } from "react";
import TableResults from "./components/TableResults/TableResults";
import SearchResults from "./components/SearchResults/SearchResults";
import { getRandomEmployee } from "./utils/API";
import "./App.css";

function App() {
  const [initialEmployees, setInitialEmployees] = useState([]);
  const [employeesUpdate, setEmployeesUpdate] = useState([]);

  useEffect(() => {
    getRandomEmployee()
      .then(({ data: { results } }) => setInitialEmployees( results ))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>Employee Directory</h1>
      <SearchResults employees={initialEmployees} setEmployees={setEmployeesUpdate} />
      <TableResults employees={employeesUpdate} />
    </div>
  );
}

export default App;
