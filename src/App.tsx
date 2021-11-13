import React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" element={<Home />} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
