import React, { useEffect } from 'react';
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
import axios from 'axios';
import './data.css'
import Cookies from 'universal-cookie';
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

export default function InsertProperty() {
  const [open, setOpen] = React.useState(false);
  const [citys, setCitys] = React.useState([]);

  const [FileName, setFileName ] = React.useState();
  // elemnets of 
  const [PropertyName, setPropertyName] = React.useState("");
  const [FullAddress, setFullAddress] = React.useState("");
  const [description, setdescription] = React.useState("");
  const [Price, setPrice] = React.useState(0);
  const [No_of_Floors, setNo_of_Floors] = React.useState(0);
  const [No_of_Rooms, setNo_of_Rooms] = React.useState(0);
  const [No_of_BeedRoom, setNo_of_BeedRoom] = React.useState(0);
  const [No_of_Garage, setNo_of_Garage] = React.useState(0);
  const [No_of_Bathroom, setNo_of_Bathroom] = React.useState(0);
  const [No_of_Living_Room, setNo_of_Living_Room] = React.useState(0);
  const [location, setlocation] = React.useState("");
  const [sqrft, setsqrft] = React.useState(0);
  const [kitchen, setkitchen] = React.useState(0);
  const [City, setCity] = React.useState();

  const onChangeFile = (e) => {
    
    setFileName(e.target.files[0])
  };

  useEffect(() => {
    axios.get('http://localhost:3000/api/citydisp')
      .then((res) => {
        setCitys(res.data);
      }).catch((error) => {
        console.log(error);
      })
  }, [])

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  const submitForm = () => {
    const ownerID = cookies.get("ownerID", { path: '/owner' });
    
    const formData = new FormData();

    formData.append("Images",FileName);
     formData.append("PropertyName",PropertyName);
    formData.append("FullAddress",FullAddress);
    formData.append("description",description);
    formData.append("No_of_Floors",No_of_Floors);
    formData.append("No_of_Rooms",No_of_Rooms);
    formData.append("No_of_BeedRoom",No_of_BeedRoom);
    formData.append("No_of_Garage",No_of_Garage);
    formData.append("No_of_Bathroom",No_of_Bathroom);
    formData.append("No_of_Living_Room",No_of_Living_Room);
    formData.append("sqrft",sqrft);
    formData.append("location",location);
    formData.append("kitchen",kitchen);
    formData.append("Price",Price);
    formData.append("ownerID",ownerID);
    formData.append("City",City);
    
    console.log(ownerID);
    // const data = { PropertyName, FullAddress, description, Price, No_of_Floors, No_of_Rooms, No_of_BeedRoom, No_of_Garage, No_of_Bathroom, No_of_Living_Room, sqrft, location, kitchen, City, ownerID };
    if (PropertyName.length < 8) {
      alert("property name should be 10 charector long")
    } else if (FullAddress.length < 15) {
      alert("peoprty description should be 15 charector long")
    } else if (Price < 50000) {
      alert("price value should greater then 50000 rupees")
    }
    else {
      axios.post("http://localhost:3000/api/insertpropertyData/Patil", formData)
      .then((res) => {
        handleClose();
        alert("successully inserted property");
      }).catch((error) => {
        console.log("error");
      })
    }
  }

  const marginfor = {
    marginBtn: {
      marginBottom: '5px',
      marginTop: '5px'
    }
  }
  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen} style={{ position: 'absolute', left: '85%', marginTop: '-25px' }}>
        Insert a Property
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} >
        <DialogTitle id="customized-dialog-title" onClose={handleClose} style={{ width: '600px' }}>
          Insert a Property
        </DialogTitle>
        <DialogContent dividers>
          <TextField id="name" value={PropertyName} onChange={(e) => setPropertyName(e.target.value)} label="Property-Name" variant="outlined" fullWidth style={marginfor.marginBtn} />
          <TextField id="address" value={FullAddress} onChange={(e) => setFullAddress(e.target.value)} label="Full-Address" variant="outlined" fullWidth style={marginfor.marginBtn} />
          <input type="file" Filename="Images" onChange={onChangeFile} style={{width:'100%'}} />
          <select id="option" value={City} onChange={(e) => { setCity(e.target.value) }}>
            <option>Select city</option>
            {
              citys.map((cityData, key) =>
                <option value={cityData.citys} key={`${key}-key`}>{cityData.citys}</option>
              )
            }
          </select>
          <TextField id="Description" value={description} onChange={(e) => setdescription(e.target.value)} label="Description" variant="outlined" fullWidth style={marginfor.marginBtn} />
          <TextField id="Price" value={Price} onChange={(e) => setPrice(e.target.value)} type="Number" label="Price" variant="outlined" fullWidth style={marginfor.marginBtn} />
          <TextField id="floor" value={No_of_Floors} onChange={(e) => setNo_of_Floors(e.target.value)} type="Number" label="No of Floors" variant="outlined" fullWidth style={marginfor.marginBtn} />
          <TextField id="room" value={No_of_Rooms} onChange={(e) => setNo_of_Rooms(e.target.value)} type="Number" label="No of Rooms" variant="outlined" fullWidth style={marginfor.marginBtn} />
          <TextField id="bed" value={No_of_BeedRoom} onChange={(e) => setNo_of_BeedRoom(e.target.value)} type="Number" label="No of BeedRoom" variant="outlined" fullWidth style={marginfor.marginBtn} />
          <TextField id="garage" value={No_of_Garage} onChange={(e) => setNo_of_Garage(e.target.value)} type="Number" label="No of Garage" variant="outlined" fullWidth style={marginfor.marginBtn} />
          <TextField id="bath" value={No_of_Bathroom} onChange={(e) => setNo_of_Bathroom(e.target.value)} type="Number" label="No of Bathroom" variant="outlined" fullWidth style={marginfor.marginBtn} />
          <TextField id="living" value={No_of_Living_Room} onChange={(e) => setNo_of_Living_Room(e.target.value)} type="Number" label="No of Living-Room" variant="outlined" fullWidth style={marginfor.marginBtn} />
          <TextField id="olocation" value={location} onChange={(e) => setlocation(e.target.value)} label="location" variant="outlined" fullWidth style={marginfor.marginBtn} />
          <TextField id="sqrft" value={sqrft} onChange={(e) => setsqrft(e.target.value)} label="sqrft" variant="outlined" fullWidth style={marginfor.marginBtn} />
          <TextField id="kitchen" value={kitchen} onChange={(e) => setkitchen(e.target.value)} label="kitchen" variant="outlined" fullWidth style={marginfor.marginBtn} />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={submitForm} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}