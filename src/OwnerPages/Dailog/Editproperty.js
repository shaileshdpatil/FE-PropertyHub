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
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



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

export default function EditProperty(props) {

    const {_PropertyName,_FullAddress,_description,_Price,_No_of_Floors,_No_of_Rooms,_No_of_BeedRoom,_No_of_Garage,_No_of_Bathroom,_No_of_Living_Room,_City,_builtyear,_category,_location,_sqrft,_kitchen } = props.proData;

  const [open, setOpen] = React.useState(false);
  const [citys, setCitys] = React.useState([]);
  const [name, setname] = React.useState([]);
  // elemnets of 
  const [PropertyName, setPropertyName] = React.useState(_PropertyName);
  const [FullAddress, setFullAddress] = React.useState(_FullAddress);
  const [description, setdescription] = React.useState(_description);
  const [Price, setPrice] = React.useState(_Price);
  const [No_of_Floors, setNo_of_Floors] = React.useState(_No_of_Floors);
  const [No_of_Rooms, setNo_of_Rooms] = React.useState(_No_of_Rooms);
  const [No_of_BeedRoom, setNo_of_BeedRoom] = React.useState(_No_of_BeedRoom);
  const [No_of_Garage, setNo_of_Garage] = React.useState(_No_of_Garage);
  const [No_of_Bathroom, setNo_of_Bathroom] = React.useState(_No_of_Bathroom);
  const [No_of_Living_Room, setNo_of_Living_Room] = React.useState(_No_of_Living_Room);
  const [location, setlocation] = React.useState(_location);
  const [sqrft, setsqrft] = React.useState(_sqrft);
  const [kitchen, setkitchen] = React.useState(_kitchen);
  const [City, setCity] = React.useState(_City);
  const [category, setcategory] = React.useState(_category);
  const [builtyear,setbuiltyear] =React.useState(_builtyear);


  useEffect(() => {
    axios.get('http://localhost:3000/api/citydisp')
      .then((res) => {
        setCitys(res.data);
      }).catch((error) => {
        console.log(error);
      })
    }, [])
    
    useEffect(() => {
      axios.get('http://localhost:3000/api/categoryDisplay')
      .then((res) => {
        setname(res.data);
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
    
    const handleUpdate = () => {
      const data ={kitchen,sqrft,location,PropertyName,FullAddress,description,Price,No_of_Floors,No_of_Rooms,No_of_BeedRoom,No_of_Garage,No_of_Bathroom,No_of_Living_Room,City,builtyear,category};
      if (PropertyName.length < 8) {
      toast.info('property name should be 10 charector long', {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
    } else if (FullAddress.length < 15) {
      toast.info('peoprty Full address should be 15 charector long', {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
    }else if(description.length < 15 ){
      toast.info('peoprty description should be 15 charector long', {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
    } else if (Price < 50000) {
      toast.info('price value should greater then 50000 rupees', {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
    } else if(No_of_Floors<0 || No_of_Rooms<0 || No_of_BeedRoom<0 || No_of_Garage<0 || No_of_Bathroom<0 || No_of_Living_Room<0 || kitchen<0){
      toast.info('cannot be less then 0', {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
    } else if(sqrft < 100){
      alert("sqerft should be grater then 100")
    }else if(builtyear<1700 || builtyear >2020){
      alert("should be proper way!")
    }
    else {
      axios.put(`http://localhost:3000/api/updatepropertyp/${props.propertyId}/details`,data).then((res) => {
         setOpen(false);
         window.location.reload(false);
       }).catch((resspo) => {
          console.log("failed")
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
      {/* <Button className="btn-danger" onClick={handleClickOpen}>Edit</Button> */}
      <Button variant="contained" color="primary" onClick={handleClickOpen} style={{height:'35px'}}>
        Edit
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} >
        <DialogTitle id="customized-dialog-title" onClose={handleClose} style={{ width: '600px' }}>
          Edit property
        </DialogTitle>
        <DialogContent dividers>
          <TextField id="name" value={PropertyName} onChange={(e) => setPropertyName(e.target.value)} label="Property-Name" variant="outlined" fullWidth style={marginfor.marginBtn} />
           <select id="option" value={City} onChange={(e) => { setCity(e.target.value) }}>
            <option>Select city</option>
            {
              citys.map((cityData, key) =>
              <option value={cityData.citys} key={`${key}-key`}>{cityData.citys}</option>
              )
            }
          </select>

          <select id="option" value={category} onChange={(e) => { setcategory(e.target.value) }}>
            <option>Select Category</option>
            {
              name.map((cat, key) =>
              <option value={cat.name} key={`${key}-key`}>{cat.name}</option>
              )
            }
          </select>
          <textarea rows="3" value={FullAddress} onChange={(e) => setFullAddress(e.target.value)} placeholder="Enter your Full address here..!!" style={{width:'100%',marginBottom:'5px'}} />
            {/* <TextField id="address" value={FullAddress} onChange={(e) => setFullAddress(e.target.value)} label="Full-Address" variant="outlined" fullWidth style={marginfor.marginBtn} />          */}
          <textarea rows="8" value={description} onChange={(e) => setdescription(e.target.value)}placeholder="Enter your Description here..!!" style={{width:'100%'}} />
          {/* <TextField id="Description" value={description} onChange={(e) => setdescription(e.target.value)} label="Description" variant="outlined" fullWidth style={marginfor.marginBtn} /> */}
          <TextField id="olocation" value={location} onChange={(e) => setlocation(e.target.value)} label="location" variant="outlined" fullWidth style={marginfor.marginBtn} />
          <TextField id="buildyear" value={builtyear} onChange={(e) => setbuiltyear(e.target.value)} type="Number" label="buil tyear" variant="outlined" fullWidth style={marginfor.marginBtn} />
          <TextField id="sqrft" value={sqrft} onChange={(e) => setsqrft(e.target.value)} label="sqrft" variant="outlined" fullWidth style={marginfor.marginBtn} />
          <TextField id="Price" value={Price} onChange={(e) => setPrice(e.target.value)} type="Number" label="Price" variant="outlined" fullWidth style={marginfor.marginBtn} />
          <TextField id="floor" value={No_of_Floors} onChange={(e) => setNo_of_Floors(e.target.value)} type="Number" label="No of Floors" variant="outlined" fullWidth style={marginfor.marginBtn} />
          <TextField id="room" value={No_of_Rooms} onChange={(e) => setNo_of_Rooms(e.target.value)} type="Number" label="No of Rooms" variant="outlined" fullWidth style={marginfor.marginBtn} />
          <TextField id="bed" value={No_of_BeedRoom} onChange={(e) => setNo_of_BeedRoom(e.target.value)} type="Number" label="No of BeedRoom" variant="outlined" fullWidth style={marginfor.marginBtn} />
          <TextField id="garage" value={No_of_Garage} onChange={(e) => setNo_of_Garage(e.target.value)} type="Number" label="No of Garage" variant="outlined" fullWidth style={marginfor.marginBtn} />
          <TextField id="bath" value={No_of_Bathroom} onChange={(e) => setNo_of_Bathroom(e.target.value)} type="Number" label="No of Bathroom" variant="outlined" fullWidth style={marginfor.marginBtn} />
          <TextField id="living" value={No_of_Living_Room} onChange={(e) => setNo_of_Living_Room(e.target.value)} type="Number" label="No of Living-Room" variant="outlined" fullWidth style={marginfor.marginBtn} />
          <TextField id="kitchen" value={kitchen} onChange={(e) => setkitchen(e.target.value)} type="Number" label="kitchen" variant="outlined" fullWidth style={marginfor.marginBtn} />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleUpdate} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}