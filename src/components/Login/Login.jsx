import React, { Component } from 'react';
import './Login.css';
import axios from "axios";
import history from '../../history';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 import {NavLink} from 'react-router-dom';

class Login extends Component {
  state = {
    owenerLogin :[],
    email:'',
    password:''
  }

  login = () => {
    const {email,password} = this.state;
    const body = {email,password}
    axios.post('http://localhost:3000/api/AdminLogin',body
      ).then((res) => {
        history.push("/admin/dashboard");
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

  render() {
    return (
      <div className="main">
        <p className="sign" align="center" style={{ fontSize: '30px' }}>Sign in</p>
        <form className="form1">
          <input className="un " type="text" align="center" placeholder="Username" onChange={(e) => this.setState({ email: e.target.value })} />
          <input className="un " type="password" align="center" placeholder="password" onChange={(e) => this.setState({ password: e.target.value })} />
          <button className="submit" type="button" align="center" onClick={this.login}>Sign in</button>
          <br></br><NavLink className="forgot" align="center" href="abc" to="/visitor" style={{marginLeft:'40px'}}>Back to Home page!</NavLink>
        </form>
        <ToastContainer />
      </div>
    )
  }
}
export default Login;
