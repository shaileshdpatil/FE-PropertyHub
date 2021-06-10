import React, { useEffect, useState } from 'react';
import { Card } from '@material-ui/core';
import axios from 'axios';
import PanelHeader from 'components/PanelHeader/PanelHeader'
import {
    Row,
    Col,
    Button
} from 'reactstrap';
import CardBody from 'reactstrap/lib/CardBody';
import CardHeader from 'reactstrap/lib/CardHeader';
import CardTitle from 'reactstrap/lib/CardTitle';
import Table from 'reactstrap/lib/Table';
import InsertProperty from './Dailog/InsertProperty';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const ownerID = cookies.get("ownerID",{path:'/owner'});

const DisplayProperty = () => {
    const [proper, setProper] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/api/propertyDisplayForOwner/${ownerID}`)
            .then((res) => {
                setProper(res.data);
            }).catch((error) => {
                console.log(error);
            })
    }, [])

    const marginfor = {
        bordersHead: {
            border: '1px solid black',
            backgroundColor: '#D7FFF1'
        },
    }

    return (
        <>
            <PanelHeader size="sm" />
            <div className="content">
                <Row>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h4">Your Propertys</CardTitle>
                                <InsertProperty />
                            </CardHeader>
                            <CardBody>
                                <Table responsive >
                                    <thead className="text-primary font-weight-bold" >
                                        <tr>
                                            <th className="text-center font-weight-bold" style={marginfor.bordersHead}>PropertyName</th>
                                            <th className="text-center font-weight-bold" style={marginfor.bordersHead}>Address</th>
                                            <th className="text-center font-weight-bold" style={marginfor.bordersHead}>Price</th>
                                            <th className="text-center font-weight-bold" style={marginfor.bordersHead}>City</th>
                                            <th className="text-center font-weight-bold" style={marginfor.bordersHead}>floors</th>
                                            <th className="text-center font-weight-bold" style={marginfor.bordersHead}>rooms</th>
                                            <th className="text-center font-weight-bold" style={marginfor.bordersHead}>BedRooms</th>
                                            <th className="text-center font-weight-bold" style={marginfor.bordersHead}>Garage</th>
                                            <th className="text-center font-weight-bold" style={marginfor.bordersHead}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-primary font-weight-bold" >
                                        {
                                            proper.map((pro,key) =>
                                                <tr className="text-center" key={`${key}-key`} id="border">
                                                    <td className="text-center" id="border">
                                                        {pro.PropertyName}
                                                    </td>
                                                    <td className="text-center" id="border">
                                                        {pro.FullAddress}
                                                    </td>
                                                    <td className="text-center" id="border">
                                                        {pro.Price}
                                                    </td>
                                                    <td className="text-center" id="border">
                                                        {pro.City}
                                                    </td>
                                                    <td className="text-center" id="border">
                                                        {pro.No_of_Floors}
                                                    </td>
                                                    <td className="text-center" id="border">
                                                        {pro.No_of_Rooms}
                                                    </td>
                                                    <td className="text-center" id="border">
                                                        {pro.No_of_BeedRoom}
                                                    </td>
                                                    <td className="text-center" id="border">
                                                        {pro.No_of_Garage}
                                                    </td>
                                                    <td className="text-center" >
                                                        <Link to={`/visitor/display-property-by-single-page/${pro._id}`}>
                                                            <Button className="btn-danger" >view</Button>
                                                        </Link>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default DisplayProperty
