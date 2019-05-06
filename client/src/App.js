import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./components/pages/Books";
import GoogleBooksList from "./components/pages/GoogleBooksList"
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Jumbotron from "./components/pages/Jumbotron";
import SearchForm from "./components/pages/SearchForm";

function App() {
  return (

    // handleFormSubmit = event => {
    //   // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    //   event.preventDefault();
    //   GoogleBooksAPI.getbooks(this.state.query)
    //     .then(res => this.setState({ googlebooks: res.data }))
    //     .catch(err => console.log(err));
    <Router>
      <div>
        <Nav />
        {/* <Jumbotron>
          <h1>(React) Google Book Search</h1>
          <h2>Search for and Save Books of Interest</h2>
        </Jumbotron> */}
        {/* <SearchForm /> */}
          <Switch>
          <Route exact path="/" component={Books} />
          {/* <Route exact path="/books" component={Books} /> */}
          {/* <Route exact path="/books/:id" component={Detail} /> */}
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );


};


export default App;
