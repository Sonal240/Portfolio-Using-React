import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import LandingComp from "../Components/Home";
import AboutMe from "../Components/About";
import MyPro from "../Components/Projects";
import ContactMe from "../Components/Contact";


class Router extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div>
          <Switch>
            <Route path="/" component={LandingComp} exact />
            <Route path="/About" component={AboutMe} exact />
            <Route path="/Projects" component={MyPro} exact />
            <Route path="/Contact" component={ContactMe} exact />
            <Route path="/*" component={LandingComp} exact />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default Router;