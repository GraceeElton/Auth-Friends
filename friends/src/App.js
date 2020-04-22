import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./Comp/login";
import FriendsList from "../src/Comp/friendList";
import PrivateRoute from "./Comp/Private";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <header>
            <h1>Welcome to your friends!</h1>
            <Link to="/login">Log in</Link>
            <Link to="/friends"> All friends</Link>
          </header>
        </div>
      </div>
      <Switch>
        <Route path="/login" component={Login}></Route>
        <PrivateRoute
          exact
          path="/friends"
          component={FriendsList}
        ></PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
