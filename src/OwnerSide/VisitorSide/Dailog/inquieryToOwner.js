import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './inquery.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';

//axios
import axios from 'axios';

import Cookies from 'universal-cookie';
const cookies = new Cookies();

var userLogin = cookies.get('shailuKiCookie')
var userName = cookies.get('userName', { path: '/' });
var userEmail = cookies.get('userEmail', { path: '/' });

export default function InquieryToOwner(props) {
  const [open, setOpen] = React.useState(false);
  const [amount, setAmount] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [phone, setPhone] = React.useState('');

  const {id} = useParams();
  const ownerID = props.ownerID;

  const handleClickOpen = () => {
    // console.log(ownerID);
    userLogin
      ? setOpen(true)
      : alert("you should login first")
  };

  const handleClose = () => {
    setOpen(false);
  };

  const SentData = () => {
    // console.log(id);
    const propertyId = id;
    const data = { userName, userEmail, amount, message, phone, ownerID , propertyId }
    // console.log(ownerID);
    if (message.length < 10) {
      toast.info('Message must be 10 charector long', {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
    } else if (phone < 10) {
      toast.info('Phone number must be 10 Digit', {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
    } else if (amount < 500) {
      toast.info('enter valid amount', {
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
      axios.post("http://localhost:3000/api/inqueryProperty", data)
        .then((res) => {
          toast.success('message sent successfully!', {
						position: "top-center",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					});
        }).catch((error) => {
          alert("failed to sent message");
        })
      handleClose();
    }
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen} style={{ width: '100%', color: 'white' }}>
        Chat with Seller
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText style={{ width: '500px', fontSize: '15px' }}>
            Here you can chat with owner and sent your message.
          </DialogContentText>
          <TextField
            variant="filled"
            autoFocus
            label="Enter your Amount that you want for this property"
            type="Number"
            fullWidth
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <TextField
            variant="filled"
            autoFocus
            label="Enter your Phone number"
            type="Number"
            fullWidth
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <TextField
            variant="filled"
            label="Enter your message here"
            multiline
            rows={4}
            fullWidth
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={SentData} color="primary">
            Sent
          </Button>
        </DialogActions>
      </Dialog>
      <ToastContainer />
    </div>
  );
}