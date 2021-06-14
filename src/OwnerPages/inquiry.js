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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ResponseTouser from './Dailog/ResponseTouser';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const ownerID = cookies.get('ownerID', { path: '/owner' });
const ownerName = cookies.get('OwnerName', { path: '/owner' });
// console.log(ownerID);

class inquiry extends React.Component {
  state = {
    inquirydata: [],
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
        // console.log('====>',response.data);
        this.setState({ inquirydata: response.data })
      });
  }


  dealComplete = (e) => {
    // console.log(ownerName) 
    const userEmail = e._userEmail;
    const propertyId = e._propertyId;
    const amount = e._amount;
    const ownerID = e._ownerID;
    const id = e.id;

    // console.log(id);
    const data = { userEmail, propertyId, amount, ownerID, ownerName }
    axios.post('http://localhost:3000/api/insertDealWithLove/Shailu', data)
      .then((res) => {


        axios.put(`http://localhost:3000/api/dealActivated/${id}/isCompleted`)
          .then((res) => {
            alert("your deal now completed successully.");
            window.location.reload();
          }).catch((err) => {
            console.log(err);
          })

      }).catch((err) => {
        console.log(err);
      })
  }

  render() {
    const { inquirydata } = this.state;

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
                    <thead className="text-primary font-weight-bold" style={{ border: '1px solid black' }}>
                      <tr>
                        <th className="text-center font-weight-bold" style={styleMargin.bordersHead}>Name</th>
                        <th className="text-center font-weight-bold" style={styleMargin.bordersHead}>Email</th>
                        <th className="text-center font-weight-bold" style={styleMargin.bordersHead}>Phone number</th>
                        <th className="text-center font-weight-bold" style={styleMargin.bordersHead}>inquiry amount</th>
                        <th className="text-center font-weight-bold" style={styleMargin.bordersHead}>inquiry</th>
                        <th className="text-center font-weight-bold" style={styleMargin.bordersHead}>response</th>
                      </tr>

                    </thead>
                    <tbody style={{ border: '1px solid black' }}>
                      {inquirydata.map((e, key) => {
                        const data = {
                          id: e._id,
                          _userEmail: e.userEmail,
                          _propertyId: e.propertyId,
                          _amount: e.amount,
                          _ownerID: e.ownerID
                        }
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
                              {e.amount}
                            </td>
                            <td className="text-center font-weight-bold" style={styleMargin.borders}>
                              {e.message}
                            </td>
                            <td className="text-center font-weight-bold" style={{ display: 'flex',alignItems:'center' }}>
                              {/* {e.Added_date} */}
                              {
                                e.isCompleted
                                  ? <p style={{ color: "green",fontSize:'19px' }}>Deal completed</p>
                                  : <>
                                    <ResponseTouser email={e.userEmail} propertyId={e.propertyId} />
                                    <Button type="button" className="text-center btn btn-success" onClick={() => { this.dealComplete(data) }}>Accept deal</Button>
                                  </>
                              }
                            </td>
                            {/* <td className="text-center font-weight-bold" style={styleMargin.borders}>
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
