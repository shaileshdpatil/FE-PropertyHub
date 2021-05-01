import React, { Component } from 'react'
import styles from './allinone.module.css'
import axios from "axios";
import history from '../../history';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {NavLink} from 'react-router-dom'
import HeaderNav from '../../OwnerSide/VisitorSide/HeaderNav';

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


class LoginOwner extends Component {
    state = {
      owLogin :[],
      email:'',
      password:''
    }
  
    owlogin = () => {
      const {email,password} = this.state ;
      const body = {email,password}

      if(!EMAIL_REGEX.test(email)){
        alert('Please enter valid Email Address !')
      }else{
        axios.post('http://localhost:3000/api/ownerLogin',body
          ).then((res) => {
            const status = res?.status;
            if (status === 200) {
              toast.success('Login Successfully!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
              history.push("/owner/Front-page-owner");
            } else {
              alert('User is not verified, If verified then please try again later after some time, Thank you');
            }
          }).catch((e)=>{
            console.log(e);
            toast.error('Enter valid details!', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });
          })
      }

    }

    render(){
    return (
        <>
            <HeaderNav />
            <div className={styles.boxs} style={{border:'1px solid black',backgroundColor:'#D4DFE6'}}>
                <h2 style={{ marginLeft: '90px', marginTop: '20px', fontWeight: 'bolder' }}>Login owner</h2>
                <form style={{ borderTop: '2px solid black' }}>
                    <div className={styles.inputbox}>
                        <input type="text" name="username" autoComplete="off" required onChange={(e) => this.setState({ email: e.target.value })}/>
                        <span></span>
                        <label>Email</label>
                    </div>

                    <div className={styles.inputbox}>
                        <input type="password" name="password" autoComplete="off" required  onChange={(e) => this.setState({ password: e.target.value })} />
                        <span></span>
                        <label>Password</label>
                    </div>
                    <div className="signup_link" style={{ marginLeft: '20px' }}>
                        Not a member ? <NavLink to="/visitor/register-owner" style={{ marginTop: '-40px',color:'red' }}> signup</NavLink>
                    </div>
                        <NavLink to="/visitor" style={{ fontWeight:'bolder',color:'black'}}>Back to home page!</NavLink>
                    {/* <button type="button" value="login" name="login" style={{ marginBottom: '40px' }}  /> */}
                    <br></br><button type="button" onClick={this.owlogin} style={{width:'300px',marginTop:'15px',marginBottom:'25px',height:'35px',borderRadius:'10px',backgroundColor:'skyblue'}}>Login</button>
                    
                </form>

            </div>
            <ToastContainer />
        </>

    )
    
    }

}
export default LoginOwner;
