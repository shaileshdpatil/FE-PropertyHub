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
import CityDailog from './Dailog/CityDailog';
import DeleteIcon from '@material-ui/icons/Delete';

const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

class city extends React.Component {
    state = {
        cityData: [],
        StateData:[],
        citys: '',
        states: ''

    }

    componentDidMount = () => {
        this.getcityData();
        this.getStateData();
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
        const { citys, states } = this.state;
        const data = { citys, states }
        if (citys < 3 || states < 3) {
            alert("please fill the fields properly")
        } else if (format.test(citys) || format.test(states)){
            alert("City name or state name must not contain special character");
        } else {
            axios.post("http://localhost:3000/api/cityadd", data)
                .then((response) => {
                    this.getcityData();
                    alert("successfully inserted");

                }).catch((error) => {
                    console.log(error);
                })

        }
    }
    getStateData = () => {
        axios.get('http://localhost:3000/api/statedisp').then((response) => {
            this.setState({ StateData: response.data })
        });
    }

    deleteData = (id) => {
        axios.delete(`http://localhost:3000/api/deletecityy/${id}`).then((resonsee) => {
            alert("successfully deleted");
            this.getcityData();
        }).catch((err) => {
            console.log("failed");
        })
    }
    render() {
        const { cityData, citys,StateData } = this.state;
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
            },
            options:{
                marginBottom:'70px',
                marginRight:'10px',
                fontSize:'20px',
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
                                        <div style={{ alignItems: 'center', display: 'flex' }}>
                                            <div>
                                                <TextField id="outlined-basic" onChange={(e) => this.setState({ citys: e.target.value.replace(/[^a-zA-Z0-9]/g, '') })} label="city" variant="outlined" style={marginfor.margin1} />
                                                <p className="alert-msg">{citys?.length <= 3 && 'minimum length 3'}</p>
                                            </div>
                                            <div>
                                                {/* <TextField id="outlined-basic" onChange={(e) => this.setState({ states: e.target.value })} label="state" variant="outlined" style={marginfor.margin1} />
                                                <p className="alert-msg">{states?.length <= 3 && 'minimum length 3'}</p> */}
                                                                                            <label >Select State</label><br />
                                                <select style={marginfor.options} value={this.states} onChange={(e) => this.setState({ states: e.target.value.replace(/[^a-zA-Z0-9]/g, '') })}>
                                                    {/* <option>Select category</option> */}
                                                    {StateData.map((event, keys) => {
                                                        return (
                                                            <>
                                                                <option key={`${keys}-key`} value={event.states}>{event.states}</option>
                                                            </>
                                                        )
                                                    })
                                                    }
                                                    </select>
                                            </div>
                                            <Button variant="contained" color="primary" style={marginfor.btnsize} onClick={this.submitForm}>Insert</Button>

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
                                        <thead className="text-primary font-weight-bold" style={marginfor.bordersHead}>
                                            <tr>
                                                <th className="text-center font-weight-bold" style={marginfor.bordersHead}>city</th>
                                                <th className="text-center font-weight-bold" style={marginfor.bordersHead}>state</th>
                                                <th className="text-center font-weight-bold" style={marginfor.bordersHead}>Action</th>
                                            </tr>

                                        </thead>
                                        <tbody style={{ border: '1px solid black' }}>
                                            {cityData.map((e, key) => {
                                                const data = {
                                                    _citys: e.citys,
                                                    _states: e.states
                                                }
                                                return (
                                                    <tr key={`${key}-key`} className="text-center">
                                                        <td className="text-center font-weight-bold" style={{ border: '1px solid black' }}>
                                                            {e.citys}
                                                        </td>
                                                        <td className="text-center font-weight-bold" style={{ border: '1px solid black' }}>
                                                            {e.states}
                                                        </td>
                                                        <td className="text-center font-weight-bold" style={{ border: '1px solid black', display: 'flex', justifyContent: 'center' }}>
                                                            <CityDailog cityId={e._id} cityData={data} />
                                                            <Button variant="contained" color="secondary" startIcon={<DeleteIcon />} size="small" className="btn-danger" onClick={() => this.deleteData(e._id)} style={{ marginLeft: '5px' }}>Delete</Button>
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