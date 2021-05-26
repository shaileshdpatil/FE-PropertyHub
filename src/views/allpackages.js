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
	Col,
} from "reactstrap";
import './allpackages.css'
import CustomizedDialogs from './Dailog/Dailogpackage'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DeleteIcon from '@material-ui/icons/Delete';


// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import axios from "axios";

//styles
import './allpackages.css'

const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

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
		if (name?.length <= 3 || duration < 1 || no_of_ads < 3 || description?.length < 10 || amount < 1) {
			alert("fill properly");
		} else if(format.test(name)){
			console.log(format.test(name))
			alert('No special Character Allowed in Package name')
		} 
		else {
			axios.post("http://localhost:3000/api/packageadd", body)
				.then((response) => {
					toast.success('successfully inserted!', {
						position: "top-center",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					});
					this.getDealData()
				}).catch((errs) => {
					console.log(errs);
                    if (!errs.response.data.success) {
                        alert(errs.response.data.error)
                    }else{
						alert(errs.response.data.error)
					}
                })}

	}


	componentDidMount = () => {
		this.getDealData();
	}

	getDealData = () => {
		axios.get('http://localhost:3000/api/packageDisplay').then((response) => {
			this.setState({ propertyData: response.data });
		})
	}

	deleteData = (id) => {
		axios.delete(`http://localhost:3000/api/deletePackage/${id}`).then((res) => {
			toast.error('Successfully deleted!', {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			this.getDealData();
		}).catch((resspo) => {
			console.log("failed")
		})
	}

	render() {
		const { propertyData, name, duration, description, no_of_ads, amount } = this.state;

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
											<TextField id="outlined-basic" value={name} type="string" label="Package Name" variant="outlined" onChange={(e) => this.setState({ name: e.target.value })} style={{ marginRight: 25 }} required />
											<p className="alert-msg">{name?.length <= 3 && 'minimum length 3'}</p>
											<p className="alert-msg">{name?.length >= 10 && 'maxium length 10'}</p>
											<p className="alert-msg">{name.length > 1 && format.test(name) && 'Special Character not allowed'}</p>
										</div>
										<div>
											<TextField id="outlined-basic" value={duration} type="number" label="Duration (month)" variant="outlined" onChange={(e) => this.setState({ duration: e.target.value })} style={{ marginRight: 25 }} required />
											<p className="alert-msg">{duration < 1 && 'should br greater than 1'}</p>
											<p className="alert-msg">{duration >= 90 && 'should be less than 90'}</p>
										</div>
										<div>
											<TextField id="outlined-basic" value={description} label="Description" onChange={(e) => this.setState({ description: e.target.value })} variant="outlined" required />
											<p className="alert-msg">{description?.length < 10 && 'minimum 10 character'}</p>
											<p className="alert-msg">{description?.length >= 30 && 'maximum 30 character'}</p>
										</div>
									</div>

									<div style={{ display: 'flex' }} className="anchor">
										<div>
											<TextField id="outlined-basic" value={no_of_ads} type="number" label="No of ads" onChange={(e) => this.setState({ no_of_ads: e.target.value })} variant="outlined" style={{ marginRight: 25 }} required />
											<p className="alert-msg">{no_of_ads <= 3 && 'minimum 3 Ads'}</p>
											<p className="alert-msg">{no_of_ads >= 50 && 'maximum 50 Ads'}</p>
										</div>
										<div>
											<TextField id="outlined-basic" value={amount} type="number" label="Amount" onChange={(e) => this.setState({ amount: e.target.value })} variant="outlined" style={{ marginRight: 25 }} required />
											<p className="alert-msg">{amount < 1 && 'must be more than 0'}</p>
											<p className="alert-msg">{amount >= 500000 && 'must be less than 500000'}</p>
										</div>
										<button className="btnInsert" onClick={this.submitForm} style={{ width: '220px', marginTop: '0px', marginBottom: '15px', height: '55px', borderRadius: '10px', backgroundColor: 'skyblue', border: 'none', fontWeight: 'bolder' }}>Insert</button>
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
												<th className="text-center font-weight-bold" style={styleMargin.bordersHead}>package Name</th>
												<th className="text-center font-weight-bold" style={styleMargin.bordersHead}>Duration</th>
												<th className="text-center font-weight-bold" style={styleMargin.bordersHead}>no of ads</th>
												<th className="text-center font-weight-bold" style={styleMargin.bordersHead}>Amount</th>
												<th className="text-center font-weight-bold" style={styleMargin.bordersHead}>Description</th>
												<th className="text-center font-weight-bold" style={styleMargin.bordersHead}>Action</th>
											</tr>

										</thead>
										<tbody>
											{propertyData.map((e, key) => {
												const data = {
													_name: e.name,
													_duration: e.duration,
													_no_of_ads: e.no_of_ads,
													_amount: e.amount,
													_description: e.description
												}
												return (
													<tr key={`${key}-key`} className="text-left">
														<td className="text-center font-weight-bold" style={styleMargin.borders}>{e.name}</td>
														<td className="text-center font-weight-bold" style={styleMargin.borders}>{e.duration}</td>
														<td className="text-center font-weight-bold" style={styleMargin.borders}>{e.no_of_ads}</td>
														<td className="text-center font-weight-bold" style={styleMargin.borders}>{e.amount}</td>
														<td className="text-center font-weight-bold" style={styleMargin.borders}>{e.description}</td>
														<td className="text-left" style={{ border: '1px solid black', display: 'flex', justifyContent: 'center' }}>
															<CustomizedDialogs packageId={e._id} dialogueData={data} />
															<ButtonM  startIcon={<DeleteIcon />} variant="contained" color="secondary" size="small" onClick={() => this.deleteData(e._id)} style={{ marginLeft: '10px' }}>Delete</ButtonM>
														</td>
													</tr>
												)
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
		);
	}
}

export default Packages;