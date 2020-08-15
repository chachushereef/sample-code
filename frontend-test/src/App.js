import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import ViewLogin from "./components/login/viewLogin";
import ViewRegister from "./components/register/viewRegister";
import ViewHome from "./components/viewHome";

function App() {
  return (
    <Router>
      <Route path="/" exact component={ViewHome} />
      <Route path="/register" exact component={ViewRegister} />
      <Route path="/login" exact component={ViewLogin} />
      <Route path="/home" exact component={ViewHome} />
    </Router>
  );
}

export default App;
