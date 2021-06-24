import React, { useEffect, useState } from 'react';
import styles from './PropertySingle.module.css'
import { HeaderNav } from './HeaderNav';
import FooterNav from './FooterNav';
import InquieryToOwner from './Dailog/inquieryToOwner';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card } from 'reactstrap';

const cookies = new Cookies();

const userLogin = cookies.get('shailuKiCookie')


const PorpertySingle = (prope) => {
    const userName = cookies.get("userName");

    const [single, setSingle] = useState('');
    const [comment, setComment] = useState("");
    const [review, setReview] = useState([]);
    const [ownerD, setOwnerD] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        propertyWala();
        reviewBy();
        // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, [])

    const propertyWala = (e) => {
        axios.get(`http://localhost:3000/api/propertyDisplayForSingle/${id}`)
            .then((response) => {
                setSingle(response.data);
                displayOwner(response.data);
            }).catch((error) => {
                console.log(error);
            })
    }
    // console.log('==>',ownerID);
    const reviewBy = (e) => {
        // const ownerID = ownerID;
        // console.log(id);
        axios.get(`http://localhost:3000/api/reviewByItId/${id}`)
            .then((res) => {
                setReview(res.data);
                // console.log(res.data);
            }).catch((error) => {
                console.log(error);
            })
    }
    const displayOwner = (e) => {
        // console.log(e.ownerID);
        const ownerID = e.ownerID
        axios.get(`http://localhost:3000/api/propertyDisplayOwner/${ownerID}`)
            .then((res) => {
                setOwnerD(res.data);
                // console.log(res.data);
            }).catch((erro) => {
                console.log(erro);
            })
    }

    const InsertComment = (prope) => {
        const ownerID = single.ownerID;
        const propertyId = single._id;
        const data = { comment, ownerID, userName, propertyId };
        // console.log('==>',ownerID);
        const token = cookies.get("shailuKiCookie");
        if (!token) {
            toast.error('you should login first', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else if (comment.length < 10) {
            toast.error('You should enter minimum 10 charector', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
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
                        <h2 style={{textTransform:'capitalize'}}>{single.PropertyName} in {single.City}</h2>
                    </div>
                    <div className="details-propertys">
                        <div className={styles.categorys} style={{ display: 'flex' }}>
                            <p style={{ width: '400px' }}>{single.FullAddress}</p>
                            <hr />
                            <div className={styles.details}>
                                <p><span className="fa fa-bed"></span> {single.No_of_BeedRoom} BedRoom</p>
                                <p><span className="fa fa-bath"></span> {single.No_of_Bathroom} Baths</p>
                                <p><span className="fa fa-share-square-o"></span> {single.sqrft} sqrft</p>
                            </div>
                            <div className="pricetag" style={{ marginLeft: '40%', fontSize: '25px', color: '#f93' }}>
                                <p>Rs.{single.Price}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 w3l-news">
                            <div className="blog-single-post">
                                <div className="single-post-image mb-6">
                                    <div className="owl-blog owl-carousel owl-theme">
                                        <div className="item">
                                            <Card>
                                                <img src={single.Images?.url} style={{ width: '100%', marginLeft: '-100px' }} className="img-fluid radius-image" id="shailupatil" alt="imagess" />
                                            </Card>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.singlePostContent}>
                                    <Card style={{ padding: '20px' }}>
                                        <h3>Description</h3>
                                        <div className={styles.detailsofData}>
                                            <p >{single.description}</p>
                                            {/* <p className="mb-4">/p> */}
                                        </div>
                                    </Card>
                                    <div className="single-bg-white card" style={{ padding: '20px' }}>
                                        <h3 className="post-content-title mb-4">Property detail</h3>
                                        <div className={styles.detailsList} >
                                            <div style={{ margin: '8px' }}>
                                                {/* <p><strong>Property id :</strong> PRPT12345 </p> */}
                                                <p><strong>Property size :</strong> {single.sqrft} </p>
                                                <p><strong>Rooms :</strong> {single.No_of_Rooms} </p>
                                                <p><strong>Bedrooms :</strong> {single.No_of_BeedRoom} </p>
                                                <p><strong>Bathrooms :</strong> {single.No_of_Bathroom} </p>
                                            </div>
                                            <div style={{ margin: '8px' }}>
                                                {/* <p><strong>Exterior material :</strong> Brick </p> */}
                                                {/* <p><strong>Structure type :</strong> Wood </p> */}
                                                {/* <p><strong>Garage size :</strong> 15 cars </p> */}
                                            </div>
                                            <div style={{ margin: '8px' }}>
                                                <p><strong>Garages :</strong> {single.No_of_Garage} </p>
                                                <p><strong>Property Price :</strong> {single.Price} </p>
                                                <p><strong>Built Year :</strong> {single.builtyear} </p>
                                                <p><strong>Sqrft :</strong>  {single.sqrft} </p>

                                                {/* <p><strong>Avaiable from :</strong> Aug 2019 </p> */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="single-bg-white card" style={{ padding: '20px' }}>
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
                                    </div> */}
                                    <div className="single-bg-white card" style={{ padding: '20px' }}>
                                        <h3 className="post-content-title mb-4">Location Details</h3>
                                        <div className={styles.detailsList}>
                                            <p>{single.FullAddress}</p>
                                        </div>
                                    </div>
                                    <div className="single-bg-white card" style={{ padding: '20px' }}>
                                        {
                                            userLogin
                                                ? <>
                                                    <textarea rows="3" placeholder="Enter your most important review here..!!" value={comment} onChange={(e) => { setComment(e.target.value) }} />
                                                    <button type="submit" className="btn btn-primary btn-style w-100" onClick={InsertComment}>comment</button>
                                                </>
                                                : <p style={{color:'red',fontWeight:'bolder',textAlign:'center'}}>You should login first then you can comment here down ...!</p>
                                        }

                                        <h3 className="post-content-title mb-4">Reviews by users</h3>
                                        {
                                            review.map((res, key) => {
                                                return (
                                                    <div key={`${key}-key`}>
                                                        <h6 style={{ fontWeight: 'bold', fontSize: '15px', marginLeft: '5px', color: 'green', backgroundColor: 'skyblue', padding: '10px',borderRadius:'5px' }} >{res.userName}</h6>
                                                        <div className={styles.detailsList}>
                                                            <p>{res.comment}</p>
                                                            {/* {console.log(res.comment)} */}
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
                                            {
                                                userLogin
                                                    ? <>
                                                        {
                                                            ownerD.map((shailu, key) => {

                                                                return (
                                                                    <div key={`${key}-key`}>
                                                                        <p><strong>owner Name  :</strong> <strong style={{ color: 'green' }}> {shailu.names}</strong></p>
                                                                        <p><strong>owner email      :</strong> <strong style={{ color: 'green' }}> {shailu.email}</strong></p>
                                                                        <p><strong>owner Phone :</strong> <strong style={{ color: 'green' }}> {shailu.phone} </strong></p>
                                                                    </div>
                                                                )
                                                            }
                                                            )
                                                        }
                                                    </>
                                                    :
                                                    <><p style={{ color: 'red' }}>You should login first then you can see owner Details.</p>
                                                    </>
                                            }
                                            <p style={{ color: 'blue' }}>If you have any query then contact us</p>
                                            <p>PropertyHub@gmail.com</p>
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
            <ToastContainer />
        </>
    )
}
export default PorpertySingle;