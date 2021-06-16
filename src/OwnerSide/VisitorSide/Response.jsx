import React, { useState } from 'react';
import { HeaderNav } from './HeaderNav';
import {
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    Table,
    Row,
    Col,
} from "reactstrap";
import { useEffect } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const cookies = new Cookies();




const Response = () => {
    const userEmail = cookies.get('userEmail');

    const [patil, setData] = useState([]);
    const [details,setDetails] = useState([]);

    const styleMargin = {
        bordersHead: {
            border: '1px solid black',
            backgroundColor: '#AFDCEC'
        },
        design: {
            width: '200px',
            backgroundColor: '#E0E3DA',
            color: 'black'
        },
        borders: {
            border: '1px solid black'
        },
        btn:{
            marginRight:'300px',
            textTransform:'capitalize',
            color:'green',
            fontWeight:'bolder'
        }
    }
    const dealComplete = (e) => {
        const ownerName = patil[0].ownerName
        const ownerID = patil[0].ownerID
        const userEmail = patil[0].userEmail
        const amount = patil[0].amount
        const propertyId = patil[0].propertyId

        const data = { propertyId, amount, userEmail, ownerName, ownerID }
        axios.post('http://localhost:3000/api/insertDealWithLove/Shailu', data)
            .then((res) => {
                dealActivate();
            }).catch((err) => {
                console.log(err);
            })
    }

    const dealActivate = (e) => {
        const id = patil[0]._id
        const inqueryID = patil[0].inqueryID
        axios.put(`http://localhost:3000/api/dealActivate/${id}/isActivated`)
            .then((res) => {
                alert("your deal now completed successully.");
                axios.put(`http://localhost:3000/api/dealActivated/${inqueryID}/isCompleted`)
                    .then((res) => {
                        alert("your deal now completed successully.");
                        window.location.reload();
                    }).catch((err) => {
                        console.log(err);
                    })
                window.location.reload();
            }).catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        axios.get(`http://localhost:3000/api/searchuserEmail/${userEmail}`)
            .then((res) => {
                setData(res.data);
            }).catch((error) => {
                console.log(error);
            });

            axios.get(`http://localhost:3000/api/searchuserDeals/${userEmail}`)
            .then((res) => {
                setDetails(res.data);
            }).catch((error) => {
                console.log(error);
            });
        // eslint-disable-next-line
    }, [])


    return (
        <>
            <HeaderNav />
            <Row>
                <Col xs={12}>
                    <Card>
                        <CardHeader>
                            <CardTitle tag="h4" className="font-weight-bold">All Response from the owner</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <Table responsive>
                                <thead className="text-primary font-weight-bold" style={styleMargin.borders}>
                                    <tr>
                                        <th className="text-center font-weight-bold" style={styleMargin.design}>owner Name</th>
                                        <th className="text-center font-weight-bold" style={styleMargin.design}>Last amount</th>
                                        <th className="text-center font-weight-bold" style={styleMargin.bordersHead}>RESPONSE</th>
                                        <th className="text-center font-weight-bold" style={styleMargin.bordersHead}>DEAL</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        patil.map((res, key) =>
                                            <tr key={`${key}-key`} style={styleMargin.borders}>
                                                <td className="text-center font-weight-bold" style={styleMargin.design}>{res.ownerName}</td>
                                                <td className="text-center font-weight-bold" style={styleMargin.design}>₹. {res.amount}</td>
                                                <td className="text-center font-weight-bold" style={styleMargin.bordersHead}>{res.message}</td>
                                                <td style={{ width: '300px' }}>
                                                    <div style={{ display: 'flex' }}>
                                                        {
                                                            res.isCompleted
                                                                ? <p style={{ color: 'green', fontWeight: 'bolder' }}>Deal Completed</p>
                                                                : <Button type="button" className="text-center btn btn-success" onClick={dealComplete}>Accept deal</Button>
                                                        }

                                                        <Link to={`/visitor/display-property-by-single-page/${res.propertyId}`}>
                                                            <Button type="button" className="text-center btn btn-info" style={{ marginLeft: '10px' }}>view property</Button>
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <Card>
                        <CardHeader>
                            <CardTitle tag="h4" className="font-weight-bold">Deal Completed</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <Table responsive>
                                <thead className="text-primary font-weight-bold" style={styleMargin.borders}>
                                    <tr>
                                        <th className="text-center font-weight-bold" style={styleMargin.design}>owner Name</th>
                                        <th className="text-center font-weight-bold" style={styleMargin.design}>Amount</th>
                                        <th className="text-center font-weight-bold" style={styleMargin.bordersHead}>RESPONSE</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {console.log(details)}
                                {
                                        details.map((sunil, key) =>
                                            <tr key={`${key}-key`} style={styleMargin.borders}>
                                                <td className="text-center font-weight-bold" style={styleMargin.design}>{sunil.ownerName}</td>
                                                <td className="text-center font-weight-bold" style={styleMargin.design}>₹. {sunil.amount}</td>
                                                <td style={{ width: '800px' }}>
                                                    <div style={{ display: 'flex' }}>
                                                        <p style={styleMargin.btn}>your offer is Accepted by owner click here to get more details </p>
                                                        <Link to={`/visitor/display-property-by-single-page/${sunil.propertyId}`}>
                                                            <Button type="button" className="text-center btn btn-info">view property</Button>
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Response;