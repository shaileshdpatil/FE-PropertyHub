import React, { Component } from 'react';
import './Login.css';
import axios from "axios";
import history from '../../history';

 

class Login extends Component {
  state = {
    owenerLogin :[],
    email:'',
    password:''
  }

  login = () => {
    const {email,password} = this.state;
    const body = {email,password}
    axios.post('http://localhost:3000/api/ownerLogin',body
      ).then((res) => {
        console.log(res);
        const status = res.data.user.status;
        if (status) {
          history.push("/admin/dashboard");
        } else {
          alert('User is not verified');
        }
      }).catch((e)=>{
        // console.log(e);
        alert("failed to login")
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
          <br></br><a className="forgot" align="center" href="abc" style={{marginLeft:'40px'}}>Forgot Password?</a>
        </form>
      </div>
    )
  }
}
export default Login;
