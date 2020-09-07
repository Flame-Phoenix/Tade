import React from 'react';
import Home from "./Home/Home.js";
import "./App.css";
import Contact from "./Contact/contact.js";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";


const MyRoute = withRouter(({ location }) => {

  return (
    <div>
      <Route path="/" component={Home} />
      <Route path="/contact" component={Contact} />
    </div>

  );

});


function App() {
  return (
    <Router>
      <MyRoute />
    </Router>

  );
}

export default App;
