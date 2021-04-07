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


class Allpropertys extends React.Component {

  state = {
    dealData: []
  }

  componentDidMount = () => {
    this.getDealData();
  }

  getDealData = () => {
    axios.get('http://localhost:3000/api/propertyDisplay',
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
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
                  <CardTitle tag="h4" className="font-weight-bold">All Propertys</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary font-weight-bold" style={{ border: '1px solid black' }}>

                      <tr>
                        <th className="text-center font-weight-bold">Property Name</th>
                        <th className="text-center font-weight-bold">Property Type</th>
                        <th className="text-center font-weight-bold">Amount</th>
                        <th className="text-center font-weight-bold">action</th>
                      </tr>

                    </thead>
                    <tbody style={{ border: '1px solid black' }}>
                      {dealData.map((e, key) => {
                        return (
                          <tr key={`${key}-key`} className="text-left">
                            <td className="text-center font-weight-bold">
                              {e.name}
                            </td>
                            <td className="text-center font-weight-bold">
                              {e.type}
                            </td>
                            <td className="text-center font-weight-bold">
                              {e.amount}
                            </td>
                            <td className="text-center">
                              <Button className="btn-success">View</Button>
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

export default Allpropertys;
