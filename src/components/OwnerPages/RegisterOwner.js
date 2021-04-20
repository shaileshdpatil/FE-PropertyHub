import React from 'react'
import styles from './allinone.module.css'
import axios from 'axios';
import history from '../../history';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        if(names?.length<3 || email?.length<=4 || password?.length<=4 || phone<=9 || phone>=12){
            alert("please fill data properly");
        }
        else{
            axios.post("http://localhost:3000/api/ownerRegister", data)
                .then((res) => {
                    toast.success('registration Successfull!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                    history.push("/owner/Login-owner");
    
                }).catch((error) => {
                    console.log(error);
                })
        }


    }

    render() {
        return (
            <>
                <div className={styles.box} style={{border:'1px solid black',backgroundColor:'#D4DFE6'}}>
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
                        <a href="http://localhost:3001/owner/Login-owner" style={{ color: 'black', fontWeight: 'bolder' }}>Alredy have an account</a>
                        {/* <button type="submit" value="Register" name="register" style={{ marginBottom: '40px' }} /> */}
                        <button type="button" onClick={this.submitForm} style={{width:'300px',marginTop:'15px',marginBottom:'15px',height:'35px',borderRadius:'10px',backgroundColor:'skyblue'}}>Register</button>
                    </form>

                </div>
                <ToastContainer />
            </>

        )
    }
}
export default ownerRegister;
