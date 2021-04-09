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
    constructor(props) {
        super(props);

    this.state = {
        subcategoryData: [],
        names: '',
        category:'',

    }
    this.handleChange = this.handleChange.bind(this);
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
        const { names,category } = this.state;
        const data = { names ,category }
        if(names?.lenght>=3 || category?.length>=4){
            alert("please fill fields property")
        }else{
            axios.post("http://localhost:3000/api/subcategoryadd", data)
                .then((response) => {
                    this.getsubcategoryData();
                    alert("successfully inserted");
                   
                }).catch((error) => {
                    console.log(error);
                })

        }
    }

    handleChange(e) {
        const re = /[A-Za-z]+/g;
        if (e.target.value === '' || re.test(e.target.value)) {
            this.setState({ names: e.target.value });
        }
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
                                    
                                                <TextField id="outlined-basic" error={this.state.names === ""} placeholder='Type subcategory name' value={this.state.names} onChange={this.handleChange} label="sub category name" variant="outlined" style={marginfor.margin1} required/>
                                                <TextField id="outlined-basic" error={this.state.category === ""} placeholder='Type category name' label="category name" onChange={(e) => this.setState({ category: e.target.value })} variant="outlined" style={marginfor.margin1} required/>
                                                <Button type="submit" variant="contained" color="primary" style={marginfor.btnsize} onClick={this.submitForm}>Insert</Button>
                                        

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
                                                {/* <th className="text-center font-weight-bold" style={{ border: '1px solid black' }}>category Name</th> */}
                                                <th className="text-center font-weight-bold" style={{ border: '1px solid black' }}>Category</th>
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
                                                            {e.category}
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