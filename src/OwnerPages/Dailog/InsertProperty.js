import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import {TextField} from '@material-ui/core' 

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

export default function InsertProperty() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const marginfor={
    marginBtn:{
      marginBottom:'5px',
      marginTop:'5px'
    }
  }
  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen} style={{ position: 'absolute', left: '85%', marginTop: '-25px' }}>
        Insert a Property
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} >
        <DialogTitle id="customized-dialog-title" onClose={handleClose} style={{width:'600px'}}>
          Insert a Property
        </DialogTitle>
        <DialogContent dividers>
          <TextField id="outlined-basic"  label="Property-Name" variant="outlined" fullWidth style={marginfor.marginBtn}/>
          <TextField id="outlined-basic" label="Full-Address" variant="outlined" fullWidth style={marginfor.marginBtn}/>
          <TextField id="outlined-basic" label="Description" variant="outlined" fullWidth style={marginfor.marginBtn}/>
          <TextField id="outlined-basic" type="Number" label="Price" variant="outlined" fullWidth style={marginfor.marginBtn}/>
          <TextField id="outlined-basic" type="Number" label="No of Floors" variant="outlined" fullWidth style={marginfor.marginBtn}/>
          <TextField id="outlined-basic" type="Number" label="No of Rooms" variant="outlined" fullWidth style={marginfor.marginBtn}/>
          <TextField id="outlined-basic" type="Number" label="No of BeedRoom" variant="outlined" fullWidth style={marginfor.marginBtn}/>
          <TextField id="outlined-basic" type="Number" label="No of Garage" variant="outlined" fullWidth style={marginfor.marginBtn}/>
          <TextField id="outlined-basic" type="Number" label="No of Bathroom" variant="outlined" fullWidth style={marginfor.marginBtn}/>
          <TextField id="outlined-basic" type="Number" label="No of Living-Room" variant="outlined" fullWidth style={marginfor.marginBtn}/>
          <TextField id="outlined-basic" label="City" variant="outlined" fullWidth style={marginfor.marginBtn}/>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}