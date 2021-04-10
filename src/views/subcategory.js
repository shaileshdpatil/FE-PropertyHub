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
import './allpackages.css'

class subcategory extends React.Component {
    constructor(props) {
        super(props);

    this.state = {
        subcategoryData: [],
        names: '',
        category:'',

    }
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
        // console.log((data));
        if(names?.lenght <= 3 || category?.length <= 3){
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


    deleteData = (id) => {
		axios.delete(`http://localhost:3000/api/deletesubcategory/${id}`).then((res) => {
			alert("successfully deleted")
			this.getsubcategoryData();
		}).catch((resspo) => {
			console.log("failed")
		})
	}
    
    render() {
        const { subcategoryData,names,category } = this.state;
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
                                        <div style={{display:'flex' }} className="anchor">
                                            <div>
                                                <TextField id="outlined-basic" error={this.state.names === ""} placeholder='Type subcategory name' onChange={(e)=>this.setState({names:e.target.values})} label="sub category name" variant="outlined" style={marginfor.margin1} required/>
                                                <p className="alert-msg">{names?.length <= 3 && 'minimum length 3'}</p>
                                            </div>
                                            <div>
                                                <TextField id="outlined-basic" error={this.state.category === ""} placeholder='Type category name' label="category name" onChange={(e) => this.setState({ category: e.target.value })} variant="outlined" style={marginfor.margin1} required/>
                                                <p className="alert-msg">{category?.length <= 3 && 'minimum length 3'}</p>
                                            </div>
                                                {/* <Button type="submit" variant="contained" color="primary" style={marginfor.btnsize} onClick={this.submitForm}>Insert</Button> */}
                                                <button type="button" style={{width:'220px',marginTop:'0px',marginBottom:'15px',height:'55px',borderRadius:'10px',backgroundColor:'skyblue',border:'none',fontWeight:'bolder'}} onClick={this.submitForm}>Insert</button>

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
                                                            <Button variant="contained" color="secondary" className="btn-danger" onClick={() => this.deleteData(e._id)}>Delete</Button>
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