import React, { Component } from "react";
import "./userregist.css";
import axios from 'axios';
import history from '../../history';
import { HeaderNav } from './HeaderNav';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
      toast.info('please fill data properly', {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
    }
    else if (phone?.length < 10) {
      toast.info('please inter must be 10 digit', {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
    }
    else if (phone < 50000) {
      toast.info('please enter proper number', {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
    }
    else if (!EMAIL_REGEX.test(email)) {
      toast.info('enter valid email', {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
    }
    else {
      axios.post("http://localhost:3000/api/user-reg", data)
        .then((res) => {
          toast.success('successfully registered!', {
						position: "top-center",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					});
          history.push("/visitor/Login-user");

        }).catch((errs) => {
          if (!errs.response.data.success) {
            toast.error(errs.response.data.error, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
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
        <ToastContainer />
      </>
    );
  }
}

export default userregist;
