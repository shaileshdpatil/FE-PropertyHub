import React, { useEffect, useState } from 'react';
import { Card } from '@material-ui/core';
import axios from 'axios';
import PanelHeader from 'components/PanelHeader/PanelHeader'
import {
    Row,
    Col,
    Button
} from 'reactstrap';
import CardBody from 'reactstrap/lib/CardBody';
import CardHeader from 'reactstrap/lib/CardHeader';
import CardTitle from 'reactstrap/lib/CardTitle';
import Table from 'reactstrap/lib/Table';
import InsertProperty from './Dailog/InsertProperty';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'universal-cookie';
import EditProperty from './Dailog/Editproperty';
// import Single from 'components/OwnerPages/Wait';
// import SidebarOwner from 'components/Sidebar/SidebarOwner';
const cookies = new Cookies();

const ownerID = cookies.get("ownerID", { path: '/owner' });


const marginfor = {
    bordersHead: {
        border: '1px solid black',
        backgroundColor: '#D7FFF1'
    }
}

const DisplayProperty = () => {
    const [proper, setProper] = useState([]);
    const [pass, setPass] = useState('')

    useEffect(() => {
        axios.get(`http://localhost:3000/api/propertyDisplayForOwner/${ownerID}`)
            .then((res) => {
                setProper(res.data);
                setPass(res.data);

            }).catch((error) => {
                console.log(error);
            })
    }, [])
    const deleteporperty = () => {
        const id = pass[0]._id;
        axios.delete(`http://localhost:3000/api/deleteproperty/${id}`)
            .then((res) => {
                toast.error("deleted successfully !", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }).catch((error) => {
                console.log(error);
            })
    }
    return (
        <>
            <PanelHeader size="sm" />
            <div className="content">
                <Row>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h4">Your Propertys</CardTitle>

                                <InsertProperty propertylength={proper?.length} />
                            </CardHeader>
                            <CardBody>
                                {/* {console.log(owner.data[0].no_of_ads)} */}
                                <Table responsive  >
                                    <thead className="text-primary font-weight-bold" >
                                        <tr>
                                            <th className="text-center font-weight-bold" style={marginfor.bordersHead}>PropertyName</th>
                                            <th className="text-center font-weight-bold" style={marginfor.bordersHead}>Address</th>
                                            <th className="text-center font-weight-bold" style={marginfor.bordersHead}>Price</th>
                                            <th className="text-center font-weight-bold" style={marginfor.bordersHead}>City</th>
                                            <th className="text-center font-weight-bold" style={marginfor.bordersHead}>floors</th>
                                            <th className="text-center font-weight-bold" style={marginfor.bordersHead}>rooms</th>
                                            {/* <th className="text-center font-weight-bold" style={marginfor.bordersHead}>BedRooms</th> */}
                                            <th className="text-center font-weight-bold" style={marginfor.bordersHead}>Garage</th>
                                            <th className="text-center font-weight-bold" style={marginfor.bordersHead}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-primary font-weight-bold" >
                                        {
                                            proper.map((pro, key) => {
                                                const data = {
                                                    _kitchen: pro.kitchen,
                                                    _sqrft: pro.sqrft,
                                                    _location: pro.location,
                                                    _PropertyName: pro.PropertyName,
                                                    _FullAddress: pro.FullAddress,
                                                    _description: pro.description,
                                                    _Price: pro.Price,
                                                    _No_of_Floors: pro.No_of_Floors,
                                                    _No_of_Rooms: pro.No_of_Rooms,
                                                    _No_of_BeedRoom: pro.No_of_BeedRoom,
                                                    _No_of_Garage: pro.No_of_Garage,
                                                    _No_of_Bathroom: pro.No_of_Bathroom,
                                                    _No_of_Living_Room: pro.No_of_Living_Room,
                                                    _City: pro.City,
                                                    _builtyear: pro.builtyear,
                                                    _category: pro.category,
                                                    _Images: pro.Images
                                                }
                                                return (
                                                    <tr className="text-center" key={`${key}-key`} id="border">
                                                        <td className="text-center" id="border">
                                                            <p style={{ textTransform: 'capitalize' }}>{pro.PropertyName}</p>
                                                            <img style={{ height: '100px' }} src={pro.Images?.url} alt="patil1" />
                                                        </td>
                                                        <td className="text-center" id="border">
                                                            {pro.FullAddress}
                                                        </td>
                                                        <td className="text-center" id="border">
                                                            ₹.{pro.Price}
                                                        </td>
                                                        <td className="text-center" id="border">
                                                            {pro.City}
                                                        </td>
                                                        <td className="text-center" id="border">
                                                            {pro.No_of_Floors}
                                                        </td>
                                                        <td className="text-center" id="border">
                                                            {pro.No_of_Rooms}
                                                        </td>
                                                        {/* <td className="text-center" id="border">
                                                            {pro.No_of_BeedRoom}
                                                        </td> */}
                                                        <td className="text-center" id="border">
                                                            {pro.No_of_Garage}
                                                        </td>
                                                        <td className="text-center" style={{ display: 'flex' }}>
                                                            <EditProperty propertyId={pro._id} proData={data} />
                                                            <Button className="btn-danger" onClick={deleteporperty} style={{ marginLeft: '3px' }}>Delete</Button>
                                                            <Link to={`/owner/shailu/property-Detail/${pro._id}`}>
                                                                <Button className="btn-warn" style={{ marginLeft: '5px' }}>view</Button>
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                            )
                                        }
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

export default DisplayProperty
