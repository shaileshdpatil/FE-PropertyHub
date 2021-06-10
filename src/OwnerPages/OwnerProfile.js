import { Card, TextField } from '@material-ui/core';
import PanelHeader from 'components/PanelHeader/PanelHeader'
import React from 'react'
import {
    Row,
    Col
} from 'reactstrap';
import Button from 'reactstrap/lib/Button';
import CardBody from 'reactstrap/lib/CardBody';
import CardHeader from 'reactstrap/lib/CardHeader';
import CardTitle from 'reactstrap/lib/CardTitle';
// import Cookies from 'universal-cookie';
// const cookies = new Cookies();

// cookies.get()

const OwnerProfile = () => {
    return (
        <>
            <PanelHeader size="sm" />
            <div className="content">
                <Row>
                    <Col xs={5} style={{marginLeft:'5   0px'}}>
                        <Card>
                            <CardHeader>
                                <CardTitle tag='h4'>Your Profile</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <TextField id="outlined-basic" label="Your Email" fullWidth variant="standard" />
                                <TextField id="outlined-basic" label="Your Phone" fullWidth variant="standard" style={{ marginTop: '20px'}} />
                                <TextField id="outlined-basic" label="Your Password" fullWidth variant="standard" style={{ marginTop: '20px' }} />
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
