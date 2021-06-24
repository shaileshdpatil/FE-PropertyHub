import React from 'react';
import styles from './ReviewsByUser.module.css';

const ReviewsByUser = () => {
    return (
        <>
            <div className={styles.revSection}>

                <h2 className={styles.title}>Our Guests Love Us</h2>
                <p className={styles.note}>OUR GUEST ARE IMPRESSED!</p>
                <div className={styles.shailu}>
                    <div className={styles.reviews}>
                        <div className={styles.review}>

                            <div className={styles.bodyReview}>
                                <div className={styles.nameReview}>Nathan D.</div>
                                <div className={styles.placeReview}>Germany</div>
                                <div className={styles.rating}>
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star-half" />
                                </div>
                                <div className={styles.descReview}>"Very impressed how quickly and effective they are straight to the point and Impressive"</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.reviews}>
                        <div className={styles.review}>

                            <div className={styles.bodyReview}>
                                <div className={styles.nameReview}>Nathan D.</div>
                                <div className={styles.placeReview}>Germany</div>
                                <div className={styles.rating}>
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star-half" />
                                </div>
                                <div className={styles.descReview}>"We worked with Katrina for about 8 months before we finally bought our house!"</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.reviews}>
                        <div className={styles.review}>

                            <div className={styles.bodyReview}>
                                <div className={styles.nameReview}>Nathan D.</div>
                                <div className={styles.placeReview}>Germany</div>
                                <div className={styles.rating}>
                                        <i className="fas fa-star" />
                                </div>
                                <div className={styles.descReview}>"The home was competitively priced, expertly staged, and sold quick, with multiple ..."</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReviewsByUser
