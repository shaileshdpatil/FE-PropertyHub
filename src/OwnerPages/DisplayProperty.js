import { Card } from '@material-ui/core';
import PanelHeader from 'components/PanelHeader/PanelHeader'
import React from 'react'
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

const DisplayProperty = () => {
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
                                <Table responsive>
                                    <thead className="text-primary font-weight-bold" >
                                        <tr>
                                            <th className="text-center font-weight-bold" style={marginfor.bordersHead}>PropertyName</th>
                                            <th className="text-center font-weight-bold" style={marginfor.bordersHead}>City</th>
                                            <th className="text-center font-weight-bold" style={marginfor.bordersHead}>Address</th>
                                            <th className="text-center font-weight-bold" style={marginfor.bordersHead}>Phone</th>
                                            <th className="text-center font-weight-bold" style={marginfor.bordersHead}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-primary font-weight-bold">
                                        <tr className="text-center">
                                            <td className="text-center">
                                            shailesh patil
                                            </td>
                                            <td className="text-center">
                                            shailesh patil
                                            </td>
                                            <td className="text-center">
                                            shailesh patil
                                            </td>
                                            <td className="text-center">
                                            8866965956
                                            </td>
                                            <td className="text-center">
                                            <Button className="btn-primary" style={{marginRight:'10px'}}>Edit</Button>
                                            <Button className="btn-danger">Delete</Button>
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
