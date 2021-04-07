import React from "react";
import ReactDOM from "react-dom";
import history from './history';
import { Router, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.scss?v1.4.0";
import "assets/css/demo.css";
import AdminLayout from "layouts/Admin.js";
import Login from "./components/Login/Login"
 
ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Route path="/Login"  component={Login} />
      <Redirect to="/admin/dashboard" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
