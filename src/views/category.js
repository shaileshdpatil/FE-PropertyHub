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


class category extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            categoryData: [],
            name: ''
        }
    }
    componentDidMount = () => {
        this.getcategoryData();
    }
    // http://localhost:3000/api/categoryDisplay

    getcategoryData = () => {
        axios.get('http://localhost:3000/api/categoryDisplay',
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                this.setState({ categoryData: response.data })
            });
    }


    handleChange(e) {
        const re = /[A-Za-z]+/g;
        if (e.target.value === '' || re.test(e.target.value)) {
            this.setState({ name: e.target.value });
        }
    }

    submitForm = () => {
        const { name } = this.state;
        const body = {
            name
        }
        axios.post("http://localhost:3000/api/insertcategory", body)
            .then((resp) => {
                this.getcategoryData();
            }).catch((errs) => {
                console.log(errs);
            })
    }


    render() {
        const { categoryData } = this.state;
        return (
            <>
                <PanelHeader size="sm" />
                <div className="content">
                    <Row>
                        <Col xs={12}>
                            <Card>
                                <CardHeader>
                                    <CardTitle tag="h4" className="font-weight-bold">Add category</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <form noValidate autoComplete="off" >
                                        <div style={{ alignItems: 'center' }}>
                                            <div>
                                                <TextField id="outlined-basic" error={this.state.name === ""}  helperText={this.state.name === "" ? 'Only charector values!' : ' '} label="category name" variant="outlined" value={this.state.name} onChange={this.handleChange} fullWidth={true} />
                                                <Button variant="contained" fullWidth={true} color="primary" style={{ marginTop: '20px' }} onClick={this.submitForm}>Insert</Button>
                                            </div>

                                        </div>
                                    </form>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>All categorys</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Table responsive>
                                        <thead className="text-primary font-weight-bold" style={{ border: '1px solid black' }}>
                                            <tr>
                                                <th className="text-center font-weight-bold" style={{ border: '1px solid black' }}>category Name</th>

                                                <th className="text-center font-weight-bold" style={{ border: '1px solid black' }}>Added date</th>
                                                <th className="text-center font-weight-bold">Action</th>
                                            </tr>

                                        </thead>
                                        <tbody style={{ border: '1px solid black' }}>
                                            {categoryData.map((e, key) => {
                                                return (
                                                    <tr key={`${key}-key`} className="text-left">
                                                        <td className="text-center font-weight-bold" style={{ border: '1px solid black' }}>
                                                            {e.name}
                                                        </td>
                                                        <td className="text-center font-weight-bold" style={{ border: '1px solid black' }}>
                                                            {e.name}
                                                        </td>
                                                        <td className="text-center font-weight-bold" style={{ border: '1px solid black' }}>
                                                            <Button variant="contained" color="secondary" size="large">Delete</Button>
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

export default category;