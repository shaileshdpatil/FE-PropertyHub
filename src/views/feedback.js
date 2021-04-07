import React from "react";

// reactstrap components
import {
  Card,
  CardTitle,
  CardBody,
  CardHeader,
  Row,
  Col,
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import axios from "axios";
import Table from "reactstrap/lib/Table";

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
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col xs={12}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">All feedbacks</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary font-weight-bold" style={{border: '1px solid black'}}>

                      <tr>
                        <th className="text-center font-weight-bold">Subject</th>
                        <th className="text-center font-weight-bold">Email</th>
                        <th className="text-center font-weight-bold">Feedback</th>
                        <th className="text-center font-weight-bold">Added_date</th>
                
                      </tr>

                    </thead>
                    <tbody style={{border: '1px solid black'}}>
                      {feedbackdata.map((e, key) => {
                        return (
                          <tr key={`${key}-key`} className="text-center">
                            <td className="text-center font-weight-bold" >
                              {e.subject}
                            </td>
                            <td className="text-center font-weight-bold">
                              {e.email}
                            </td>
                            <td className="text-center font-weight-bold">
                              {e.comment}
                            </td>
                            <td className="text-center font-weight-bold">
                              {e.added_date}
                            </td>
    
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
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
