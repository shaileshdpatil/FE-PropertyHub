import React from "react";
import TextField from '@material-ui/core/TextField';
import ButtonM from '@material-ui/core/Button';

// reactstrap components
import {
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    Table,
    Row,
    Col,
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import axios from "axios";


class Packages extends React.Component {
    state = {
        propertyData: [],
        name: '',
        duration: '',
        no_of_ads: '',
        amount: '',
        description: ''
    }


    submitForm = () => {
        const { name, duration, no_of_ads, amount, description } = this.state;
        const body = {
            name, duration, no_of_ads, amount, description
        }
        axios.post("http://localhost:3000/api/packageadd", body)
            .then((response) => {
                this.getDealData()
            }).catch((errors) => {
                console.log(errors);
            })
    }


    componentDidMount = () => {
        this.getDealData();
    }

    getDealData = () => {
        axios.get('http://localhost:3000/api/packageDisplay',
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                this.setState({ propertyData: response.data })
            });
    }

    delteData = (_id) =>{
        console.log(this.state._id);
        axios.delete(`http://localhost:3000/api/deletePackage/${_id}`).then((res)=>{
            // alert("successfullt deleted")
            this.getDealData();
        }).catch((resspo)=>{
            console.log("failed")
        })
    }

    render() {
        const { propertyData } = this.state;
        const marginfor = {
            margin1: {
                paddingLeft: '80px',
                paddingRight: '80px',
                paddingTop: '10px',
                paddingBottom: '15px'
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
                                    <CardTitle tag="h4" className="font-weight-bold">Add packages</CardTitle>
                                </CardHeader>
                                <CardBody>

                                    <div>
                                        <TextField id="outlined-basic" label="Package Name" variant="outlined"  onChange={(e) => this.setState({ name: e.target.value })} style={{ marginRight: 25 }} />
                                        <TextField id="outlined-basic" label="Duration" variant="outlined" onChange={(e) => this.setState({ duration: e.target.value })} style={{ marginRight: 25 }} />
                                        <TextField id="outlined-basic" label="Description" onChange={(e) => this.setState({ description: e.target.value })} variant="outlined" />
                                    </div><br></br>
                                    <div>
                                        <TextField id="outlined-basic" label="No of ads" onChange={(e) => this.setState({ no_of_ads: e.target.value })} variant="outlined" style={{ marginRight: 25 }} />
                                        <TextField id="outlined-basic" label="Amount" onChange={(e) => this.setState({ amount: e.target.value })} variant="outlined" style={{ marginRight: 25 }} />
                                        <ButtonM type="submit" variant="contained" color="primary" size="large" style={marginfor.margin1} onClick={this.submitForm}>
                                            Insert
                                            </ButtonM>
                                    </div>

                                </CardBody>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle tag="h4" className="font-weight-bold">All packages</CardTitle>
                                </CardHeader>
                                <CardBody>

                                    <Table responsive>
                                        <thead className="text-primary font-weight-bold" style={{ border: '1px solid black' }}>
                                            <tr>
                                                <th className="text-center font-weight-bold" style={{ border: '1px solid black' }}>package Name</th>
                                                <th className="text-center font-weight-bold" style={{ border: '1px solid black' }}>Duration</th>
                                                <th className="text-center font-weight-bold" style={{ border: '1px solid black' }}>no of ads</th>
                                                <th className="text-center font-weight-bold" style={{ border: '1px solid black' }}>Amount</th>
                                                <th className="text-center font-weight-bold" style={{ border: '1px solid black' }}>Description</th>
                                                <th className="text-center font-weight-bold" style={{ border: '1px solid black' }}>Action</th>
                                            </tr>

                                        </thead>
                                        <tbody style={{ border: '1px solid black' }}>
                                            {propertyData.map((e, key) => {
                                                console.log(e);
                                                return (
                                                
                                                    <tr key={`${key}-key`} className="text-left">
                                                        <td className="text-center font-weight-bold" style={{ border: '1px solid black' }}>
                                                            {e.name}
                                                        </td>
                                                        <td className="text-center font-weight-bold" style={{ border: '1px solid black' }}>
                                                            {e.duration}
                                                        </td>
                                                        <td className="text-center font-weight-bold" style={{ border: '1px solid black' }}>
                                                            {e.no_of_ads}
                                                        </td>
                                                        <td className="text-center font-weight-bold" style={{ border: '1px solid black' }}>
                                                            {e.amount}
                                                        </td>
                                                        <td className="text-center font-weight-bold" style={{ border: '1px solid black' }}>
                                                            {e.description}
                                                        </td>
                                                        <td className="text-left font-weight-bold" style={{ border: '1px solid black' }}>
                                                            <ButtonM variant="contained" color="secondary" size="large" onClick={(e)=>this.delteData(e._id)}>Delete</ButtonM>
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

export default Packages;
