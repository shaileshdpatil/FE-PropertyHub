import React from 'react';
import p1 from './img/p1.jpg';
import p2 from './img/p2.jpg';
import './img/main.css';
import HeaderNav from './HeaderNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './img/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";
import FooterNav from './FooterNav';

const ListingProperty = () => {
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
							<div classNameName="mainmenu pull-left">
								<ul className="nav navbar-nav collapse navbar-collapse">
									<li><NavLink to="/visitor/display-HomePage">Home</NavLink></li>
									<li><NavLink to="/visitor/display-contactus">Contact</NavLink></li>
								</ul>
							</div>
						</div>
						<div classNameName="col-sm-3" style={{ marginTop: '10px' }}>
							<div className="search_box pull-right">
								<input type="text" placeholder="Search" />
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
											<Link data-toggle="collapse" data-parent="#accordian">
												<span className="badge pull-right"></span>
											Villa
										</Link>
										</h4>
									</div>
								</div>
								<div className="panel panel-default">
									<div className="panel-heading">
										<h4 className="panel-title">
											<Link data-toggle="collapse" data-parent="#accordian" >
												<span className="badge pull-right"></span>
											Row Houses
										</Link>
										</h4>
									</div>
								</div>

								<div className="panel panel-default">
									<div className="panel-heading">
										<h4 className="panel-title">
											<Link data-toggle="collapse" data-parent="#accordian">
												<span className="badge pull-right"></span>
											Residential
										</Link>
										</h4>
									</div>
								</div>
							</div>


							<div className="brands_products">

								<h2>Types</h2>
								<div className="brands-name">
									<ul className="nav nav-pills nav-stacked">
										<li><Link > <span className="pull-right">(50)</span>Villa</Link></li>
										<li><Link > <span className="pull-right">(56)</span>Row Houses</Link></li>
									</ul>
								</div>
							</div>


						</div>
					</div>

					<div className="col-sm-9 padding-right">
						<div className="features_items">

							<h2 className="title text-center">Features Items</h2>


							<div className="col-sm-4">
								<div className="product-image-wrapper">
									<div className="single-products">
										<div className="productinfo text-center">
											<Link to="/visitor/display-property-by-single-page">
												<img src={p1} alt="data" />
											</Link>
											<h2>$56</h2>
											<p>Easy Polo Black Edition</p>
										</div>
									</div>
								</div>
							</div>


							<div className="col-sm-4">
								<div className="product-image-wrapper">
									<div className="single-products">
										<div className="productinfo text-center">
											<Link to="/visitor/display-property-by-single-page">
												<img src={p2} alt="data" />
											</Link>
											<h2>$56</h2>
											<p>Easy Polo Black Edition</p>
										</div>
									</div>

								</div>
							</div>


							<div className="col-sm-4">
								<div className="product-image-wrapper">
									<div className="single-products">
										<div className="productinfo text-center">
											<Link to="/visitor/display-property-by-single-page">
												<img src={p1} alt="data" />
											</Link>
											<h2>$56</h2>
											<p>Easy Polo Black Edition</p>
										</div>

									</div>

								</div>
							</div>


							<div className="col-sm-4">
								<div className="product-image-wrapper">
									<div className="single-products">
										<div className="productinfo text-center">
											<Link to="/visitor/display-property-by-single-page">
												<img src={p1} alt="data" />
											</Link>
											<h2>$56</h2>
											<p>Easy Polo Black Edition</p>
										</div>

									</div>
								</div>
							</div>


							<div className="col-sm-4">
								<div className="product-image-wrapper">
									<div className="single-products">
										<div className="productinfo text-center">
											<Link to="/visitor/display-property-by-single-page">
												<img src={p2} alt="data" />
											</Link>
											<h2>$56</h2>
											<p>Easy Polo Black Edition</p>
										</div>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<FooterNav />
		</>
	);
}

export default ListingProperty;
