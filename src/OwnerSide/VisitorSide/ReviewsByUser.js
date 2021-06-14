import React from 'react';
import styles from './ReviewsByUser.module.css';

const ReviewsByUser = () => {
    return (
        <>
            <div className={styles.revSection}>

                <h2 className={styles.title}>Our Guests Love Us</h2>
                <p className={styles.note}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil laboriosam possimus perferendis non error neque.</p>
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
                            <div className={styles.descReview}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati eligendi suscipit illum officia ex eos.</div>
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
                            <div className={styles.descReview}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati eligendi suscipit illum officia ex eos.</div>
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
                            <div className={styles.descReview}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati eligendi suscipit illum officia ex eos.</div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default ReviewsByUser
