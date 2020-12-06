import React, {useState, useEffect} from "react";
import SearchResults from "../SearchResults/SearchResults";
import TableResults from "../TableResults/TableResults";
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
    
        <SearchResults
          employees={initialEmployees}
          setEmployees={setEmployeesUpdate}
        />
        <TableResults employees={employeesUpdate} />
      
    </div>
  );
}


export default Main;