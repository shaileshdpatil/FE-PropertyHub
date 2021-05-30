import React from 'react'
import styles from './PaymentDetail.module.css';

const PaymentDetail = () => {
    return (
        <>
            <div className={styles.PaymentDetail}>
                <div className={styles.wrapper}>
                    <div className={styles.payment}>
                        <div className={styles.paymentLogo}>
                            <p>p</p>
                        </div>
                        <h2>Payment Detail</h2>
                        <div className={styles.form}>
                            <div className="card space icon-relative">
                                <label className={styles.label}> Name:</label>
                                <input type="text" className={styles.input} placeholder="Name" />
                                <i className="fas fa-user" />
                            </div>
                            <div className="card space icon-relative">
                                <label className={styles.label}>Email:</label>
                                <input type="text" className={styles.input} placeholder="Email" />
                                <i className="fas fa-user" />
                            </div>
                            <div className="card space icon-relative">
                                <label className={styles.label}>Transaction  ID:</label>
                                <input type="text" className={styles.input} data-mask="0000 0000 0000 0000" placeholder="Transaction id:" />
                                <i className="far fa-credit-card" />
                            </div>
                            <div className="card-grp space">
                                <div className="card-item icon-relative">
                                    <label className={styles.label}>Amount:</label>
                                    <input type="text" name="expiry-data" className={styles.input} placeholder="" />
                                    <i className="far fa-calendar-alt" />
                                </div>

                            </div>
                            <div className={styles.pbtn}>
                                Pay
      </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default PaymentDetail;
