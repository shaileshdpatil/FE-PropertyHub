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
import Resizer from 'react-image-file-resizer';
import Cookies from 'universal-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cookies = new Cookies();

const ownerID = cookies.get("ownerID", { path: '/owner' });

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

export default function InsertProperty({ propertylength }) {
  const [open, setOpen] = React.useState(false);
  const [citys, setCitys] = React.useState([]);
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
  const [City, setCity] = React.useState('');
  const [Images, setImages] = React.useState();
  const [builtyear, setbuiltyear] = React.useState(0);
  const [category, setcategory] = React.useState('');
  const [name, setname] = React.useState([]);

  const [owner, setOwnerData] = React.useState([]);

  const ads = owner[0]?.no_of_ads;

  const onChangeFile = (e) => {
    Resizer.imageFileResizer(e.target.files[0], 500, 2180, 'JPEG', 1080, 0, (uri) => {
      axios.post(`http://localhost:3000/api/uploadFile`, { image: uri }).then(res => {
        setImages(res.data)
      }).catch(err => {
        console.log("Image Upload Error: ", err);
      })
    }, 'base64')
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  const submitForm = (e) => {
    const ownerID = cookies.get("ownerID", { path: '/owner' });
    const OwnerName = cookies.get("OwnerName", { path: '/owner' });
    const data = { OwnerName, PropertyName, FullAddress, description, Price, No_of_Floors, No_of_Rooms, No_of_BeedRoom, No_of_Garage, No_of_Bathroom, No_of_Living_Room, sqrft, location, kitchen, City, ownerID, Images, builtyear, category };


    // console.log(ads);
    if(propertylength <= ads){
      alert("you should update your package!")
    }
    else if (PropertyName.length < 5) {
      toast.info('property name should be 5 charector long', {
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
    } else if (description.length < 15) {
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
    } else if (No_of_Floors < 0 || No_of_Rooms < 1) {
      toast.info('Rooms cannot be less then 0', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (No_of_BeedRoom < 0 || No_of_Garage < 0 || No_of_Bathroom < 0 || No_of_Living_Room < 0 || kitchen < 0) {
      toast.info('cannot be less then 0', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (sqrft < 50) {
      toast.info('sqerft should be grater then 50', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (builtyear < 1700 || builtyear > 2020) {
      toast.info('build year should be proper way!', {
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
      axios.post("http://localhost:3000/api/insertpropertyData/Patil", data)
        .then((res) => {
          handleClose();
          alert("successfully inserted !");
          window.location.reload();
        }).catch((error) => {
          console.log(error);
        })


    }
  }

  useEffect(() => {
    axios.get('http://localhost:3000/api/citydisp')
      .then((res) => {
        setCitys(res.data);
      }).catch((error) => {
        console.log(error);
      })
    categoryData();
    getOwnerDatas();
  }, [])

  const categoryData = () => {
    axios.get('http://localhost:3000/api/categoryDisplay')
      .then((res) => {
        setname(res.data);
      }).catch((error) => {
        console.log(error);
      })
  }

  const getOwnerDatas = () => {
    axios.get(`http://localhost:3000/api/ownerFind/${ownerID}`)
      .then((res) => {
        setOwnerData(res.data);
      }).catch((error) => {
        console.log(error);
      })
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
          <input type="file" filename="Images" accept="image/*" onChange={onChangeFile} style={{ width: '100%' }} />
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
          <textarea rows="3" value={FullAddress} onChange={(e) => setFullAddress(e.target.value)} placeholder="Enter your Full address here..!!" style={{ width: '100%', marginBottom: '5px' }} />
          <textarea rows="8" value={description} onChange={(e) => setdescription(e.target.value)} placeholder="Enter your Full description here..!!" style={{ width: '100%' }} />
          <TextField id="location" value={location} onChange={(e) => setlocation(e.target.value)} label="localtion" variant="outlined" fullWidth style={marginfor.marginBtn} />
          <TextField id="buildyear" value={builtyear} onChange={(e) => setbuiltyear(e.target.value)} type="Number" label="buil tyear" variant="outlined" fullWidth style={marginfor.marginBtn} />
          {/* <TextField id="Description" value={description} onChange={(e) => setdescription(e.target.value)} label="Description" variant="outlined" fullWidth style={marginfor.marginBtn} /> */}
          <TextField id="Price" value={Price} onChange={(e) => setPrice(e.target.value)} type="Number" label="Price" variant="outlined" fullWidth style={marginfor.marginBtn} />
          <TextField id="sqrft" value={sqrft} onChange={(e) => setsqrft(e.target.value)} label="sqrft" variant="outlined" fullWidth style={marginfor.marginBtn} />
          <TextField id="floor" value={No_of_Floors} onChange={(e) => setNo_of_Floors(e.target.value)} type="Number" label="No of Floors" variant="outlined" fullWidth style={marginfor.marginBtn} />
          <TextField id="room" value={No_of_Rooms} onChange={(e) => setNo_of_Rooms(e.target.value)} type="Number" label="No of Rooms" variant="outlined" fullWidth style={marginfor.marginBtn} />
          <TextField id="bed" value={No_of_BeedRoom} onChange={(e) => setNo_of_BeedRoom(e.target.value)} type="Number" label="No of BeedRoom" variant="outlined" fullWidth style={marginfor.marginBtn} />
          <TextField id="garage" value={No_of_Garage} onChange={(e) => setNo_of_Garage(e.target.value)} type="Number" label="No of Garage" variant="outlined" fullWidth style={marginfor.marginBtn} />
          <TextField id="bath" value={No_of_Bathroom} onChange={(e) => setNo_of_Bathroom(e.target.value)} type="Number" label="No of Bathroom" variant="outlined" fullWidth style={marginfor.marginBtn} />
          <TextField id="living" value={No_of_Living_Room} onChange={(e) => setNo_of_Living_Room(e.target.value)} type="Number" label="No of Living-Room" variant="outlined" fullWidth style={marginfor.marginBtn} />
          <TextField id="kitchen" value={kitchen} onChange={(e) => setkitchen(e.target.value)} label="kitchen" variant="outlined" fullWidth style={marginfor.marginBtn} />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={submitForm} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
      <ToastContainer />
    </div>
  );
}