import React from "react";
import ReactDOM from "react-dom";
import history from './history';
import { Router, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.scss?v1.4.0";
import "assets/css/demo.css";
import AdminLayout from "layouts/Admin.js";
import Login from "./components/Login/Login"
import  LoginOwner from './components/OwnerPages/LoginOwner';
import  RegisterOwner from './components/OwnerPages/RegisterOwner';
import indexOwner from './OwnerSide/indexOwner' 
import feedback from './OwnerSide/feedback';

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Route path="/Login"  component={Login} />
      <Route path="/owner/Login-owner"  component={LoginOwner} />
      <Route path="/owner/register-owner"  component={RegisterOwner} />
      <Route path="/owner/Front-page-owner"  component={indexOwner} />
      <Route path="/owner/Front-page-feedback"  component={feedback} />
      <Redirect to="/admin/dashboard" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
