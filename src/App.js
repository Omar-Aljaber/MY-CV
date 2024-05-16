import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Impressum from "./views/Impressum";

import "./style/index.scss";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/impressum" component={Impressum} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
