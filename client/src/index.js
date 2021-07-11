import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles/styles.sass";

import { store } from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Pages/Home/Home.jsx";
import ViewTicket from "./Pages/Tickets/ViewTicket.jsx";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/ticket/:id" component={ViewTicket} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("app")
);
