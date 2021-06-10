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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'universal-cookie';
const cookies =  new Cookies();

const ownerID = cookies.get('ownerID',{path:'/owner'});
// console.log(ownerID);

class inquiry extends React.Component {
  state = {
    inquirydata: []
  }
  
  componentDidMount = () => {
    this.getInquirydata();
  }
  
  getInquirydata = () => {
    // console.log(`http://localhost:3000/api/propertyinqueryForOwner/${ownerID}`)
    axios.get(`http://localhost:3000/api/propertyinqueryForOwner/${ownerID}`,
    {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        console.log('====>',response.data);
        this.setState({ inquirydata: response.data })
      });
  }

  render() {
    const { inquirydata } = this.state;
    
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
      {/* console.log(ownerID); */}
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col xs={12}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4"> All Inquiry</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary font-weight-bold" style={{border: '1px solid black'}}>
                      <tr>
                        <th className="text-center font-weight-bold" style={styleMargin.bordersHead}>Name</th>
                        <th className="text-center font-weight-bold" style={styleMargin.bordersHead}>Email</th>
                        <th className="text-center font-weight-bold" style={styleMargin.bordersHead}>Phone number</th>
                        <th className="text-center font-weight-bold" style={styleMargin.bordersHead}>inquiry</th>
                        <th className="text-center font-weight-bold" style={styleMargin.bordersHead}>inquiery date</th> 
                      </tr>

                    </thead>
                    <tbody style={{border: '1px solid black'}}>
                      {inquirydata.map((e, key) => {
                        return (
                          <tr key={`${key}-key`} className="text-center">
                            <td className="text-center font-weight-bold" style={styleMargin.borders}>
                              {e.userName}
                            </td>
                            <td className="text-center font-weight-bold" style={styleMargin.borders}>
                              {e.userEmail}
                            </td>
                            <td className="text-center font-weight-bold" style={styleMargin.borders}>
                              {e.phone}
                            </td>
                            <td className="text-center font-weight-bold" style={styleMargin.borders}>
                              {e.message}
                            </td>
                            <td className="text-center font-weight-bold" style={styleMargin.borders}>
                              {e.Added_date}
                            </td>
                            {/* <td className="text-center font-weight-bold" style={styleMargin.borders}>
                            <Button type="button" className="btn btn-danger" style={{marginRight:'5px'}}>response</Button>
                            </td> */}
    
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
        <ToastContainer />
      </>
    );
  }
}

export default inquiry;
