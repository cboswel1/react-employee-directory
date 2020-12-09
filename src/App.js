import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/main";

import "./App.css";
// import SortEmployeeData from "./components/ SortTableResults/SortTableResults";

function App() {
  return (
    <div>
      <React.StrictMode>
        <Header />
        {/* <SortEmployeeData /> */}
        <Main />
      </React.StrictMode>
    </div>
  );
}

export default App;
