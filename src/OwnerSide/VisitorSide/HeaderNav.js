import React from 'react'
import styles from './HeaderNav.module.css';
import { NavLink } from 'react-router-dom'
import './modules/paymentData.css';

import Cookies from 'universal-cookie';
import history from '../../history';
const cookies = new Cookies();
var user = cookies.get('shailuKiCookie', { path: '/' });
const id = cookies.get('ownerID');

export const HeaderNav = () => {

  const btnClass = {
    btnData: {
      color: 'black',
      fontWeight: 'bold',
      backgroundColor: 'skyblue',
      border: 'none',
      borderRadius: '5px',
      width: '90px',
      height: '30px'
    }
  }

  const Logout = () => {
    cookies.remove("shailuKiCookie", { path: '/' });
    cookies.remove("userId", { path: '/' });
    cookies.remove("userName", { path: '/' });
    cookies.remove("userEmail", { path: '/' });

    alert("logout successfully");
    window.location.reload();
  }
  
  const ReloadOnce = () =>{
    // alert("Are you sure .!");
    history.push('/visitor/display-HomePage');
    window.location.reload()

  }
  return (

    <header style={{boxShadow:'25px black'}}>
      <NavLink to="/visitor/display-HomePage">
      <div className={styles.logo}><span className={styles.detailLogo}>PROPERTYHUB</span><br /></div>
      </NavLink>
      <nav>
        <div className={styles.navbar}>
          {
            id
              ? <NavLink to={`/visitor/Regisetered-payment/${id}`} id="paymentData">confirm your payment</NavLink>
              : <span></span>
          }


          <NavLink to="/visitor/display-HomePage" onClick={ReloadOnce}>Home</NavLink>
          <NavLink to="/visitor/display-ListingProperty">All Property</NavLink>
          <NavLink to="/visitor/display-about">About us</NavLink>
          <NavLink to="/visitor/display-contactus">Contact us</NavLink>
          {
            user
              ?
              <>
                <NavLink to="/visitor/response-from-owner">response</NavLink>
                <button style={btnClass.btnData} onClick={Logout}>Logout</button>
              </>
              : <NavLink className={styles.registerBtn} to="/visitor/Login-user">Login & Signup</NavLink>
          }
        </div>
      </nav>
    </header>


  )
}


