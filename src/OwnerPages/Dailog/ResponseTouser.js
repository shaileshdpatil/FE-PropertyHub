import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button } from 'reactstrap';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Cookies from 'universal-cookie';
import axios from 'axios';

const cookies = new Cookies();


const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function ResponseTouser(prope) {
  const [message, setResponse] = useState('');
  const [amount, setAmount] = useState('');
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const sentResponse = () => {
    const inqueryID = prope.inqueryID;
    const userEmail = prope.email;
    const propertyId = prope.propertyId;
    const ownerID = cookies.get('ownerID', { path: '/owner' });
    const ownerName = cookies.get('OwnerName', { path: '/owner' });
    // console.log(ownerName);
    const data = { message, ownerID, userEmail, ownerName, amount, propertyId,inqueryID }


    if (message.length < 10) {
      alert('minimum 10 character required');
    } else if (amount < 40000) {
      alert('amount should greater then 40,000')
    } else {
      axios.post('http://localhost:3000/api/insertResponse', data)
        .then((res) => {
          alert('message sent successfully');
          window.location.reload();
        }).catch((erro) => {
          console.log(erro);
        })
      handleClose();
    }
  }
  return (
    <div>
      <Button type="button" className="btn btn-danger" onClick={handleClickOpen} style={{ marginRight: '5px', marginLeft: '5px' }}>response</Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose} style={{ width: '500px', fontSize: '15px' }}>
          Modal title
        </DialogTitle>
        <DialogContent dividers>
          <TextField
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            variant="filled"
            autoFocus
            label="Enter your Your last response amount"

            type="text"
            fullWidth

          />
          <TextField
            value={message}
            onChange={(e) => setResponse(e.target.value)}
            variant="filled"
            autoFocus
            label="Enter your Your response to that user"
            type="Number"
            fullWidth
            multiline
            rows={4}
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={sentResponse} color="primary">
            sent response
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}