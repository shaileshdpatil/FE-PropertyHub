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
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import axios from "axios";


class RegularTables extends React.Component {

  state = {
    dealData: []
  }

  componentDidMount = () => {
   this.getDealData();
  }

  getDealData = () => {
    axios.get('http://localhost:3000/api/dealDisplay',
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      // console.log(response.data);
      this.setState({dealData: response.data})
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
                    <thead className="text-primary font-weight-bold">
                     
                      <tr>
                        <th className="text-left font-weight-bold">Owner Name</th>
                        <th className="text-left font-weight-bold">Customer Name</th>
                        <th className="text-left font-weight-bold">Total Deal amount</th>
                        <th className="text-left font-weight-bold">Phone</th>
                        <th className="text-left font-weight-bold">Deal Date</th>
                      </tr>
             
                    </thead>
                    <tbody>
                      {dealData.map((e, key) => {
                        return (
                          <tr key={`${key}-key`} className="text-left">
                           <td className="text-left font-weight-bold">
                              {e.OwnerName}
                            </td>
                            <td className="text-left font-weight-bold">
                              {e.customerName}
                            </td>
                            <td className="text-left font-weight-bold">
                              {e.amount}
                            </td>
                            <td className="text-right font-weight-bold">
                              {e.phone}
                            </td>
                            <td className="text-right font-weight-bold">
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

export default RegularTables;
