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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './allpackages.css';
import DailogcCat from './Dailog/DailogcCat';
import DeleteIcon from '@material-ui/icons/Delete';

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


    submitForm = () => {
        const { name } = this.state;
        const body = {
            name
        }
        if(name?.length <= 3 || name?.length >=20){
            toast.error('Please fill the data properly!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                })
        }else{
            axios.post("http://localhost:3000/api/insertcategory", body)
                .then((resp) => {
                    toast.success('successfully inserted!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                    this.getcategoryData();
                }).catch((error) => {
                    alert('category Already Exist!')
                })

        }
    }
    deleteCategory = (id) => {
		axios.delete(`http://localhost:3000/api/deleteOcategory/${id}`).then((res) => {
            toast.error('successfully deleted!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
			this.getcategoryData();
		}).catch((resspo) => {
			console.log("failed")
		})
	}


    render() {
        const { categoryData } = this.state;

        const styleMargin = {
            bordersHead: {
              border: '1px solid black',
              backgroundColor:'#AFDCEC'
            },
            borders: {
              border: '1px solid black'
            }
          }
        return (
            <>
                <PanelHeader size="sm" />
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>
                            <Card>
                                <CardHeader>
                                    <CardTitle tag="h4" className="font-weight-bold">Add category</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <form noValidate autoComplete="off" >
                                        <div style={{ alignItems: 'center' }}>
                                            <div className="anchor">
                                                <TextField id="outlined-basic" error={this.state.name === ""} label="category name" variant="outlined" onChange={(e) => this.setState({ name: e.target.value.replace(/[^a-zA-Z0-9]/g, '') })} fullWidth={true} required/>
                                                <p className="alert-msg">{this.state.name?.length <= 3 && 'minimum length 3'}</p>
                                                <p className="alert-msg">{this.state.name?.length >= 15 && 'maximum length 15'}</p>
                                            </div>
                                                <Button variant="contained" fullWidth={true} color="primary" style={{ marginTop: '20px' }} onClick={this.submitForm}>Insert</Button>
                                            
                                                
                
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
                                        <thead className="text-primary font-weight-bold">
                                            <tr>
                                                <th className="text-center font-weight-bold" style={styleMargin.bordersHead}>sub-category Name</th>
                                                <th className="text-center font-weight-bold" style={styleMargin.bordersHead}>Action</th>
                                            </tr>

                                        </thead>
                                        <tbody style={{ border: '1px solid black' }}>
                                            {categoryData.map((e, key) => {
                                                 const data = {
                                                  _name :e.name   
                                                } 
                                                return (
                                                    <tr key={`${key}-key`} className="text-left">
                                                        <td className="text-center font-weight-bold" style={{ border: '1px solid black'}}>
                                                            {e.name}
                                                        </td>
                                                       
                                                        <td className="text-center font-weight-bold" style={{ border: '1px solid black' ,display:'flex',justifyContent:'center'}}>
                                                            <DailogcCat categoryId={e._id} catData={data} />
                                                            <Button variant="contained" color="secondary"  startIcon={<DeleteIcon />} size="small" onClick={() => this.deleteCategory(e._id)} style={{marginLeft:'10px'}}>Delete</Button>
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

export default category;