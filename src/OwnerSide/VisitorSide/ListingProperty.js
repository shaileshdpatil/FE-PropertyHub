import React from 'react';
import p1 from './img/p1.jpg';
import p2 from './img/p2.jpg';
import './img/main.css';
import HeaderNav from './HeaderNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './img/bootstrap.min.css';
import styles from './HomePage.module.css';
import {NavLink} from 'react-router-dom';

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
            <div classNameName="col-sm-3">
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
										<a data-toggle="collapse" data-parent="#accordian" href="#sportswear">
											<span className="badge pull-right"></span>
											Villa
										</a>
									</h4>
								</div>
							</div>
							<div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title">
										<a data-toggle="collapse" data-parent="#accordian" href="#mens">
											<span className="badge pull-right"></span>
											Row Houses
										</a>
									</h4>
								</div>
							</div>

							<div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title">
										<a data-toggle="collapse" data-parent="#accordian" href="#womens">
											<span className="badge pull-right"></span>
											Residential
										</a>
									</h4>
								</div>
							</div>
							<div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title"><a href="#">Shops</a></h4>
								</div>
							</div>
							<div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title"><a href="#">Garage</a></h4>
								</div>
							</div>
						</div>
					

						<div className="brands_products">
						
							<h2>Types</h2>
							<div className="brands-name">
								<ul className="nav nav-pills nav-stacked">
									<li><a href="!#"> <span className="pull-right">(50)</span>Villa</a></li>
									<li><a href="!#"> <span className="pull-right">(56)</span>Row Houses</a></li>
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
										<img src={p1} />
										<h2>$56</h2>
										<p>Easy Polo Black Edition</p>
										<a href="#" className="btn btn-default add-to-cart"><i
												className="fa fa-shopping-cart"></i>Add to cart</a>
									</div>
									<div className="product-overlay">
										<div className="overlay-content">
											<h2>$56</h2>
											<p>Easy Polo Black Edition</p>
											<a href="#" className="btn btn-default add-to-cart"><i
													className="fa fa-shopping-cart"></i>Add to cart</a>
										</div>
									</div>
								</div>
							</div>
						</div>


						<div className="col-sm-4">
							<div className="product-image-wrapper">
								<div className="single-products">
									<div className="productinfo text-center">
										<img src={p2} />
										<h2>$56</h2>
										<p>Easy Polo Black Edition</p>
										<a href="#" className="btn btn-default add-to-cart"><i
												className="fa fa-shopping-cart"></i>Add to cart</a>
									</div>
									<div className="product-overlay">
										<div className="overlay-content">
											<h2>$56</h2>
											<p>Easy Polo Black Edition</p>
											<a href="#" className="btn btn-default add-to-cart"><i
													className="fa fa-shopping-cart"></i>Add to cart</a>
										</div>
									</div>
								</div>
							
							</div>
						</div>


						<div className="col-sm-4">
							<div className="product-image-wrapper">
								<div className="single-products">
									<div className="productinfo text-center">
										<img src={p1}/>
										<h2>$56</h2>
										<p>Easy Polo Black Edition</p>
										<a href="#" className="btn btn-default add-to-cart"><i
												className="fa fa-shopping-cart"></i>Add to cart</a>
									</div>
									<div className="product-overlay">
										<div className="overlay-content">
											<h2>$56</h2>
											<p>Easy Polo Black Edition</p>
											<a href="#" className="btn btn-default add-to-cart"><i
													className="fa fa-shopping-cart"></i>Add to cart</a>
										</div>
									</div>
								</div>
								
							</div>
						</div>

						
						<div className="col-sm-4">
							<div className="product-image-wrapper">
								<div className="single-products">
									<div className="productinfo text-center">
										<img src={p1} />
										<h2>$56</h2>
										<p>Easy Polo Black Edition</p>
										<a href="#" className="btn btn-default add-to-cart"><i
												className="fa fa-shopping-cart"></i>Add to cart</a>
									</div>
									<div className="product-overlay">
										<div className="overlay-content">
											<h2>$56</h2>
											<p>Easy Polo Black Edition</p>
											<a href="#" className="btn btn-default add-to-cart"><i
													className="fa fa-shopping-cart"></i>Add to cart</a>
										</div>
									</div>
								</div>
							</div>
						</div>


						<div className="col-sm-4">
							<div className="product-image-wrapper">
								<div className="single-products">
									<div className="productinfo text-center">
										<img src={p2} />
										<h2>$56</h2>
										<p>Easy Polo Black Edition</p>
										<a href="#" className="btn btn-default add-to-cart"><i
												className="fa fa-shopping-cart"></i>Add to cart</a>
									</div>
									<div className="product-overlay">
										<div className="overlay-content">
											<h2>$56</h2>
											<p>Easy Polo Black Edition</p>
											<a href="#" className="btn btn-default add-to-cart"><i
													className="fa fa-shopping-cart"></i>Add to cart</a>
										</div>
									</div>
								</div>
							
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>


		<footer>
                <div className={styles.FooterNav}>
                    <p>
                    Copyrights to © shah. All Rights Reserved and Contact Us: +91 90000 00000
                    </p>
                </div>
            </footer>
    </>
  );
}

export default ListingProperty;
