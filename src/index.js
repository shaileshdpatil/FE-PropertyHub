import React from "react";
import ReactDOM from "react-dom";
import history from './history';
import { Router, Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.scss?v1.4.0";
import "assets/css/demo.css";
import AdminLayout from "layouts/Admin.js";
import OwnerDashboard from './layouts/owner';  
import Login from "./components/Login/Login"
import  LoginOwner from './components/OwnerPages/LoginOwner';
import  RegisterOwner from './components/OwnerPages/RegisterOwner';
import indexOwner from './OwnerSide/indexOwner' 
import feedback from './OwnerSide/feedback';
import tables from './OwnerSide/PackageTables';
import PorpertySingle from './OwnerSide/VisitorSide/PropertySingle'
import InsertProperty from './OwnerSide/InsertProperty';
import HomePage from './OwnerSide/VisitorSide/HomePage'; 
import ContactUs from './OwnerSide/VisitorSide/ContactUs'; 
import SidebarOwner from './OwnerSide/DashboardOwner/SidebarOwner'; 


ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Route path="/owner" render={(props) => <OwnerDashboard {...props} />} />
      <Route path="/Login"  component={Login} />
      <Route path="/visitor/Login-owner"  component={LoginOwner} />
      <Route path="/visitor/register-owner"  component={RegisterOwner} />
      <Route path="/owner/Front-page-owner"  component={indexOwner} />
      <Route path="/owner/Front-page-feedback"  component={feedback} />
      <Route path="/owner/owner-page-for-table"  component={tables} />
      <Route path="/owner/owner-insert-property"  component={InsertProperty} />
      <Route path="/visitor/display-property-by-single-page"  component={PorpertySingle} />
      {/* <Route path="/owner/display-Navbar"  component={HeaderNav} /> */}
      <Route path="/visitor/display-HomePage"  component={HomePage} />
      <Route path="/visitor/display-contactus"  component={ContactUs} />
      <Route path="/owner/display-sidebar"  component={SidebarOwner} />
      <Redirect to="/visitor/display-HomePage" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
