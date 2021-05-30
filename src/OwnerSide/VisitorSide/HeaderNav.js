import React, { Component } from 'react'
import styles from './HeaderNav.module.css';
import { NavLink } from 'react-router-dom'
import Cookies from 'universal-cookie';
const cookies = new Cookies();

var user = cookies.get('shailuKiCookie');
export default class HeaderNav extends Component {
  state={
    Auth:'',
  }

  btnClass={
    btnData:{
      color:'white',
      backgroundColor:'#021847',
      border:'none'
    }
  }
  
  Logout = () =>{
    var user = cookies.get('shailuKiCookie');
    if(user){
      cookies.remove(user); 
      console.log(user);
      alert("logout successfully");
      // window.location.reload(false);
    }else{
      alert("alredy logged out");
    }
  }
  
  render() {
    return (
      
      <header>
        <div className={styles.logo}><span className={styles.detailLogo}>PROPERTYHUB</span><br /></div>
        <nav>
          <div className={styles.navbar}>

          <NavLink to="/visitor/display-HomePage">Home</NavLink>
          <NavLink to="/visitor/display-ListingProperty">All Property</NavLink>
          <NavLink to="/visitor/display-about">About us</NavLink>
          <NavLink to="/visitor/display-contactus">Contact us</NavLink>
          {
          user
          ?<button style={this.btnClass.btnData} onClick={this.Logout}>Logout</button>
          :<NavLink className={styles.registerBtn} to="/visitor/Login-user">Login & Signup</NavLink>
          }
          </div>
        </nav>
      </header>


    )
  }
}


