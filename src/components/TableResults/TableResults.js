import React from "react";
// import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";
import "./TableResults.css";

// const TableResults = ({ employees }) => {
//   console.log(employees);
//   const [randomEmployee, setRandomEmployee] = useState([]);

//   useEffect(() => setRandomEmployee(employees), [employees]);

//   return (
//     <div>
//         <table responsive class="table" cellspacing="0" width="100%">
//           <thead>
//             <tr>
//               {/* sort employees https://www.smashingmagazine.com/2020/03/sortable-tables-react/ */}
//               <th class="th-sm" onClick={employees.sortColumn}>Last</th>
//               <th class="th-sm">First</th>
//               <th class="th-sm">Email</th>
//               <th class="th-sm">Phone</th>
//               <th class="th-sm">City</th>
//               <th class="th-sm">State</th>
//               <th class="th-sm">Postcode</th>
//               <th class="th-sm">Photo</th>
//             </tr>
//           </thead>
//           <tbody>
//             {randomEmployee.map(
//               ({
//                 location: { city, state, postcode },
//                 picture: { thumbnail },
//                 phone,
//                 email,
//                 name: { first, last },
//               }) => (
//                 // id is social security number, not a secure unique id. Used email as unique
//                 <tr key={email}>
//                   <td>{last}</td>
//                   <td>{first}</td>
//                   <td><a href={"mailto:" + email} target="_blank" rel="noreferrer">{email}</a></td>
//                   <td>{phone}</td>
//                   <td>{city}</td>
//                   <td>{state}</td>
//                   <td>{postcode}</td>
//                   <td>
//                     <img src={thumbnail} alt=" employees of company" />
//                   </td>
//                 </tr>
//               )
//             )}
//           </tbody>
//         </table>
//     </div>
//   );
// };

// export default TableResults;

function Table(props) {
  return (
    <div>
      <table responsive class="table" cellspacing="0" width="100%">
        <thead>
          <tr>
            {/* sort employees https://www.smashingmagazine.com/2020/03/sortable-tables-react/ */}
            <th class="th-sm"><button name="first" onClick={props.sort}>Last </button></th>
            <th class="th-sm"><button onClick={props.sort}>First</button></th>
            <th class="th-sm"><button onClick={props.sort}>Email</button></th>
            <th class="th-sm"><button onClick={props.sort}>Phone</button></th>
            <th class="th-sm"><button onClick={props.sort}>City</button></th>
            <th class="th-sm"><button onClick={props.sort}>State</button></th>
            <th class="th-sm"><button onClick={props.sort}>Postcode</button></th>
            <th class="th-sm"><button onClick={props.sort}>Photo</button></th>
          </tr>
        </thead>
        <tbody>
          {props.employees.map(employee => (
            // id is social security number, not a secure unique id. Used email as unique
            <tr key={employee.email}>
              <td>{employee.name.last}</td>
              <td>{employee.name.first}</td>
              <td>
                <a href={"mailto:" + employee.email} target="_blank" rel="noreferrer">
                  {employee.email}
                </a>
              </td>
              <td>{employee.phone}</td>
              <td>{employee.location.city}</td>
              <td>{employee.location.state}</td>
              <td>{employee.location.postcode}</td>
              <td>
                <img src={employee.picture.thumbnail} alt=" employees of company" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
