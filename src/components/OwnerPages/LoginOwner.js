import React from 'react'
import './allinone.css'

export const LoginOwner = () => {
    return (
        <>
            <div class="box">
                <h2 style={{ marginLeft: '90px', marginTop: '10px', fontWeight: 'bolder' }}>Login owner</h2>
                <form style={{ borderTop: '2px solid black' }}>
                    <div class="inputbox">
                        <input type="text" name="username" autocomplete="off" required />
                        <span></span>
                        <label>Username</label>
                    </div>

                    <div class="inputbox">
                        <input type="text" name="password" autocomplete="off" required />
                        <span></span>
                        <label>Password</label>
                    </div>
                    <div class="signup_link" style={{ marginLeft: '-120px' }}>
                        Not a member ? <a href="http://localhost:3001/owner/register-owner" style={{ marginTop: '-40px !important' }}> signup</a>
                    </div>
                        <a href="#" style={{ fontWeight:'bolder',color:'black'}}>forget password</a>
                    <input type="submit" value="login" name="login" style={{ marginBottom: '40px' }} />

                </form>

            </div>

        </>

    )
}
