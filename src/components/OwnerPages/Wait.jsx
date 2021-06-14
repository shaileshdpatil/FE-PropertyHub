import React from 'react'
import styles from './single.module.css';
import { HeaderNav } from '../../OwnerSide/VisitorSide/HeaderNav';
import {Link} from 'react-router-dom';

const Single = () => {
    return (
        <>
            <HeaderNav />
            <div className={styles.hh1}>
                <div className={styles.shailu}>
                    <h1>PLEASE WAIT !</h1>
                    <h1>your Account will be activeted in 24 hours</h1>
                </div>
                <div className={styles.p2}>
                    <Link to="/visitor/display-HomePage">
                    <button>Back to home page</button>
                    </Link>
                </div>
            </div>
        </>
    )

}
export default Single;
