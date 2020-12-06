import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./Header.css"

function Header() {

  return (
    <div>
      <Jumbotron primary>
        <h1>Employee Directory</h1>
        <p>
          A simple, lightweight Employee Filtering Service
        </p>
        
      </Jumbotron>
    </div>
  );
}


export default Header;
