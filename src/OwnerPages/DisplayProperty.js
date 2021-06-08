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
import {Link} from 'react-router-dom';

const DisplayProperty = () => {
    const [proper, setProper] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/api/propertyDisplay`)
            .then((res) => {
                setProper(res.data);
            }).catch((error) => {
                console.log(error);
            })
    },[])

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
                                <Table responsive key={proper.id}>
                                    <thead className="text-primary font-weight-bold" >
                                        <tr>
                                            <th className="text-center font-weight-bold" style={marginfor.bordersHead}>PropertyName</th>
                                            <th className="text-center font-weight-bold" style={marginfor.bordersHead}>Address</th>
                                            <th className="text-center font-weight-bold" style={marginfor.bordersHead}>Price</th>
                                            <th className="text-center font-weight-bold" style={marginfor.bordersHead}>City</th>
                                            <th className="text-center font-weight-bold" style={marginfor.bordersHead}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-primary font-weight-bold">
                                      
                                        <tr className="text-center">
                                            <td className="text-center">
                                                 row house
                                            </td>
                                             <td className="text-center">
                                             katargam
                                            </td>
                                            <td className="text-center">
                                            1500
                                            </td>
                                            <td className="text-center">
                                          surat
                                            </td>
                                                <td className="text-center">
                                                {/* <Button className="btn-primary" style={{ marginRight: '10px' }}>Edit</Button> */}
                                                <Link to="/visitor/display-property-by-single-page">
                                                    <Button className="btn-danger" >view</Button>
                                                </Link>    
                                                </td>
                                        </tr>

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
