import React, { useEffect, useState } from 'react';
import styles from './PropertySingle.module.css'
import p1 from '../images/p1.jpg';
import { HeaderNav } from './HeaderNav';
import FooterNav from './FooterNav';
import InquieryToOwner from './Dailog/inquieryToOwner';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();


const PorpertySingle = () => {
    const userName = cookies.get("userName");

    const [single, setSingle] = useState('');
    const [comment, setComment] = useState("");
    const [review, setReview] = useState([]);

    const { id } = useParams();
    const data = { comment, id, userName };
    useEffect(() => {
        axios.get(`http://localhost:3000/api/propertyDisplayForSingle/${id}`)
            .then((response) => {
                setSingle(response.data);
            }).catch((error) => {
                console.log(error);
            })
        // console.log(setSingle);
        reviewBy();
        // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, [])

    const reviewBy = () => {
        axios.get(`http://localhost:3000/api/reviewByItId/${id}`)
            .then((res) => {
                setReview(res.data);
            }).catch((error) => {
                console.log(error);
            })
    }

    const InsertComment = (prope) => {
        const token = cookies.get("shailuKiCookie");
        if (!token) {
            alert("you should login first")
        } else {
            axios.post("http://localhost:3000/api/commentadd", data)
                .then((res) => {
                    alert("Your comment inserted successfully");
                    window.location.reload();
                }).catch((eror) => {
                    console.log(eror);
                })
        }
        
    }
    return (
        <>
            <HeaderNav />
            <section className="w3l-blog post-content py-5" style={{ marginLeft: '70px', marginRight: '70px' }}>
                <div className={styles.container}>
                    <div className={styles.titleSingle} key={single.id}>
                        <h2>Get your dream home in your Location</h2>
                    </div>
                    <div className="details-propertys">
                        <div className={styles.categorys} style={{ display: 'flex' }}>
                            <p>{single.FullAddress}</p>
                            <hr />
                            <div className={styles.details}>
                                <p><span className="fa fa-bed"></span> {single.No_of_BeedRoom} BedRoom</p>
                                <p><span className="fa fa-bath"></span> {single.No_of_Bathroom} Baths</p>
                                <p><span className="fa fa-share-square-o"></span> 1258 sqrft</p>
                            </div>
                            <div className="pricetag" style={{ marginLeft: '40%', fontSize: '25px', color: '#f93' }}>
                                <p>Rs.{single.Price}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 w3l-news">
                            <div className="blog-single-post">
                                <div className="single-post-image mb-5">
                                    <div className="owl-blog owl-carousel owl-theme">
                                        <div className="item">
                                            <div className="card">
                                                <img src={p1} style={{ width: '100%', marginLeft: '-100px' }} className="img-fluid radius-image" alt="imagess" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.singlePostContent}>
                                    <h3>Description</h3>
                                    <div className={styles.detailsofData}>
                                        <p >{single.description}</p>
                                        {/* <p className="mb-4">/p> */}
                                    </div>
                                    <div className="single-bg-white card" style={{ padding: '20px' }}>
                                        <h3 className="post-content-title mb-4">Property detail</h3>
                                        <div className={styles.detailsList} >
                                            <div style={{ margin: '8px' }}>
                                                {/* <p><strong>Property id :</strong> PRPT12345 </p> */}
                                                <p><strong>Property size :</strong> 1200sqft </p>
                                                <p><strong>Rooms :</strong> 2 </p>
                                                <p><strong>Bedrooms :</strong> 5 </p>
                                                <p><strong>Bathrooms :</strong> {single.No_of_Bathroom} </p>
                                            </div>
                                            <div style={{ margin: '8px' }}>
                                                {/* <p><strong>Exterior material :</strong> Brick </p> */}
                                                {/* <p><strong>Structure type :</strong> Wood </p> */}
                                                {/* <p><strong>Garage size :</strong> 15 cars </p> */}
                                            </div>
                                            <div style={{ margin: '8px' }}>
                                                <p><strong>Garages :</strong> 15 </p>
                                                <p><strong>Property Price :</strong> {single.Price} </p>
                                                <p><strong>Built Year :</strong> 2018 </p>
                                                {/* <p><strong>Avaiable from :</strong> Aug 2019 </p> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-bg-white card" style={{ padding: '20px' }}>
                                        <h3 className="post-content-title mb-4">Features</h3>
                                        <div className={styles.detailsList}>
                                            <div style={{ margin: '8px' }}>
                                                <p><strong>Air Conditioning </strong></p>
                                                <p><strong>Buil-In Wardrobes </strong> </p>
                                                <p><strong>Dishwasher</strong> </p>
                                            </div>
                                            <div style={{ margin: '8px' }}>
                                                <p><strong>Floor Coverings </strong> </p>
                                                <p><strong>Medical / Clinic </strong> </p>
                                                <p><strong>Fencing</strong> </p>
                                            </div>
                                            <div style={{ margin: '8px' }}>
                                                <p><strong>Internet and wifi </strong> </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-bg-white card" style={{ padding: '20px' }}>
                                        <h3 className="post-content-title mb-4">Location Details</h3>
                                        <div className={styles.detailsList}>
                                            <p>{single.description}</p>
                                        </div>
                                    </div>
                                    <div className="single-bg-white card" style={{ padding: '20px' }}>
                                        <textarea rows="3" placeholder="Enter your most important review here..!!" value={comment} onChange={(e) => { setComment(e.target.value) }} />
                                        <button type="submit" className="btn btn-primary btn-style w-100" onClick={InsertComment}>comment</button>
                                        <h3 className="post-content-title mb-4">Reviews by users</h3>
                                        {
                                            review.map((res,key) => {
                                                return (
                                                    <div key={`${key}-key`}>
                                                        <h6 style={{ fontWeight: 'bold', fontSize: '15px', marginLeft: '5px', color: 'green', backgroundColor: 'skyblue', padding: '10px' }} >{res.userName}</h6>
                                                        <div className={styles.detailsList}>
                                                            <p>{res.comment}</p>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }

                                    </div>
                                </div>


                            </div>
                        </div>

                        <div className="sidebar-side col-lg-4 col-md-12 col-sm-12 mt-lg-0 mt-5" style={{ display: 'flex', width: '500px' }}>
                            <aside className="sidebars card" style={{ borderTop: '2px solid black' }}>
                                <div className={styles.sidebarWidget}>
                                    <div className={styles.sidebarTitle}>
                                        <h4>Contact an Owner</h4>
                                    </div>

                                    <article className="post">
                                        <figure className="post-thumb"><img src="assets/images/l5.jpg" className="radius-image" alt="" />
                                        </figure>
                                        <div className="text mb-0">
                                            <div className="post-info">+(12) 324 567 89</div>
                                            <div className="post-info">companyrealty@mail.com</div>
                                        </div>
                                    </article>
                                    {/* <button type="submit" className="btn btn-primary btn-style w-100">Chat with Seller</button> */}
                                    <InquieryToOwner ownerID={single.ownerID} />
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </section>

            <FooterNav />
        </>
    )
}
export default PorpertySingle;