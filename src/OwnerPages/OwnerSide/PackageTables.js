import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

import styles from './package.module.css'

const Tables = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		axios.get('http://localhost:3000/api/packageDisplay')
			.then((res) => {
				setData(res.data);
			}).catch((err) => {
				console.log(err);
			})
	}, [])
	// console.log(data);
	return (
		<>
			{/* /className={styles.main} */}
			<section className={styles.pricingTable}>
				<div className={styles.container} >
					<div className={styles.heading}>
						<h2>Our packages</h2>
						<p>If you want to publish your own property then you must have to buy this package</p>
						<small>It will give you special privilages.</small>
					</div>
					<div className="row justify-content-md-center">
						{
							data.map((res, key) =>
								<div className="col-md-5 col-lg-3" key={`${key}-key`}>
									<div className={styles.item}>
										<div className={styles.heading}>
											<h3>{res.name}</h3>
										</div>
										<p>{res.description}</p>
										<div className={styles.features}>
											<h4><span className="feature">Duration</span> : <span className="value">{res.duration}</span></h4>
											<h4><span className="feature">No of Ads</span> : <span className="value">{res.no_of_ads}</span></h4>
										</div>
										<div className={styles.price}>
											<h4>₹{res.amount}</h4>
										</div>
										<Link to="/visitor/register-owner">
											<button className="btn btn-block btn-outline-primary" >BUY NOW</button>
										</Link>
									</div>
								</div>
							)

						}
					</div>
				</div>
			</section>


		</>
	)
}

export default Tables;