import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/main";

import "./App.css";

function App() {
  return (
    <div>
      <React.StrictMode>
        <Header />
        <Main />
      </React.StrictMode>
    </div>
  );
}

export default App;
