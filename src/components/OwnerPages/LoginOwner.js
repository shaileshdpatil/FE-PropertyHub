import React, { Component } from 'react'
import './allinone.css'
import axios from "axios";
import history from '../../history';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class LoginOwner extends Component {
    state = {
      owLogin :[],
      email:'',
      password:''
    }
  
    owlogin = () => {
      const {email,password} = this.state ;
      const body = {email,password}
      axios.post('http://localhost:3000/api/ownerLogin',body
        ).then((res) => {
          console.log(res);
          const status = res.data.user.status;
          if (status) {
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
            alert('User is not verified');
          }
        }).catch((e)=>{
          // console.log(e);
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

    render(){
    return (
        <>
            <div className="box">
                <h2 style={{ marginLeft: '90px', marginTop: '10px', fontWeight: 'bolder' }}>Login owner</h2>
                <form style={{ borderTop: '2px solid black' }}>
                    <div className="inputbox">
                        <input type="text" name="username" autoComplete="off" required onChange={(e) => this.setState({ email: e.target.value })}/>
                        <span></span>
                        <label>Email</label>
                    </div>

                    <div className="inputbox">
                        <input type="password" name="password" autoComplete="off" required  onChange={(e) => this.setState({ password: e.target.value })} />
                        <span></span>
                        <label>Password</label>
                    </div>
                    <div className="signup_link" style={{ marginLeft: '-120px' }}>
                        Not a member ? <a href="http://localhost:3001/owner/register-owner" style={{ marginTop: '-40px !important' }}> signup</a>
                    </div>
                        <a href="abc" style={{ fontWeight:'bolder',color:'black'}}>forget password</a>
                    {/* <button type="button" value="login" name="login" style={{ marginBottom: '40px' }}  /> */}
                    <br></br><button type="button" onClick={this.owlogin} style={{width:'300px',marginTop:'15px',marginBottom:'15px',height:'35px',borderRadius:'10px',backgroundColor:'skyblue'}}>Login</button>
                    
                </form>

            </div>
            <ToastContainer />
        </>

    )
    
    }

}
export default LoginOwner;
