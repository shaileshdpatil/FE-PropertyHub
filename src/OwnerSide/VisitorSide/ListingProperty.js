import React, { useEffect } from 'react';
import './img/main.css';
import { HeaderNav } from './HeaderNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './img/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from 'axios';
import './Dailog/inquery.css';

const ListingProperty = () => {
	const [property, setProperty] = React.useState([])

	useEffect(() => {
		axios.get('http://localhost:3000/api/propertyDisplay')
			.then((response) => {
				setProperty(response.data);
			}).catch((error) => {
				console.log(error);
			})
	}, [])

	return (
		<>
			<HeaderNav />
			<div className="header-bottom">
				<div className="container">
					<div className="row">
						<div className="col-sm-9">
							<div className="navbar-header">
								<button type="button" className="navbar-toggle" data-toggle="collapse"
									data-target=".navbar-collapse">
									<span className="sr-only">Toggle navigation</span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
								</button>
							</div>
							<div className="mainmenu pull-left">
								<ul className="nav navbar-nav collapse navbar-collapse">
									<li id="btn"><NavLink to="/visitor/display-HomePage" >Home</NavLink></li>
									<li id="btn"><NavLink to="/visitor/Login-owner">Insert a property</NavLink></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>


			<div className="container">
				<div className="row">
					<div className="col-sm-3">
						<div className="left-sidebar">
							<h2>Category</h2>
							<div className="panel-group category-products" id="accordian">
								<div className="panel panel-default">
									<div className="panel-heading">
										<h4 className="panel-title">
											<Link to="/visitor/display-property-by-single-page" data-toggle="collapse" data-parent="#accordian">
												<span className="badge pull-right"></span>
											Villa
										</Link>
										</h4>
									</div>
								</div>
								<div className="panel panel-default">
									<div className="panel-heading">
										<h4 className="panel-title">
											<Link to="/visitor/display-property-by-single-page" data-toggle="collapse" data-parent="#accordian" >
												<span className="badge pull-right"></span>
											Row Houses
										</Link>
										</h4>
									</div>
								</div>

								<div className="panel panel-default">
									<div className="panel-heading">
										<h4 className="panel-title">
											<Link to="/visitor/display-property-by-single-page" data-toggle="collapse" data-parent="#accordian">
												<span className="badge pull-right"></span>
											Residential
										</Link>
										</h4>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-9 padding-right">
						<div className="features_items">

							<h2 className="title text-center">Features Items</h2>

							{
								property.map((prope, key) => {
									return (
										<div className="col-sm-4" key={`${key}-key`}>
											<div className="product-image-wrapper">
												<div className="single-products" >
													<div className="productinfo text-center" >
														<img src={prope.Images?.url} alt="data9" />
														<p style={{ fontWeight: 'bold', marginTop: '5px' }} >{prope.PropertyName}</p>
														<p style={{ marginTop: '-10px' }} >--------{prope.City}--------</p>
														<h2 style={{ marginTop: '-10px' }} >Rs.{prope.Price}</h2>
														<Link to={`/visitor/display-property-by-single-page/${prope._id}`}>
															<button id="shailuBtn">View Details</button>
														</Link>
													</div>
												</div>
											</div>
										</div>

									)
								}
								)
							}
						</div>
					</div>
				</div>
			</div>
			{/* <FooterNav /> */}
		</>
	);
}

export default ListingProperty;
