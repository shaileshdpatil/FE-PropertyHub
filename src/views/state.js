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
import './allpackages.css';
import StateDailog from './Dailog/StateDailog';
import DeleteIcon from '@material-ui/icons/Delete';

const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

class state extends React.Component {
    state = {
        stateData: [],
        country: '',
        states: ''
    }

    componentDidMount = () => {
        this.getstateData();
    }
    getstateData = () => {
        axios.get('http://localhost:3000/api/statedisp',
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                // console.log(response.data);
                this.setState({ stateData: response.data })
            });
    }
    submitForm = () => {
        const { country, states } = this.state;
        const data = { country, states }
        if (country <= 3 || states <= 3) {
            alert("please fill fields property");
        } else if (format.test(country) || format.test(states)){
            alert("Country name or state name must not contain special character");
        } else {
            axios.post("http://localhost:3000/api/stateadd", data)
                .then((response) => {
                    this.getstateData();
                    alert("successfully inserted");

                }).catch((error) => {
                    console.log(error);
                })

        }
    }
    deleteData = (id) => {
        axios.delete(`http://localhost:3000/api/deletestate/${id}`).then((res) => {
            alert("successfully deleted")
            this.getstateData();
        }).catch((resspo) => {
            console.log("failed")
        })
    }
    render() {
        const { stateData, country, states } = this.state;
        const marginfor = {
            margin1: {
                marginRight: '15px',
            },
            btnsize: {
                marginTop: '-35px',
                paddingTop: '10px',
                paddingBottom: '10px',
                paddingRight: '50px',
                paddingLeft: '50px'
            },
            bordersHead: {
                border: '1px solid black',
                backgroundColor: '#AFDCEC'
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
                                    <CardTitle tag="h4" className="font-weight-bold">state</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <form noValidate autoComplete="off" >
                                        <div style={{ alignItems: 'center', display: 'flex' }} className="anchor">

                                            <div>
                                                <TextField id="outlined-basic" onChange={(e) => this.setState({ country: e.target.value })} label="country" variant="outlined" style={marginfor.margin1} required />
                                                <p className="alert-msg">{country?.length <= 3 && 'minimum length 3'}</p>

                                            </div>
                                            <div>
                                                <TextField id="outlined-basic" onChange={(e) => this.setState({ states: e.target.value })} label="state name" variant="outlined" style={marginfor.margin1} required />
                                                <p className="alert-msg">{states?.length <= 3 && 'minimum length 3'}</p>
                                            </div>

                                            <Button variant="contained" color="primary" style={marginfor.btnsize} onClick={this.submitForm}>Insert</Button>


                                        </div>
                                    </form>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle tag="h4">All state</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Table responsive>
                                        <thead className="text-primary font-weight-bold" style={{ border: '1px solid black' }}>
                                            <tr>
                                                <th className="text-center font-weight-bold" style={marginfor.bordersHead}>country</th>
                                                <th className="text-center font-weight-bold" style={marginfor.bordersHead}>state</th>
                                                <th className="text-center font-weight-bold" style={marginfor.bordersHead}>Action</th>
                                            </tr>

                                        </thead>
                                        <tbody style={{ border: '1px solid black' }}>
                                            {stateData.map((e, key) => {
                                                const data = {
                                                    _states: e.states,
                                                    _country: e.country
                                                };
                                                return (
                                                    <tr key={`${key}-key`} className="text-center">

                                                        <td className="text-center font-weight-bold" style={{ border: '1px solid black' }}>
                                                            {e.country}
                                                        </td>
                                                        <td className="text-center font-weight-bold" style={{ border: '1px solid black' }}>
                                                            {e.states}
                                                        </td>
                                                        <td className="text-center font-weight-bold" style={{ border: '1px solid black', display: 'flex', justifyContent: 'center' }}>
                                                            <StateDailog stateId={e._id} stateData={data} />
                                                            {/* <Button variant="outlined" color="primary" className="btn-danger">Update</Button> */}
                                                            <Button variant="contained" startIcon={<DeleteIcon />} size="small" color="secondary" className="btn-danger" onClick={() => this.deleteData(e._id)} style={{ marginLeft: '5px' }}>Delete</Button>
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

export default state;