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
import axios from "axios";

class Notifications extends React.Component {
  state = {
    feedbackdata: []
  }

  componentDidMount = () => {
    this.getFeedbackdata();
  }

  getFeedbackdata = () => {
    axios.get('http://localhost:3000/api/feedbackDisplay',
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        // console.log(response.data);
        this.setState({ feedbackdata: response.data })
      });
  }
  render() {
    const { feedbackdata } = this.state;
    return (
      <>
        <PanelHeader
          content={
            <div className="header text-center">
              <h2 className="title">Notifications</h2>
              <p className="category">
                Please Checkout{" "}
                <a
                  href="http://localhost:3000/admin/notifications"
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
                  {feedbackdata.map((e, key) => {

                    return (
                      <Alert color="info">
                        <span>{e.comment}</span>
                      </Alert>
                    )
                  })}
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
