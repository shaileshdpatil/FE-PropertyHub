import React, { Component } from 'react'
import HeaderNav from './HeaderNav';
import styles from './HomePage.module.css';
import home1 from '../images/home-1.jpg';
import home2 from '../images/home-2.jpg';
import home3 from '../images/home-3.jpg';
import {NavLink} from 'react-router-dom';
import '@brainhubeu/react-carousel/lib/style.css';
import Tables from '../PackageTables';
import FooterNav from './FooterNav';
// import {} from 'react-router-dom'
import ReviewsByUser from './ReviewsByUser';

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

                <main>
                    <div className={styles.sectionhome}>
                        <div className={styles.containerHome}>
                            <div className="padding-20"></div>
                            <div className="row">
                                <div className="text-center" style={{border:'1px solid grey',margin:'1px',borderRadius:'10px'}}>
                                    <div className={styles.thumbnails}>
                                        <a href="products.html"><img src={home1} alt="Watches" /></a>
                                        <div className={styles.caption}>
                                            <h2>Kitchens</h2>
                                            <p>Original watches from the best brands.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center" style={{border:'1px solid grey',margin:'1px',borderRadius:'10px'}}>
                                    <div className={styles.thumbnails}>
                                        <a href="products.html"><img src={home2} alt="Watches" /></a>
                                        <div className={styles.caption}>
                                            <h2>BedRooms</h2>
                                            <p>Original watches from the best brands.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center" style={{border:'1px solid grey',margin:'1px',borderRadius:'10px'}}>
                                    <div className={styles.thumbnails}>
                                        <a href="products.html"><img src={home3} alt="Watches" /></a>
                                        <div className={styles.caption}>
                                            <h2>Halls</h2>
                                            <p>Original watches from the best brands.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="padding-20"></div>
                        </div>
                    </div>
                </main>
                <Tables />

            <ReviewsByUser />

                <FooterNav />
            </>
        )
    }
}
export default HomePage;
