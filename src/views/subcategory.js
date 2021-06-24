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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Subcategory from './Dailog/SubCategory';
import DeleteIcon from '@material-ui/icons/Delete';

class subcategory extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            subcategoryData: [],
            categoryData: [],
            names: '',
            // category: '',
        }
    }

    componentDidMount = () => {
        this.getsubcategoryData();
        this.getcategoryData();
    }

    getsubcategoryData = () => {
        axios.get('http://localhost:3000/api/subcategorydisp')
        .then((response) => {
                this.setState({ subcategoryData: response.data })
            });
    }
    getcategoryData = () => {
        axios.get('http://localhost:3000/api/categoryDisplay').then((response) => {
            this.setState({ categoryData: response.data })
        });
    }

    submitForm = () => {
        const { names } = this.state;
        const data = { names }
        if (names?.lenght <= 3 || names?.lenght >= 15) {
            alert("please fill fields property")
        } else {
            axios.post("http://localhost:3000/api/subcategoryadd", data)
                .then((respo) => {
                    toast.success('successfully inserted!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    this.getsubcategoryData()
                }).catch((errs) => {
                    alert("sub category is already exist");
                })
        }
    }


    deleteData = (id) => {
        axios.delete(`http://localhost:3000/api/deletesubcategory/${id}`).then((res) => {
            toast.error('successfully deleted!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            this.getsubcategoryData()
        }).catch((resspo) => {
            console.log("failed")
        })
    }

    render() {
        const { subcategoryData, names } = this.state;
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
            },
            btninsert: {
                width: '220px',
                marginTop: '0px',
                marginBottom: '15px',
                marginLeft: '30px',
                height: '55px',
                borderRadius: '10px',
                backgroundColor: 'skyblue',
                border: 'none',
                fontWeight: 'bolder'
            },
            options: {
                width: '170px',
                height: '30px',
                outline: 'none'
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
                                    <CardTitle tag="h4" className="font-weight-bold">Add subcategory</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <form noValidate autoComplete="off" >
                                        <div style={{ display: 'flex' }} className="anchor">
                                            <div>
                                                <TextField id="outlined-basic" error={this.state.names === ""} placeholder='Type subcategory name' onChange={(e) => this.setState({ names: e.target.value })} label="sub category name" variant="outlined" style={marginfor.margin1} required />
                                                <p className="alert-msg">{names?.length <= 3 && 'minimum length 3'}</p>
                                                <p className="alert-msg">{names?.length >= 15 && 'maximum length 15'}</p>
                                            </div>
                                            {/* <div>
                                                <label >Select category</label><br />
                                                <select style={marginfor.options} value={this.category} onChange={(e) => this.setState({ category: e.target.value })}>
                                                    <option>Select category</option>
                                                    {
                                                    categoryData.map((event, keys) => {
                                                        return (
                                                            <>
                                                                <option key={`${keys}-key`} value={event.name}>{event.name}</option>
                                                            </>
                                                        )
                                                    })
                                                    }
                                                </select>

                                            </div> */}
                                            {/* <Button type="submit" variant="contained" color="primary" style={marginfor.btnsize} onClick={this.submitForm}>Insert</Button> */}
                                            <button type="button" style={marginfor.btninsert} onClick={this.submitForm}>Insert</button>

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
                                                <th className="text-center font-weight-bold" style={marginfor.bordersHead}>Sub-category Name</th>
                                                {/* <th className="text-center font-weight-bold" style={{ border: '1px solid black' }}>category Name</th> */}
                                                {/* <th className="text-center font-weight-bold" style={marginfor.bordersHead}>Category</th> */}
                                                <th className="text-center font-weight-bold" style={marginfor.bordersHead}>Action</th>
                                            </tr>

                                        </thead>
                                        <tbody style={{ border: '1px solid black' }}>
                                            {subcategoryData.map((e, key) => {
                                                const data = {
                                                    _name: e.names,
                                                    _categorys: e.category
                                                }
                                                return (
                                                    <tr key={`${key}-key`} className="text-center">
                                                        <td className="text-center font-weight-bold" style={{ border: '1px solid black' }}>
                                                            {e.names}
                                                        </td>   
                                                        {/* <td className="text-center font-weight-bold" style={{ border: '1px solid black',textTransform:'lowercase' }}>
                                                            {e.category}
                                                        </td> */}
                                                        <td className="text-center font-weight-bold" style={{ border: '1px solid black', display: 'flex', justifyContent: 'center' }}>
                                                            <Subcategory subcatId={e._id} subCatData={data} />
                                                            <Button variant="contained" color="secondary" className="btn-danger" startIcon={<DeleteIcon />} size="small" onClick={() => this.deleteData(e._id)} style={{ marginLeft: '5px' }}>Delete</Button>
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
                <ToastContainer />
            </>
        )
    }
}

export default subcategory;