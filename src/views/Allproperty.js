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
import { Link } from 'react-router-dom';


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

    const styleMargin = {
      bordersHead: {
        border: '1px solid black',
        backgroundColor: '#AFDCEC'
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
                  <CardTitle tag="h4" className="font-weight-bold">All Propertys</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary font-weight-bold" style={{ border: '1px solid black' }}>

                      <tr >
                        <th className="text-center font-weight-bold" style={styleMargin.bordersHead}>Owner Name</th>
                        <th className="text-center font-weight-bold" style={styleMargin.bordersHead}>Property Name</th>
                        <th className="text-center font-weight-bold" style={styleMargin.bordersHead}>Property Address</th>
                        <th className="text-center font-weight-bold" style={styleMargin.bordersHead}>Amount</th>
                        <th className="text-center font-weight-bold" style={styleMargin.bordersHead}>City</th>
                        <th className="text-center font-weight-bold" style={styleMargin.bordersHead}>Category</th>
                        <th className="text-center font-weight-bold" style={styleMargin.bordersHead}>action</th>
                      </tr>

                    </thead>
                    <tbody style={{ border: '1px solid black' }}>
                      {dealData.map((e, key) => {
                        return (
                          <tr key={`${key}-key`} className="text-left">
                            <td className="text-center font-weight-bold" style={styleMargin.borders}>
                              {e.OwnerName}
                            </td>
                            <td className="text-center font-weight-bold" style={styleMargin.borders}>
                              <p style={{textTransform:'capitalize'}}>{e.PropertyName}</p>
                              <img style={{ height: '100px' }} src={e.Images?.url} alt="patil1" />
                            </td>
                            <td className="text-center font-weight-bold" style={styleMargin.borders}>
                              {e.FullAddress}
                            </td>
                            <td className="text-center font-weight-bold" style={styleMargin.borders}>
                              {e.Price}
                            </td>
                            <td className="text-center font-weight-bold" style={styleMargin.borders}>
                              {e.City}
                            </td>
                            <td className="text-center font-weight-bold" style={styleMargin.borders}>
                              {e.category}
                            </td>
                            <td className="text-center" style={styleMargin.borders}>
                              {/* <Link to={`/visitor/display-property-by-single-page/${e._id}`}>
                                <Button className="btn-primary" >View as visitor</Button>
                              </Link> */}
                              <Link to={`/admin/propertyDetail/${e._id}`} >
                                <Button className="btn-secondary" style={{marginTop:'5px'}}>View</Button>
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

export default Allpropertys;
