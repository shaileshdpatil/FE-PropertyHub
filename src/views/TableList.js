import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table,
  Row,
  Col,
  Button
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import axios from "axios";
import {Link} from 'react-router-dom';



class RegularTables extends React.Component {

  state = {
    dealData: []
  }

  componentDidMount = () => {
    this.getDealData();
  }

  getDealData = () => {
    axios.get(' http://localhost:3000/api/dealdisplayall/patil',
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        // console.log(response.data);
        this.setState({ dealData: response.data })
      });
  }

  render() {
    const { dealData } = this.state;
    return (
      <>
        <PanelHeader size="sm" />
        <div className="content ">
          <Row>
            <Col xs={12}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4" className="font-weight-bold">All Propertys Deals</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary font-weight-bold" style={{ border: '1px solid black' }}>

                      <tr>
                        <th className="text-center font-weight-bold">Owner Name</th>
                        <th className="text-center font-weight-bold">Customer email</th>
                        <th className="text-center font-weight-bold">Total Deal amount</th>
                        <th className="text-center font-weight-bold">Deal Status</th>
                        <th className="text-center font-weight-bold">Deal Date</th>
                        <th className="text-center font-weight-bold">Property</th>
                      </tr>

                    </thead>
                    <tbody style={{ border: '1px solid black' }}>
                      {dealData.map((e, key) => {
                        return (
                          <tr key={`${key}-key`} className="text-left">
                            <td className="text-center font-weight-bold">
                              {e.ownerName}
                            </td>
                            <td className="text-center font-weight-bold">
                              {e.userEmail}
                            </td>
                            <td className="text-center font-weight-bold">
                              {e.amount}
                            </td>
                            <td className="text-center font-weight-bold" >
                              {e.deal}
                            </td>
                            <td className="text-center font-weight-bold">
                              {e.added_date}
                            </td>
                            <td className="text-center font-weight-bold" >
                              <Link to={`/admin/propertyDetail/${e.propertyId}`}>
                                <Button>View</Button>
                              </Link>
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

export default RegularTables;
