import React, { Component } from "react";
import "./userregist.css";
import axios from "axios";
import history from '../../history';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {NavLink} from 'react-router-dom'
import HeaderNav from './HeaderNav';

class LoginUser extends Component {
 
    state = {
        userLogin :[],
        email:'',
        password:''
      }
  
  login = () => {
    const {email,password} = this.state;
    const body = {email,password}
    // console.log(body);
    axios.post('http://localhost:3000/api/userLogin',body
      ).then((res) => {
        history.push("/visitor/display-HomePage");
      }).catch((e)=>{
        toast.error('Email or password is wrong', {
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
  render()
  {
    return (
      <>
      <HeaderNav />
      <div className="f1">
        <div className="s1">
          <h1>User Login</h1>
          <form >
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className="error" 
                placeholder="Email"
                type="email"
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                className="error" 
                placeholder="Password"
                type="password"
                onChange={(e) => this.setState({ password: e.target.value })}
              />
            </div>
            <div className="createAccount">
              <button type="button" onClick={this.login}>Login</button>
              <NavLink to="/visitor/Regiset-user">Not Have an Account ?</NavLink>
            </div>
          </form>
        </div>
      </div>
  </>
  );
} 
} 


export default LoginUser;
