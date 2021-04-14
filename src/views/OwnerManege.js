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

  activateOwner = (id) => {
    axios.put(`http://localhost:3000/api/updateOwner/${id}/status`)
      .then(
        alert("successfullt Activted"),
        window.location.reload(false),
        this.getOwernerData()
      ).catch((res) => {
        console.log("activation failed")
      })
  }

  deActivateOwner = (id) => {

    axios.put(`http://localhost:3000/api/deactivateOwner/${id}/status`)
      .then(
        alert("successfullt deActivted"),
        window.location.reload(false),
        this.getOwernerData()
      ).catch((res) => {
        console.log("activation failed")
      })
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
        <div className="content ">
          <Row>
            <Col xs={12}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4" className="font-weight-bold">All Propertys owners</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary font-weight-bold" style={{ border: '1px solid black' }}>
                      <tr>
                        <th className="text-center font-weight-bold" style={styleMargin.bordersHead}>Name</th>
                        <th className="text-center font-weight-bold" style={styleMargin.bordersHead}>Email</th>
                        {/* <th className="text-center font-weight-bold">Gender</th> */}
                        <th className="text-center font-weight-bold" style={styleMargin.bordersHead}>Phone No</th>
                        <th className="text-center font-weight-bold" style={styleMargin.bordersHead}>Action</th>
                      </tr>
                    </thead>
                    <tbody style={{ border: '1px solid black' }}>
                      {owenerData.map((e, key) => {
                        return (
                          <tr key={`${key}-key`} className="text-left">
                            <td className="text-center font-weight-bold" style={styleMargin.borders}>
                              {e.names}
                            </td>
                            <td className="text-center font-weight-bold" style={styleMargin.borders}>
                              {e.email}
                            </td>
                            <td className="text-center font-weight-bold" style={styleMargin.borders}>
                              {e.phone}
                            </td>
                            <td className="text-center" style={{ display: "flex", justifyContent: 'center',border:'1px solid black' }}>
                              {
                                e.status
                                  ? <p style={{ fontWeight: 'bold', marginRight: '12px' }}>Already verified</p>
                                  : <Button type="submit" className="btn btn-success" onClick={() => this.activateOwner(e._id)} style={{marginRight:'23px'}}>Accept</Button>
                              }
                              <Button type="submit" className="btn btn-danger" onClick={() => this.deActivateOwner(e._id)} style={{ marginRight: '10px' }}>Reject</Button>
                              



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