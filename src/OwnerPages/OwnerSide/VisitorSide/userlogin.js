import React, { Component } from "react";
import "./userregist.css";
import axios from "axios";
import history from '../../history';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {NavLink} from 'react-router-dom'
import {HeaderNav} from './HeaderNav';
import Cookies from 'universal-cookie';

class LoginUser extends Component {
  state = {
    userLogin :[],
    email:'',
    password:'',
  }
  
  login = () => {
    const cookies = new Cookies();  
    const {email,password} = this.state;
    const body = {email,password}
    // console.log(body);

    axios.post('http://localhost:3000/api/userLogin',body
      ).then((res) => {
        cookies.set('shailuKiCookie',res.data.token, { path: '/'});
        // cookies.set('userId',res.data.payload.userLogin.id,{path:'/'});
        const mail = res.data.payload.userLogin.email;
        const name = res.data.payload.userLogin.Fname;
       cookies.set('userEmail',mail,{path:'/'});
       cookies.set('userName',name,{path:'/'});
        history.push("/visitor/display-HomePage");
        window.location.reload();
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
              <button type="button" onClick={this.login} style={{fontWeightL:'bolder'}}>Login</button>
              <NavLink to="/visitor/Regiset-user">Not Have an Account ?</NavLink>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
  </>
  );
} 
} 


export default LoginUser;
