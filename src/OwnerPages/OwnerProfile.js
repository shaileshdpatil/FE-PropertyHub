import { Card, TextField } from '@material-ui/core';
import axios from 'axios';
import PanelHeader from 'components/PanelHeader/PanelHeader'
import React, { useState, useEffect } from 'react'
import {
    Row,
    Col
} from 'reactstrap';
import Button from 'reactstrap/lib/Button';
import CardBody from 'reactstrap/lib/CardBody';
import CardHeader from 'reactstrap/lib/CardHeader';
import CardTitle from 'reactstrap/lib/CardTitle';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const ownerID = cookies.get('ownerID', { path: '/owner' });

const OwnerProfile = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3000/api/propertyDisplayOwner/${ownerID}`)
            .then((res) => {
                setData(res.data);
            }).catch((error) => {
                console.log(error);
            })
    }, [])

    // const [email, setEmail] = useState();
    // const [phone, setPhone] = useState();
    // const [Password, setPassword] = useState();

    return (
        <>
            <PanelHeader size="sm" />
            <div className="content">
                <Row>
                    <Col xs={5} style={{ marginLeft: '5   0px' }}>
                        <Card>
                            <CardHeader>
                                <CardTitle tag='h4'>Your Profile</CardTitle>
                            </CardHeader>
                            <CardBody>{
                                data.map((shai,key)=>
                                <div key={`${key}-key`}>
                                    <TextField id="email" value={shai.email}  label="Your Email" fullWidth variant="standard" />
                                    <TextField id="phone" label="Your Phone" value={shai.phone} fullWidth variant="standard" style={{ marginTop: '20px' }} />
                                    <TextField id="password" label="Enter Your New Password" fullWidth variant="standard" style={{ marginTop: '20px' }} />
                                    <TextField id="package" label="Your Package" fullWidth variant="standard" style={{ marginTop: '20px' }} />
                                </div>
                                )
                                }
                                <Button variant="contained" color="primary">Update Profile Now</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default OwnerProfile
