import React from "react";
import ReactDOM from "react-dom";
import history from './history';
import { Router, Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.scss?v1.4.0";
import "assets/css/demo.css";
import AdminLayout from "layouts/Admin.js";
import OwnerDashboard from 'layouts/owner.js';
import Login from "./components/Login/Login"
import LoginOwner from './components/OwnerPages/LoginOwner';
import Single from './components/OwnerPages/Wait';
import RegisterOwner from './components/OwnerPages/RegisterOwner';
import feedback from './OwnerSide/feedback';
import Tables from './OwnerSide/PackageTables';
import PorpertySingle from './OwnerSide/VisitorSide/PropertySingle'
import HomePage from './OwnerSide/VisitorSide/HomePage';
import ContactUs from './OwnerSide/VisitorSide/ContactUs';
import ListingProperty from './OwnerSide/VisitorSide/ListingProperty';
import ListingPropertyData from './OwnerSide/VisitorSide/ListingPropertyData';
import ListingData from './OwnerSide/VisitorSide/ListingData';
import AboutUs from './OwnerSide/VisitorSide/AboutUs';
import LoginUser from './OwnerSide/VisitorSide/userlogin';
import userregist from './OwnerSide/VisitorSide/userregist';
import Payment from './OwnerSide/VisitorSide/Payment';
import Response from './OwnerSide/VisitorSide/Response';

ReactDOM.render(
  <Router history={history}>
    <Switch>
    <Route path="/admin" render={(props) => <AdminLayout {...props} />}  />

      <Route path="/owner" component={OwnerDashboard} />

      <Route path="/owner/Front-page-feedback" component={feedback} />
      <Route path="/owner/owner-page-for-table" component={Tables} />
      <Route path="/visitor/owner-wait/hours" component={Single} />
      <Route path={`/visitor/Regisetered-payment/:id`} component={Payment} />

      <Route path="/Login" component={Login} />

      <Route path="/visitor/Login-owner" component={LoginOwner} />
      <Route path="/visitor/register-owner" component={RegisterOwner} />

      <Route path="/visitor/Login-user" component={LoginUser} />
      <Route path="/visitor/Regiset-user" component={userregist} />
      <Route path="/visitor/Regiset-user" component={userregist} />
      <Route path="/visitor/response-from-owner" component={Response} />

      <Route path={`/visitor/display-property-by-single-page/:id`} component={PorpertySingle} />

      {/* <Route path="/owner/display-Navbar"  component={HeaderNav} /> */}
      <Route path="/visitor/display-HomePage" component={HomePage} />
      <Route path="/visitor/display-contactus" component={ContactUs} />
      <Route path="/visitor/display-ListingProperty" component={ListingProperty} />
      <Route path="/visitor/display-ListingPropertyData/:name" component={ListingPropertyData} />
      <Route path="/visitor/display-ListingData/:name" component={ListingData} />
      <Route path="/visitor/display-about" component={AboutUs} />
      <Redirect to="/visitor/display-HomePage" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
