import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./components/pages/Books";
import GoogleBooksList from "./components/pages/GoogleBooksList"
import Nav from "./components/Nav";
import Jumbotron from "./components/pages/Jumbotron";
import SearchForm from "./components/pages/SearchForm";

function App() {
  return (

    <Router>
      <div>
        <Nav />
          <Switch>
          <Route exact path="/" component={Books} />
        </Switch>
      </div>
    </Router>
  );


};


export default App;
