import React from "react";
import { Switch, Route } from "react-router-dom";

import Sidebar from "./components/sidebar";
import Skills from "./components/skills";
import About from "./components/about";

function App() {
  return (
    <div>
      <Sidebar />
      <div>
        <Switch>
          <Route path="/personal-page" component={About} />
          <Route path="/skills" component={Skills} />
          <Route path="/" component={About} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
