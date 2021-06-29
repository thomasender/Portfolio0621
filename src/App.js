import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Components
import Homepage from "./components/Homepage";

//Pages
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Error from "./pages/Error";

const App = () => {
  return (
    <Router>
      <Switch>
        {" "}
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
