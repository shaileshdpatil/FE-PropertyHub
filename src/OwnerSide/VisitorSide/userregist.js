import React, { Component } from "react";
import "./userregist.css";
import axios from 'axios';
import history from '../../history';
import HeaderNav from './HeaderNav';
import { NavLink } from 'react-router-dom';


class userregist extends Component {
    state = {
      Fname: '',
      Lname: '',
      email: '',
      phone: '',
      password: '',

    };
  submitForm = () => {
    const { Fname, Lname, email, phone, password } = this.state;
    const data = { Fname, Lname, email, phone, password }

    if (Fname?.length < 3 || password?.length <= 4) {
      alert("please fill data properly");
    }
    else {
      // console.log(data);
      axios.post("http://localhost:3000/api/user-reg", data)
        .then((res) => {
          alert("successfully registered");
          history.push("/visitor/Login-user");

        }).catch((error) => {
          console.log(error);
        })
    }
  }
  render() {
    return (
      <>
        <HeaderNav />
        <div className="f1">
          <div className="s1">
            <h1>Create Account</h1>
            <form >
              <div className="firstName">
                <label htmlFor="firstName">First Name</label>
                <input
                  className="error"
                  placeholder="First Name"
                  type="text"
                  required onChange={(e) => this.setState({ Fname: e.target.value })}
                />
              </div>
              <div className="lastName">
                <label htmlFor="lastName">Last Name</label>
                <input
                  className="error"
                  placeholder="Last Name"
                  type="text"
                  required onChange={(e) => this.setState({ Lname: e.target.value })}
                />

              </div>
              <div className="email">
                <label htmlFor="email">Email</label>
                <input
                  className="error"
                  placeholder="Email"
                  type="email"
                  required onChange={(e) => this.setState({ email: e.target.value })}
                />
              </div>

              <div className="email">
                <label htmlFor="phone">phone</label>
                <input
                  className="error"
                  placeholder="phone"
                  type="number"
                  required onChange={(e) => this.setState({ phone: e.target.value })}
                />

              </div>

              <div className="password">
                <label htmlFor="password">Password</label>
                <input
                  className="error"
                  placeholder="Password"
                  type="password"
                  required onChange={(e) => this.setState({ password: e.target.value })}
                />
              </div>
              <div className="createAccount">
                <button type="button" onClick={this.submitForm}>Create Account</button>
                <NavLink to="/visitor/Login-user">Already Have an Account?</NavLink>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default userregist;
