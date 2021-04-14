import React from "react";

// reactstrap components
import {
  Card,
  CardTitle,
  CardBody,
  CardHeader,
  Row,
  Col,
  Button
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

    const styleMargin = {
      bordersHead: {
        border: '1px solid black',
        backgroundColor:'#AFDCEC'
      },
      borders: {
        border: '1px solid black'
      }
    }
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
                        <th className="text-center font-weight-bold" style={styleMargin.bordersHead}>Name</th>
                        <th className="text-center font-weight-bold" style={styleMargin.bordersHead}>Email</th>
                        <th className="text-center font-weight-bold" style={styleMargin.bordersHead}>Feedback</th>
                        <th className="text-center font-weight-bold" style={styleMargin.bordersHead}>Date of feedback</th>
                        <th className="text-center font-weight-bold" style={styleMargin.bordersHead}>Actions</th>
                
                      </tr>

                    </thead>
                    <tbody style={{border: '1px solid black'}}>
                      {feedbackdata.map((e, key) => {
                        return (
                          <tr key={`${key}-key`} className="text-center">
                            <td className="text-center font-weight-bold" style={styleMargin.borders}>
                              {e.name}
                            </td>
                            <td className="text-center font-weight-bold" style={styleMargin.borders}>
                              {e.email}
                            </td>
                            <td className="text-center font-weight-bold" style={styleMargin.borders}>
                              {e.message}
                            </td>
                            <td className="text-center font-weight-bold" style={styleMargin.borders}>
                              {e.added_date}
                            </td>
                            <td className="text-center font-weight-bold" style={styleMargin.borders}>
                            <Button type="submit" className="btn btn-success" style={{marginRight:'5px'}}>Accept</Button>
                            <Button type="submit" className="btn btn-danger" style={{marginRight:'5px'}}>Reject</Button>
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
