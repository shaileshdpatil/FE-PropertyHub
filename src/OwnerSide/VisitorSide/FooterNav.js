import React, { Component } from 'react'
import styles from './HomePage.module.css';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

import './modules/patilkefooter.css';

const cookies = new Cookies();
const id = cookies.get('ownerID', { path: '/' });

export default class FooterNav extends Component {
    render() {
        return (
            <footer>
                <div className={styles.FooterNav}>
                    <p>
                        Copyrights to © Patil. All Rights Reserved 
                        {
                                id
                                ? <>
                                    <Link to={`/visitor/Regisetered-payment/${id}`} style={{ position:'absolute',left:'80%',textDecoration:'none'}} id="patilkefooter" >
                                        please confirm your payment
                                    </Link>
                                </>
                                :<span>and Contact Us: +91 90000 00000</span>
                        }

                    </p>
                </div>
            </footer>
        )
    }
}