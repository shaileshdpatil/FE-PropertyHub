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

class RegularTables extends React.Component {
  state = {
    owenerData: []
  }

  componentDidMount = () => {
    this.getOwernerData();
  }

  deleteData = () => {
    axios.delete("localhost:3000/api/deleteOwner").then(
      alert("Successfully deleted")
    )
  }

  getOwernerData = () => {
    axios.get('http://localhost:3000/api/ownerDisplay',
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        // console.log(response.data);
        this.setState({ owenerData: response.data })
      });
  }
  render() {

    const { owenerData } = this.state;

    return (
      <>
        <PanelHeader size="sm" />
        <div className="content ">
          <Row>
            <Col xs={12}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4" className="font-weight-bold">All Propertys owners</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary font-weight-bold" style={{border: '1px solid black'}}>
                      <tr>
                        <th className="text-center font-weight-bold">Name</th>
                        <th className="text-center font-weight-bold">Email</th>
                        <th className="text-center font-weight-bold">Gender</th>
                        <th className="text-center font-weight-bold">Phone No</th>
                        <th className="text-center font-weight-bold">Action</th>
                      </tr>
                    </thead>
                    <tbody style={{border: '1px solid black'}}>
                      {owenerData.map((e, key) => {
                        return (
                          <tr key={`${key}-key`} className="text-left">
                            <td className="text-center font-weight-bold">
                              {e.name}
                            </td>
                            <td className="text-center font-weight-bold">
                              {e.email}
                            </td>
                            <td className="text-center font-weight-bold">
                              {e.gender}
                            </td>
                            <td className="text-center font-weight-bold">
                              {e.phone}
                            </td>
                            <td className="text-center">
                              <Button className="btn-danger" onClick={this.deleteData}>Accept</Button>
                              <Button className="btn-danger" onClick={this.deleteData}>Reject</Button>
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