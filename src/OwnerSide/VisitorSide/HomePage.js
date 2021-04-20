import React, { Component } from 'react'
import HeaderNav from './HeaderNav';
import styles from './HomePage.module.css';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import home1 from '../images/home-1.jpg';
import home2 from '../images/home-2.jpg';
import home3 from '../images/home-3.jpg';
import home4 from '../images/home-4.jpg';
// import home5 from '../images/home-5.jpg';
// import home6 from '../images/home-6.jpg';
// import home7 from '../images/home-7.jpg';
// import home8 from '../images/home-8.jpg';
// import home9 from '../images/home-9.jpg';
// import home10 from '../images/home-10.jpg';
// import home11 from '../images/home-11.jpg';
import style from './HomePage.module.css';
import styless from './HomePage.scss';
import '@brainhubeu/react-carousel/lib/style.css';

export class HomePage extends Component {

    render() {
        return (
            <>
                <HeaderNav />
                <headersps>
                    <div className={styles.container}>
                        <div className={styles.row}>
                            <div className={styles.hPrimaryContent}>
                                <h1 style={{ color: 'white', fontWeight: 'bold' }}>Find Your Dream Home</h1>
                                <a href="/visitor/display-HomePage"><span className={styles.cta}>View Listings</span></a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.overlay}></div>
                </headersps>

                <div className={style.imageData}>
                    <h1>Property category</h1>
                    <Dots
                        // value={value}
                        // onChange={onChange}
                        thumbnails={[
                            (<img key={1} className={styless.preview} src={home1} />),
                            (<img key={2} className={styless.preview} src={home2} />),
                            (<img key={3} className={styless.preview} src={home3} />),
                            (<img key={4} className={styless.preview} src={home4} />),
                            (<img key={4} className={styless.preview} src={home4} />),
                        ]}
                    />
                </div>


            </>
        )
    }
}
export default HomePage;
