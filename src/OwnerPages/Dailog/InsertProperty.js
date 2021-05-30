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
import axios from 'axios';
import Cat from './categoryD';
import States from './stateD';
import CityDD from './cityD';

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


  //elemnets of 
  const [PropertyName, setPropertyName ] = React.useState();
  const [FullAddress,setFullAddress] = React.useState();
  const [description,setdescription] = React.useState();
  const [Price,setPrice] = React.useState();
  const [No_of_Floors,setNo_of_Floors] = React.useState();
  const [No_of_Rooms,setNo_of_Rooms] = React.useState();
  const [No_of_BeedRoom,setNo_of_BeedRoom] = React.useState();
  const [No_of_Garage,setNo_of_Garage] = React.useState();
  const [No_of_Bathroom,setNo_of_Bathroom] = React.useState();
  const [No_of_Living_Room,setNo_of_Living_Room] = React.useState();
  const [location,setlocation] = React.useState();
  const [sqrft,setsqrft] = React.useState();
  const [kitchen,setkitchen] = React.useState();
  {props.citys}




  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };



  const submitForm = () => {
 
    const data = { PropertyName,FullAddress, description, Price,No_of_Floors,No_of_Rooms,No_of_BeedRoom,No_of_Garage,No_of_Bathroom,No_of_Living_Room,sqrft,location,kitchen,citys,states,category };
     console.log(data);
    // axios.post("http://localhost:3000/api/insertpropertyData/Patil",data).then(
    //   alert("successully inserted property"),
    //   handleClose(),
    // ).catch(
    //   console.log("error")
    // )
  
  }

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
        <TextField id="outlined-basic" value={PropertyName} onChange={(e) => setPropertyName(e.target.value)} label="Property-Name" variant="outlined" fullWidth style={marginfor.marginBtn}/>
          <TextField id="outlined-basic" value={FullAddress} onChange={(e) => setFullAddress(e.target.value)} label="Full-Address" variant="outlined" fullWidth style={marginfor.marginBtn}/>
          <TextField id="outlined-basic" value={description} onChange={(e) => setdescription(e.target.value)} label="Description" variant="outlined" fullWidth style={marginfor.marginBtn}/>
          <TextField id="outlined-basic" value={Price} onChange={(e) => setPrice(e.target.value)} type="Number" label="Price" variant="outlined" fullWidth style={marginfor.marginBtn}/>
          <TextField id="outlined-basic" value={No_of_Floors} onChange={(e) => setNo_of_Floors(e.target.value)} type="Number" label="No of Floors" variant="outlined" fullWidth style={marginfor.marginBtn}/>
          <TextField id="outlined-basic" value={No_of_Rooms} onChange={(e) => setNo_of_Rooms(e.target.value)} type="Number" label="No of Rooms" variant="outlined" fullWidth style={marginfor.marginBtn}/>
          <TextField id="outlined-basic" value={No_of_BeedRoom} onChange={(e) => setNo_of_BeedRoom(e.target.value)} type="Number" label="No of BeedRoom" variant="outlined" fullWidth style={marginfor.marginBtn}/>
          <TextField id="outlined-basic" value={No_of_Garage} onChange={(e) => setNo_of_Garage(e.target.value)} type="Number" label="No of Garage" variant="outlined" fullWidth style={marginfor.marginBtn}/>
          <TextField id="outlined-basic" value={No_of_Bathroom} onChange={(e) => setNo_of_Bathroom(e.target.value)} type="Number" label="No of Bathroom" variant="outlined" fullWidth style={marginfor.marginBtn}/>
          <TextField id="outlined-basic" value={No_of_Living_Room} onChange={(e) => setNo_of_Living_Room(e.target.value)} type="Number" label="No of Living-Room" variant="outlined" fullWidth style={marginfor.marginBtn}/>
          <States />
          <CityDD />
          <TextField id="outlined-basic" value={location} onChange={(e) => setlocation(e.target.value)} label="location" variant="outlined" fullWidth style={marginfor.marginBtn}/>
          <TextField id="outlined-basic" value={sqrft} onChange={(e) => setsqrft(e.target.value)} label="sqrft" variant="outlined" fullWidth style={marginfor.marginBtn}/>
          <TextField id="outlined-basic" value={kitchen} onChange={(e) => setkitchen(e.target.value)} label="kitchen" variant="outlined" fullWidth style={marginfor.marginBtn}/>
          <Cat />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} onClick={submitForm} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}