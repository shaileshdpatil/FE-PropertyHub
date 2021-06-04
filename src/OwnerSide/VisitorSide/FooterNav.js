import React, { Component } from 'react'
import styles from './HomePage.module.css';


export default class FooterNav extends Component {
    render() {
        return (
            <footer>
                <div className={styles.FooterNav}>
                    <p>
                    Copyrights to © Patil. All Rights Reserved and Contact Us: +91 90000 00000
                    </p>
                </div>
            </footer>
        )
    }
}