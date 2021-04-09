import PanelHeader from 'components/PanelHeader/PanelHeader';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import axios from 'axios';
import {
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    Table,
    Row,
    Col,
} from "reactstrap";


class city extends React.Component {
    state = {
        cityData: [],
        citys: '',
        states: ''
        
    }

    componentDidMount = () => {
        this.getcityData();
    }

    getcityData = () => {
        axios.get('http://localhost:3000/api/citydisp',
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                // console.log(response.data);
                this.setState({ cityData: response.data })
            });
    }

    submitForm = () => {
        const { citys,states} = this.state;
        const data = {citys,states }
        axios.post("http://localhost:3000/api/cityadd", data)
            .then((response) => {
                this.getcityData();
                alert("successfully inserted");

            }).catch((error) => {
                console.log(error);
            })
    }
    render() {
        const { cityData } = this.state;
        const marginfor = {
            margin1: {
                marginRight: '15px',
            },
            btnsize: {
                marginTop: '7px',
                paddingTop: '10px',
                paddingBottom: '10px',
                paddingRight: '50px',
                paddingLeft: '50px'
            }
        }
        return (
            <>
                <PanelHeader size="sm" />
                <div className="content">
                    <Row>
                        <Col xs={12}>
                            <Card>
                                <CardHeader>
                                    <CardTitle tag="h4" className="font-weight-bold">city</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <form noValidate autoComplete="off" >
                                        <div style={{ alignItems: 'center' }}>
                                            <div>
                                                <TextField id="outlined-basic" onChange={(e) => this.setState({ citys: e.target.value })} label="city" variant="outlined" style={marginfor.margin1} />
                                                <TextField id="outlined-basic" onChange={(e) => this.setState({ states: e.target.value })} label="state" variant="outlined" style={marginfor.margin1} />
                                                <Button variant="contained" color="primary" style={marginfor.btnsize} onClick={this.submitForm}>Insert</Button>
                                            </div>

                                        </div>
                                    </form>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle tag="h4">All city</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Table responsive>
                                        <thead className="text-primary font-weight-bold" style={{ border: '1px solid black' }}>
                                            <tr>
                                                <th className="text-center font-weight-bold" style={{ border: '1px solid black' }}>city</th>
                                                <th className="text-center font-weight-bold" style={{ border: '1px solid black' }}>state</th>
                                                <th className="text-center font-weight-bold" style={{ border: '1px solid black' }}>Action</th>
                                            </tr>

                                        </thead>
                                        <tbody style={{ border: '1px solid black' }}>
                                            {cityData.map((e, key) => {
                                                return (
                                                    <tr key={`${key}-key`} className="text-center">
                                                        <td className="text-center font-weight-bold" style={{ border: '1px solid black' }}>
                                                            {e.citys}
                                                        </td>
                                                        <td className="text-center font-weight-bold" style={{ border: '1px solid black' }}>
                                                            {e.states}
                                                        </td>
                                                        <td className="text-center font-weight-bold" style={{ border: '1px solid black' }}>
                                                            <Button variant="contained" color="secondary" className="btn-danger" onClick={this.submitForm}>Delete</Button>
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
        )
    }
}

export default city;