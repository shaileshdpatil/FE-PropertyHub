import React from "react";

// reactstrap components
import {
    Card,
    CardTitle,
    CardBody,
    CardHeader,
    Row,
    Col,
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import axios from "axios";
import Table from "reactstrap/lib/Table";
import Cookies from 'universal-cookie'
const cookies = new Cookies();

const ownerID = cookies.get('ownerID', { path: '/owner' })

class DealCompleted extends React.Component {
    state = {
        reviewdata: []
    }

    componentDidMount = () => {
        this.getReviewdata();
    }

    getReviewdata = () => {
        axios.get(`http://localhost:3000/api/dealDisplayForOwner/${ownerID}`,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                this.setState({ reviewdata: response.data })
            });
    }

    render() {
        const { reviewdata } = this.state;

        const styleMargin = {
            bordersHead: {
                border: '1px solid black',
                backgroundColor: '#AFDCEC'
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
                        <Col xs={12}>
                            <Card>
                                <CardHeader>
                                    <CardTitle tag="h4"> All Deals</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Table responsive>
                                        <thead className="text-primary font-weight-bold" style={{ border: '1px solid black' }}>
                                            <tr>
                                                <th className="text-center font-weight-bold" style={styleMargin.bordersHead}>Your Name</th>
                                                <th className="text-center font-weight-bold" style={styleMargin.bordersHead}>user Email</th>
                                                <th className="text-center font-weight-bold" style={styleMargin.bordersHead}>Amount</th>
                                                <th className="text-center font-weight-bold" style={styleMargin.bordersHead}>deal status</th>
                                                <th className="text-center font-weight-bold" style={styleMargin.bordersHead}>deal Date</th>
                                            </tr>

                                        </thead>
                                        <tbody style={{ border: '1px solid black' }}>
                                            {
                                                reviewdata.map((res) =>
                                                    <tr className="text-center">
                                                        <td className="text-center font-weight-bold" style={styleMargin.borders}>
                                                            {res.ownerName}
                                                        </td>
                                                        <td className="text-center font-weight-bold" style={styleMargin.borders}>
                                                            {res.userEmail}
                                                        </td>
                                                        <td className="text-center font-weight-bold" style={styleMargin.borders}>
                                                            {res.amount}
                                                        </td>
                                                        <td className="text-center font-weight-bold" style={{color:"green",fontSize:'20px'}}>
                                                            {res.deal}
                                                        </td>
                                                        <td className="text-center font-weight-bold" style={styleMargin.borders}>
                                                            {res.added_date}
                                                        </td>    
                                                    </tr>
                                                        )
                                            }
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

export default DealCompleted;
