import React, {  useState } from 'react';
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

export default function CityDailog(props) {
  const { _citys } = props.cityData;

  const [open, setOpen] = React.useState(false);
  const [citys, setcitys] = useState(_citys);
  // const [states, setstates] = useState(_states);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleUpdate = () => {
    if (citys?.lenght <= 2 || citys?.lenght >= 25) {
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
        const data = { citys };
        // console.log(props.cityId);
      axios.put(`http://localhost:3000/api/updateCity/${props.cityId}/details`,data).then((res) => {
        setOpen(false);
        window.location.reload(false);
      }).catch((resspo) => {
        console.log("failed")
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
      <Button variant="outlined" startIcon={<SaveIcon />} size="small" color="primary" onClick={handleClickOpen}>
        update
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} fullWidth>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          update city
        </DialogTitle>
        <DialogContent dividers>
          {/* <TextField id="standard-required" value={states} onChange={(e) => setstates(e.target.value)} variant="outlined" label="states Name" fullWidth style={marginfor.margins} required /> */}
          <TextField id="standard-required" value={citys} onChange={(e) => setcitys(e.target.value)} variant="outlined" label="city Name" fullWidth style={marginfor.margins} required />
        </DialogContent>
        <DialogActions>
          <Button type="button" startIcon={<SaveIcon />} size="small" autoFocus onClick={handleUpdate} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
      <ToastContainer />
    </div>
  );}