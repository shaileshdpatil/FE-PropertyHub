import React from "react";
import TextField from '@material-ui/core/TextField';
import ButtonM from '@material-ui/core/Button';

// reactstrap components
import {
	Card,
	CardBody,
	CardHeader,
	CardTitle,
	Table,
	Row,
	// FormGroup,
	Col,
	// Label,
	// Input
} from "reactstrap";
import './allpackages.css'


// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import axios from "axios";

//styles
import './allpackages.css'

class Packages extends React.Component {
	state = {
		propertyData: [],
		name: '',
		duration: 0,
		no_of_ads: 0,
		amount: 0,
		description: '',
	}


	submitForm = () => {
		const { name, duration, no_of_ads, amount, description } = this.state;

		const body = {
			name, duration, no_of_ads, amount, description
		}

		if (name?.length <= 3 || name?.length >= 8 || duration < 1 || no_of_ads < 3 || description?.length < 10 || amount < 1) {
			alert("fill properly");
		} else {
			axios.post("http://localhost:3000/api/packageadd", body)
				.then((response) => {
					this.getDealData()
				}).catch((errors) => {
					console.log(errors);
				})
		}

	}


	componentDidMount = () => {
		this.getDealData();
	}

	getDealData = () => {
		axios.get('http://localhost:3000/api/packageDisplay',
			{
				headers: {
					'Content-Type': 'application/json'
				}
			}).then((response) => {
				this.setState({ propertyData: response.data })
			});
	}

	deleteData = (id) => {
		axios.delete(`http://localhost:3000/api/deletePackage/${id}`).then((res) => {
			alert("successfully deleted")
			this.getDealData();
		}).catch((resspo) => {
			console.log("failed")
		})
	}

	render() {
		const { propertyData, name, duration, description, no_of_ads, amount } = this.state;

		return (
			<>
				<PanelHeader size="sm" />
				<div className="content ">
					<Row>
						<Col xs={12}>
							<Card>
								<CardHeader>
									<CardTitle tag="h4" className="font-weight-bold">Add packages</CardTitle>
								</CardHeader>
								<CardBody>

									<div style={{ display: 'flex' }} className="anchor">
										<div>
											<TextField id="outlined-basic" type="string" label="Package Name" variant="outlined" onChange={(e) => this.setState({ name: e.target.value })} style={{ marginRight: 25 }} required />
											<p className="alert-msg">{name?.length <= 3  && 'minimum length 3' || name?.length >= 8  && 'maxium length 10'}</p>
										</div>
										<div>
											<TextField id="outlined-basic" type="number" label="Duration" variant="outlined" onChange={(e) => this.setState({ duration: e.target.value })} style={{ marginRight: 25 }} required />
											<p className="alert-msg">{duration < 1 && 'should not less than 1'}</p>
										</div>
										<div>
											<TextField id="outlined-basic" label="Description" onChange={(e) => this.setState({ description: e.target.value })} variant="outlined" required />
											<p className="alert-msg">{description?.length < 10 && 'minimum 10 character'}</p>
										</div>
									</div>

									<div style={{ display: 'flex' }} className="anchor">
										<div>
											<TextField id="outlined-basic" type="number" label="No of ads" onChange={(e) => this.setState({ no_of_ads: e.target.value })} variant="outlined" style={{ marginRight: 25 }} required />
											<p className="alert-msg">{no_of_ads < 3 && 'minimum 3 Ads'}</p>
										</div>
										<div>
											<TextField id="outlined-basic" type="number" label="Amount" onChange={(e) => this.setState({ amount: e.target.value })} variant="outlined" style={{ marginRight: 25 }} required />
											<p className="alert-msg">{amount < 1 && 'must be more than 0'}</p>
										</div>
										<button className="btnInsert" onClick={this.submitForm} style={{width:'220px',marginTop:'0px',marginBottom:'15px',height:'55px',borderRadius:'10px',backgroundColor:'skyblue',border:'none',fontWeight:'bolder'}}>Insert</button>
									</div>
								</CardBody>
							</Card>
							<Card>
								<CardHeader>
									<CardTitle tag="h4" className="font-weight-bold">All packages</CardTitle>
								</CardHeader>
								<CardBody>

									<Table responsive>
										<thead className="text-primary font-weight-bold" style={{ border: '1px solid black' }}>
											<tr>
												<th className="text-center font-weight-bold" style={{ border: '1px solid black' }}>package Name</th>
												<th className="text-center font-weight-bold" style={{ border: '1px solid black' }}>Duration</th>
												<th className="text-center font-weight-bold" style={{ border: '1px solid black' }}>no of ads</th>
												<th className="text-center font-weight-bold" style={{ border: '1px solid black' }}>Amount</th>
												<th className="text-center font-weight-bold" style={{ border: '1px solid black' }}>Description</th>
												<th className="text-center font-weight-bold" style={{ border: '1px solid black' }}>Action</th>
											</tr>

										</thead>
										<tbody style={{ border: '1px solid black' }}>
											{propertyData.map((e, key) => {
												return (

													<tr key={`${key}-key`} className="text-left">
														<td className="text-center font-weight-bold" style={{ border: '1px solid black' }}>
															{e.name}
														</td>
														<td className="text-center font-weight-bold" style={{ border: '1px solid black' }}>
															{e.duration}
														</td>
														<td className="text-center font-weight-bold" style={{ border: '1px solid black' }}>
															{e.no_of_ads}
														</td>
														<td className="text-center font-weight-bold" style={{ border: '1px solid black' }}>
															{e.amount}
														</td>
														<td className="text-center font-weight-bold" style={{ border: '1px solid black' }}>
															{e.description}
														</td>
														<td className="text-left font-weight-bold" style={{ border: '1px solid black' }}>
															<ButtonM variant="contained" color="secondary" size="medium" onClick={() => this.deleteData(e._id)}>Delete</ButtonM>
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
		);
	}
}

export default Packages;
