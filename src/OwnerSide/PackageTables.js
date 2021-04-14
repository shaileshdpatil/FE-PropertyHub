import React from 'react'

import styles from './InsertProperty.module.css'

const tables = () => {
	return (
		<>
			{/* /className={styles.main} */}

			<section className={styles.pricingTable}>
				<div className={styles.container}>
					<div className={styles.heading}>
						<h2>Our packages</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
					</div>
					<div className="row justify-content-md-center">
						<div className="col-md-5 col-lg-3">
							<div className={styles.item}>
								<div className={styles.heading}>
									<h3>BASIC</h3>
								</div>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
								<div className={styles.features}>
									<h4><span className="feature">Full Support</span> : <span className="value">No</span></h4>
									<h4><span className="feature">Duration</span> : <span className="value">30 Days</span></h4>
									<h4><span className="feature">Storage</span> : <span className="value">10GB</span></h4>
								</div>
								<div className={styles.price}>
									<h4>$25</h4>
								</div>
								<button className="btn btn-block btn-outline-primary" type="submit">BUY NOW</button>
							</div>
						</div>
						<div className="col-md-5 col-lg-3">
							<div className={styles.item}>
								<div className={styles.ribbon}>Best Value</div>
								<div className={styles.heading}>
									<h3>PRO</h3>
								</div>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
								<div className={styles.features}>
									<h4><span className={styles.features}>Full Support</span> : <span className="value">Yes</span></h4>
									<h4><span className={styles.features}>Duration</span> : <span className="value">60 Days</span></h4>
									<h4><span className={styles.features}>Storage</span> : <span className="value">50GB</span></h4>
								</div>
								<div className={styles.price}>
									<h4>$50</h4>
								</div>
								<button className="btn btn-block btn-primary" type="submit">BUY NOW</button>
							</div>
						</div>
						<div className="col-md-5 col-lg-3">
							<div className={styles.item}>
								<div className={styles.heading}>
									<h3>PREMIUM</h3>
								</div>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
								<div className={styles.features}>
									<h4><span className={styles.feature}>Full Support</span> : <span className="value">Yes</span></h4>
									<h4><span className={styles.feature}>Duration</span> : <span className="value">120 Days</span></h4>
									<h4><span className={styles.feature}>Storage</span> : <span className="value">150GB</span></h4>
								</div>
								<div className={styles.price}>
									<h4>$150</h4>
								</div>
								<button className="btn btn-block btn-outline-primary" type="submit">BUY NOW</button>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}

export default tables;