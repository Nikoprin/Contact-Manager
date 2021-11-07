import React from "react";
import "./App.css";
import Contacts from "./Components/ContactList/Contacts";
import ContactProfile from "./Components/ContactProfile/ContactProfile";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/Contacts" className="mainLink">Contact Manager</Link>
        <Switch>
          <Route path="/Contacts">
            <Contacts/>
          </Route>
          <Route exact path="/ContactProfile/:fullName/:email">
            <ContactProfile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
