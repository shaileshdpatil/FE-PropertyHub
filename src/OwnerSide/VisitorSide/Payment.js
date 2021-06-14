import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import "./payment.css";
import { HeaderNav } from './HeaderNav';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import history from "../../history";

///visitor/Login-owner
// const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Payment = () => {
  const [pack, setPack] = useState([]);
  const [packageName, setPackage] = useState('');
  // const [email, setEmail] = useState('');
  const [transactionID, setTransaction] = useState('');
  const [amount, setAmount] = useState('');


  const { id } = useParams();
  // console.log(id);
  const submitRequest = () => {
    const data = { packageName, transactionID, amount };
    // console.log(data);
    if (packageName.length < 0) {
      toast.info('kindly select your package', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (amount < 100) {
      toast.info('amount should be greater then 100', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }else if(transactionID.length < 10){
      toast.info('transaction id should be greater then 10', {
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
      axios.put(`http://localhost:3000/api/updateOwnerDetails/${id}`, data)
        .then((res) => {
          toast.success("request submitted successfully !", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          // console.log(data);
          history.push('/visitor/owner-wait/hours');

        }).catch((err) => {
          toast.error('price value should greater then 50000 rupees', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          console.log(err);
        })
    }
  }

  useEffect(() => {
    axios.get('http://localhost:3000/api/packageDisplay')
      .then((res) => {
        setPack(res.data);
      }).catch((err) => {
        console.log(err);
      })
  }, [])
  // console.log(pack.name);
  return (
    <>
      <HeaderNav />
      <div className="c1">
        <h1>Please confirm your payment</h1>
        <p>Pay to this account and fill the form</p>
        <p>account No : 4270XXXXXXXX76</p>
        <div className="d1">
          <form >
            <div className="email">
              <label htmlFor="packages">Select your package</label>
              <select name="packages" id="packages" value={packageName} onChange={(e) => setPackage(e.target.value)}>
                <option>Select Package</option>
                {
                  pack.map((shailu, key) =>
                    <option value={shailu.name} key={`${key}-key`}>{shailu.name}</option>
                  )
                }

              </select>
            </div>
            <div className="email">
              {/* <label htmlFor="transection id">Registered Email id</label> */}
              {/* <input
                className="error"
                placeholder="email"
                type="email"
                value={email} onChange={(e) => setEmail(e.target.value)}
              /> */}
              <br />
              <label htmlFor="transection id">transection id</label>
              <input
                className="error"
                placeholder="transection id"
                type="text"
                value={transactionID} onChange={(e) => setTransaction(e.target.value)}
              />
            </div>

            <div className="email">
              <label htmlFor="amount">Amount</label>
              <input
                className="error"
                placeholder="Enter amount that paid"
                type="number"
                value={amount} onChange={(e) => { setAmount(e.target.value) }}
              />
            </div>
            <div className="createAccount">
              <button type="button" onClick={submitRequest}>submit</button>

            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default Payment;