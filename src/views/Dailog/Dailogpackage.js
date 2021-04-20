import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import SaveIcon from '@material-ui/icons/Save';

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

export default function CustomizedDialogs(props) {
  const { _name, _duration, _no_of_ads, _amount, _description } = props.dialogueData;

  const [open, setOpen] = React.useState(false);
  const [name, setname] = useState(_name);
  const [amount, setamount] = useState(_amount);
  const [no_of_ads, setno_of_ads] = useState(_no_of_ads);
  const [description, setdescription] = useState(_description);
  const [duration, setduration] = useState(_duration);

  const handleClickOpen = () => {
    // console.log('=========>', props.packageId);
    setOpen(true);
  };
  const handleClose = () => {
    console.log("I am here")
    setOpen(false);
  };
  const handleUpdate = () => {
    if (name?.lenght <= 2 || amount <= 1 || no_of_ads <= 3 || description?.lenght <= 5 || duration?.leght <= 3) {
      // alert("please fill data properly");
      toast.error('plasase fill data properly!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      const data = { name, amount, no_of_ads, description, duration }
      // console.log('=========>', props.packageId);
      axios.put(`http://localhost:3000/api/updatePackage/${props.packageId}/details`, data).then((res) => {
        toast.success('Successfully updated!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setOpen(false);
      }).catch((errs) => {
        alert(errs.response.data.error)
      })
    }
  }


  const marginfor = {
    margins: {
      marginTop: '8px',
      marginBottom: '10px'
    }
  }

  return (
    <div>
      <Button variant="outlined" color="primary" size="small" startIcon={<SaveIcon />} onClick={handleClickOpen}>
        update
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} fullWidth>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          update packages
        </DialogTitle>
        <DialogContent dividers>
          <TextField id="standard-required" value={name} onChange={(e) => setname(e.target.value)} variant="outlined" label="Package Name" fullWidth style={marginfor.margins} required />
          <TextField id="standard-required" value={amount} onChange={(e) => setamount(e.target.value)} type="Number" variant="outlined" label="Amount" fullWidth style={marginfor.margins} required />
          <TextField id="standard-required" value={no_of_ads} onChange={(e) => setno_of_ads(e.target.value)} type="Number" variant="outlined" label="No of ads" fullWidth style={marginfor.margins} required />
          <TextField id="standard-required" value={description} onChange={(e) => setdescription(e.target.value)} variant="outlined" label="Description" fullWidth style={marginfor.margins} required />
          <TextField id="standard-required" value={duration} onChange={(e) => setduration(e.target.value)} type="Number" variant="outlined" label="Duration" fullWidth style={marginfor.margins} required />
        </DialogContent>
        <DialogActions>
          <Button autoFocus startIcon={<SaveIcon />} onClick={handleUpdate} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
      <ToastContainer />
    </div>
  );
}