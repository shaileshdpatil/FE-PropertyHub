import React,{useState,useEffect} from "react";

// reactstrap components
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Row,
  Button,
  Col,
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import axios from "axios";
import { useParams,Link } from 'react-router-dom'


const ProprtyDetail = () => {

  const { id } = useParams();
  // console.log(id);
  const [single, setSingle] = useState('');

  useEffect(() => {
    propertyWala();
    // eslint-disable-next-line react-hooks/exhaustive-deps 
}, [])

const propertyWala = (e) => {
    axios.get(`http://localhost:3000/api/propertyDisplayForSingle/${id}`)
        .then((response) => {
            setSingle(response.data);
        }).catch((error) => {
            console.log(error);
        })
}
// console.log(single);

  return (
    <>
      <PanelHeader size="sm" />
      <div className="content ">
        <Row>
          <Col xs={12}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4" className="font-weight-bold">Property Details</CardTitle>
              </CardHeader>
              <CardBody style={{ display: 'flex' }}>
                <Card style={{ width: '900px', padding: '10px' }}>
                  <img src={single.Images?.url} alt="patil" />
                  <h3 className="post-content-title mb-4 font-weight-bold">Description</h3>
                  <p style={{ color: 'black', backgroundColor: '#E0E3DA', padding: '5px' }}>Live in a world of comfort and style at Ganga Acropolis located in Baner, Pune. Book your 2 BHK apartment now. Sprawling across a carpet area of 558.97 sq. ft, it is an under construction property available for Rs. 74.14 Lac.The project has 6 towers, each of them with aesthetically crafted interiors as well as exteriors The project has the latest Fire Fighting Systems, an exclusive Car wash area, Swimming Pool, Indoor Games, Jacuzzi, Lawn Tennis Court, etc.</p>
                </Card>
                <Card style={{ width: '500px', marginLeft: '50px', padding: '20px' }}>
                  <h3 className="post-content-title mb-4 font-weight-bold">Essential Details</h3>
                  <div style={{ marginTop: '50px' }}>
                      <div style={{ display: 'flex' }}>
                        <p style={{ width: '150px' }}>Property Name  </p><p style={{ color: 'grey',width:'150px' }}>{single.PropertyName}</p>
                      </div>
                      <div style={{ display: 'flex' }}>
                        <p style={{ width: '150px' }}>Owner Name  </p><p style={{ color: 'grey',width:'150px' }}>{single.OwnerName}</p>
                      </div>
                      <div style={{ display: 'flex' }}>
                        <p style={{ width: '150px' }}>Property Price </p><p style={{ color: 'grey',width:'150px' }}>{single.Price}</p>
                      </div>
                      <div style={{ display: 'flex' }}>
                        <p style={{ width: '150px' }}>Property Size  </p><p style={{ color: 'grey',width:'150px' }}>{single.sqrft}</p>
                      </div>
                      <div style={{ display: 'flex' }}>
                        <p style={{ width: '150px' }}>Category  </p><p style={{ color: 'grey',width:'150px' }}>{single.category}</p>
                      </div>
                      <div style={{ display: 'flex' }}>
                        <p style={{ width: '150px' }}>City  </p><p style={{ color: 'grey',width:'150px' }}>{single.City}</p>
                      </div>
                      <div style={{ display: 'flex' }}>
                        <p style={{ width: '150px' }}>Built Year   </p><p style={{ color: 'grey',width:'150px' }}>{single.builtyear}</p>
                      </div>
                      <div style={{ display: 'flex' }}>
                        <p style={{ width: '150px' }}>Sqrft  </p><p style={{ color: 'grey',width:'150px' }}>{single.sqrft}</p>
                      </div>
                      <div style={{ display: 'flex' }}>
                        <p style={{ width: '150px' }}>Garages  </p><p style={{ color: 'grey',width:'150px' }}>{single.No_of_Garage}</p>
                      </div>
                      <div style={{ display: 'flex' }}>
                        <p style={{ width: '150px' }}>Rooms  </p><p style={{ color: 'grey',width:'150px' }}>{single.No_of_Rooms}</p>
                      </div>
                      <div style={{ display: 'flex' }}>
                        <p style={{ width: '150px' }}>Bedrooms  </p><p style={{ color: 'grey',width:'150px' }}>{single.No_of_BeedRoom}</p>
                      </div>
                      <div style={{ display: 'flex' }}>
                        <p style={{ width: '150px' }}>Location Details  </p><p style={{ color: 'grey',width:'150px' }}>{single.FullAddress}</p>
                      </div>
                      <Link to={`/visitor/display-property-by-single-page/${single._id}`}>
                      <Button style={{width:'100%'}} className="btn btn-primary">View As a Visitor</Button>
                      </Link>
                  </div>
                </Card>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}
export default ProprtyDetail;
