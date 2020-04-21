import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./Comp/login";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <header>
            <h1>Welcome to your friends!</h1>
            <Link to="/login">Log in</Link>
          </header>
        </div>
      </div>
      <Switch>
        <Route path="/login" component={Login}></Route>
      </Switch>
    </Router>
  );
}

export default App;
