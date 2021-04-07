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


class subcategory extends React.Component {
    state = {
        subcategoryData: [],
        names: '',
    }

    componentDidMount = () => {
        this.getsubcategoryData();
    }

    getsubcategoryData = () => {
        axios.get('http://localhost:3000/api/subcategorydisp',
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                // console.log(response.data);
                this.setState({ subcategoryData: response.data })
            });
    }

    submitForm = () => {
        const { names } = this.state;
        const data = { names }
        axios.post("http://localhost:3000/api/subcategoryadd", data)
            .then((response) => {
                this.getsubcategoryData();
                alert("successfully inserted");

            }).catch((error) => {
                console.log(error);
            })
    }
    render() {
        const { subcategoryData } = this.state;
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
                                    <CardTitle tag="h4" className="font-weight-bold">Add subcategory</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <form noValidate autoComplete="off" >
                                        <div style={{ alignItems: 'center' }}>
                                            <div>
                                                <TextField id="outlined-basic" onChange={(e) => this.setState({ names: e.target.value })} label="sub category name" variant="outlined" style={marginfor.margin1} />
                                                <TextField id="outlined-basic" label="category name" variant="outlined" style={marginfor.margin1} />
                                                <Button variant="contained" color="primary" style={marginfor.btnsize} onClick={this.submitForm}>Insert</Button>
                                            </div>

                                        </div>
                                    </form>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle tag="h4">All categorys</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Table responsive>
                                        <thead className="text-primary font-weight-bold" style={{ border: '1px solid black' }}>
                                            <tr>
                                                <th className="text-center font-weight-bold" style={{ border: '1px solid black' }}>Sub-category Name</th>
                                                <th className="text-center font-weight-bold" style={{ border: '1px solid black' }}>Added date</th>
                                                <th className="text-center font-weight-bold" style={{ border: '1px solid black' }}>Action</th>
                                            </tr>

                                        </thead>
                                        <tbody style={{ border: '1px solid black' }}>
                                            {subcategoryData.map((e, key) => {
                                                return (
                                                    <tr key={`${key}-key`} className="text-center">
                                                        <td className="text-center font-weight-bold" style={{ border: '1px solid black' }}>
                                                            {e.names}
                                                        </td>

                                                        <td className="text-center font-weight-bold" style={{ border: '1px solid black' }}>
                                                            {e.added_date}
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

export default subcategory;