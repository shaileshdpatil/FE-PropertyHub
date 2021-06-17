import React, { Component } from 'react'
import {HeaderNav} from './HeaderNav';
import styles from './HomePage.module.css';
import { NavLink } from 'react-router-dom';
import '@brainhubeu/react-carousel/lib/style.css';
import Tables from '../PackageTables';
import FooterNav from './FooterNav';
// import ReviewsByUser from './ReviewsByUser';
import Property from './Property';
export class HomePage extends Component {

    render() {
        return (
            <>
                <HeaderNav />
                <div className={styles.headersps}>
                    <div className={styles.container}>
                        <div className={styles.row}>
                            <div className={styles.hPrimaryContent}>
                                <h1 style={{ color: 'white', fontWeight: 'bold' }}>Find Your Dream Home</h1>
                                <NavLink to="/visitor/display-ListingProperty"><span className={styles.cta}>View Listings</span></NavLink>
                            </div>
                        </div>
                    </div>
                    <div className={styles.overlay}></div>
                </div>
                <Property />
                <Tables />

                {/* <ReviewsByUser /> */}

                <FooterNav />
            </>
        )
    }
}
export default HomePage;
