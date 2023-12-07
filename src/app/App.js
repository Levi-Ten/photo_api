import React from "react";
import { Context } from "../context/Context";
import Home from "../pages/Home";

function App() {
  return (
    <Context>
      <Home />
    </Context>
  );
}

export default App;
