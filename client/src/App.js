import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./components/pages/Books";
import Saved from "./components/pages/Saved";
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
          <Route exact path="/books" component={Books}></Route>
          <Route exact path="/saved" component={Saved}></Route>
        </Switch>
      </div>
    </Router>
  );


};


export default App;
