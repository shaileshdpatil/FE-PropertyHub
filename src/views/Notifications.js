/*!

=========================================================
* Now UI Dashboard React - v1.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";

// reactstrap components
import {
  Alert,
  Card,
  CardTitle,
  CardBody,
  CardHeader,
  Row,
  Col,
  // Button,
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
    this.onDismiss = this.onDismiss.bind(this);
    this.notify = this.notify.bind(this);
  }
  onDismiss() {}
  notify(place) {
    var color = Math.floor(Math.random() * 5 + 1);
    var type;
    switch (color) {
      case 1:
        type = "primary";
        break;
      case 2:
        type = "success";
        break;
      case 3:
        type = "danger";
        break;
      case 4:
        type = "warning";
        break;
      case 5:
        type = "info";
        break;
      default:
        break;
    }
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            Welcome to <b>Now UI Dashboard React</b> - a beautiful freebie for
            every web developer.
          </div>
        </div>
      ),
      type: type,
      icon: "now-ui-icons ui-1_bell-53",
      autoDismiss: 7,
    };
    this.refs.notificationAlert.notificationAlert(options);
  }
  render() {
    return (
      <>
        <PanelHeader
          content={
            <div className="header text-center">
              <h2 className="title">Notifications</h2>
              <p className="category">
                Please Checkout{" "}
                <a
                  href="https://github.com/creativetimofficial/react-notification-alert"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  All Feedback from the customers and owners
                </a>
                .
              </p>
            </div>
          }
        />
        <div className="content">
          <NotificationAlert ref="notificationAlert" />
          <Row>
            <Col md={12} xs={12}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">All Feedbacks</CardTitle>
                </CardHeader>
                <CardBody>
                  <Alert color="info">
                    <span>This is a plain notification</span>
                  </Alert>
                  <Alert color="info">
                    <span>This is a plain notification</span>
                  </Alert>
                  <Alert color="info">
                    <span>This is a plain notification</span>
                  </Alert>
                  <Alert color="info">
                    <span>This is a plain notification</span>
                  </Alert>
                </CardBody>
              </Card>
            </Col>
            
                      </Row>
        </div>
      </>
    );
  }
}

export default Notifications;
