import React from "react";
import "./style.css";
import Finder from "./components/Finder"

function App() {
  return (
    <div className="container">
      <h1 className="header">Reveal your GitHub ID</h1>
      <Finder />
    </div>
  );
}

export default App;