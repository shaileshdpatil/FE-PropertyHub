import React,{useState} from 'react';
import './Login.css';
import axios from "axios";

function Login() {
  const [email,setemail]= useState("");
  const [password,setpassword]=useState("");

  const LoginOwner = () => {
    axios.get('http:localhost:3000/api/ownerLogin',
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {;
       alert('success')
      });
  }
  return (
    <div className="main">
    <p className="sign" align="center" style={{fontSize:'30px'}}>Sign in</p>
    <form className="form1">

      <input className="un " type="text" align="center" placeholder="Username" value={email} onChange={(e)=>setemail(e.target.value)} />
      <input className="pass" type="password" align="center" placeholder="Password" value={password} onChange={(e)=>setpassword(e.target.value)}  />
      <button className="submit" align="center" onClick={LoginOwner}>Sign in</button>
      <p className="forgot" align="center">Forgot Password?</p>
         
      </form>      
    </div>
  )
}

export default Login;