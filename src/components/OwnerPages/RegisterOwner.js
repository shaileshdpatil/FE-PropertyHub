import React from 'react'
import styles from './allinone.module.css'
import axios from 'axios';
import history from '../../history';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from 'react-router-dom'


const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,   3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class ownerRegister extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ownerData: [],
            names: '',
            email: '',
            phone: 0,
            password: '',

        }
    }

    submitForm = () => {
        const { names, email, phone, password } = this.state;
        const data = { names, email, phone, password }

        if (names?.length < 3 || password?.length <= 4) {
            alert("please fill data properly");
        }
        else {
            if (names?.length < 3 || password?.length <= 4) {
                alert("please fill data properly")
            } else if (phone?.length < 10) {
                alert("Phone number must contain 10 digits")
            } else if (!EMAIL_REGEX.test(email)) {
                alert('Please enter valid Email Address !')
            } else {
                axios.post("http://localhost:3000/api/ownerRegister", data)
                    .then((res) => {
                        alert("successfully registered");
                        history.push("/visitor/Login-owner");

                    }).catch((error) => {
                        console.log(error);
                    })
            }


        }
    }
    render() {
        return (
            <>
                <div className={styles.boxs} style={{ border: '1px solid black', backgroundColor: '#D4DFE6' }}>
                    <h2 style={{ marginLeft: '60px', marginTop: '10px', fontWeight: 'bolder' }}>Register a owner</h2>
                    <form style={{ borderTop: '2px solid black' }}>
                        <div className={styles.inputbox}>
                            <input type="text" name="names" autoComplete="off" required onChange={(e) => this.setState({ names: e.target.value })} />
                            <span></span>
                            <label>Full Name</label>
                        </div>
                        <div className={styles.inputbox}>
                            <input type="text" name="email" autoComplete="off" required onChange={(e) => this.setState({ email: e.target.value })} />
                            <span></span>
                            <label>Email</label>
                        </div>
                        <div className={styles.inputbox}>
                            <input type="number" name="phone" autoComplete="off" required onChange={(e) => this.setState({ phone: e.target.value })} />
                            <span></span>
                            <label>Phone</label>
                        </div>
                        <div className={styles.inputbox}>
                            <input type="password" name="password" autoComplete="off" required onChange={(e) => this.setState({ password: e.target.value })} />
                            <span></span>
                            <label>Password</label>
                        </div>
                        <NavLink to="/visitor/Login-owner" style={{ color: 'black', fontWeight: 'bolder' }}>Alredy have an account</NavLink>
                        {/* <button type="submit" value="Register" name="register" style={{ marginBottom: '40px' }} /> */}
                        <button type="button" onClick={this.submitForm} style={{ width: '300px', marginTop: '15px', marginBottom: '15px', height: '35px', borderRadius: '10px', backgroundColor: 'skyblue' }}>Register</button>
                    </form>

                </div>
                <ToastContainer />
            </>

        )
    }
}
export default ownerRegister;
