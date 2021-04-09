import React from 'react'
import './allinone.css'

 export const RegisterOwner = () => {
    return (
        <>
            <div class="box">
                <h2 style={{marginLeft:'60px',marginTop:'10px',fontWeight:'bolder'}}>Register a owner</h2>
                <form style={{borderTop:'2px solid black'}}>
                <div class="inputbox">
                    <input type="text" name="username" autocomplete="off" required />
                    <span></span>
                    <label>Name</label>
                </div>
                <div class="inputbox">
                    <input type="text" name="username" autocomplete="off" required />
                    <span></span>
                    <label>Email</label>
                </div>
                <div class="inputbox">
                    <input type="text" name="username" autocomplete="off" required />
                    <span></span>
                    <label>Phone</label>
                </div>
                <div class="inputbox">
                    <input type="text" name="password" autocomplete="off" required />
                    <span></span>
                    <label>Password</label>
                </div>
                <a  href="http://localhost:3001/owner/Login-owner" style={{color:'black',fontWeight:'bolder'}}>Alredy have an account</a>
                <input type="submit" value="login" name="login" style={{marginBottom:'40px'}} />

                </form>

            </div>

        </>

    )
}
