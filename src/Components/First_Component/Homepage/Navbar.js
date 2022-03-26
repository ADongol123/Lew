import React, { useState,useEffect } from "react";
import "./css/Navbar.css";
import PhoneEnabledIcon from "@material-ui/icons/PhoneEnabled";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { orange } from '@material-ui/core/colors';
import { Avatar, Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { auth, provider } from "../../../firebase";
import { useDispatch,useSelector} from 'react-redux';
import {useHistory} from "react-router-dom"
import { selectUserName, selectUserPhoto, setSignout, setuserLogin } from "../../../features/user/userSlice";
function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const[start,setStart]=useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto= useSelector(selectUserPhoto);
  console.log(userName);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const useStyles = makeStyles((theme) => (
    {
    
     top:{
         display: "flex",
         alignItems:"center",
         
     }, 
     ftop:{
         display: "flex",
        
     },
     stop:{
         position: "absolute",
         top:"0px",
         right:"0px",
     }
    }
  )) 
  useEffect(()=>{
    auth.onAuthStateChanged(async(user)=>{
        if(user){
           dispatch(setuserLogin({
               name:user.displayName,
               email:user.email,
               photo:user.photoURL,
           }))
           
        }
    })
   },[])
  const signout = () =>{
    auth.signOut()
    .then(()=>{
        dispatch(setSignout());
    })
    alert("You havve beenn logged out");
}
  const signin = () =>{
    auth.signInWithPopup(provider).
        then((result)=>{
            let user= result.user;
            dispatch(setuserLogin({
                name:user.displayName,
                email:user.email,
                photo:user.photoURL,
            }))
            
     })
     setStart(false);
  }
  return (
    <div className="Header">
          <Modal open={start} onClose={(e)=> setStart(false)}>
            <div className='modal__main'>
              <h1>This is a model</h1>
              <button className="model__button"
              onClick={signin}
              >
                Login with google</button>
            </div>     
          </Modal>
      <div className="Header__info">
        <div className="logo">
          <img src="./images/logo.jpg" alt="logo"/>
          <button
            className="mobile-menu-icon"
            onClick={() => setIsMobile(!isMobile)}
          >
            {isMobile ? <CloseIcon /> : <MenuIcon sx={{ fontSize: 50 }} />}
          </button>
        </div>
        <div className="info_container">
          <div className="info">
            <PhoneEnabledIcon
            style={{
              color:orange[700],
              borderRadius: "50%",
              border: "2px solid orange",
              padding: "8px",
              fontSize: 40,
             }}
             />
            <div className="flex">
              <h4 style={{ color: "rgba(0,0,0,0.6)" }}>Call us</h4>
              <p>+977-987654321</p>
            </div>
          </div>
          <div className="info">
            <LocationOnOutlinedIcon
            style={{
              color: orange[700],
              borderRadius: "50%",
              border: "2px solid orange",
              padding: "8px",
              fontSize: 40,
            }}
            />
            <div className="flex">
              <h4 style={{ color: "rgba(0,0,0,0.6)" }}>Address</h4>
              <p>Lazimpat, Kathmandu</p>
            </div>
          </div>
          <div className="info">
            <AccessTimeIcon
            style={{
              color: orange[700],
              borderRadius: "50%",
              border: "2px solid orange",
              padding: "8px",
              fontSize: 40,
            }}
              sx={{
                color: "orange",
                borderRadius: "50%",
                border: "2px solid orange",
                padding: "8px",
                fontSize: 30,
              }}
            />
            <div className="flex">
              <h4 style={{ color: "rgba(0,0,0,0.6)" }}>Opening Hours</h4>
              <p>9AM - 5PM Mon-Fri</p>
            </div>
          </div>
        </div>
      </div>
      <nav className="Navbar">
        <ul
          className={isMobile ? "navItem_mobile" : "navItem"}
          onClick={() => setIsMobile(false)}
        >
          <li>
            <Link to="/about" className="link">
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/contact" className="link">
              CONTACT
            </Link>
          </li>
          <li> <Link to="/shop" className="link">
              SHOP
            </Link></li>
          <li>
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
        </ul>
        <div className={isMobile ? "login__mobile" : "login"}>
          {!userName?(<button
            className="button"
            aria-describedby={id}
            variant="contained"
            onClick={(e)=>setStart(true)}
          >LOGIN
          </button>):(<button
            className="button"
            aria-describedby={id}
            variant="contained"
            onClick={signout}
          >
            Logout
          </button>)}
         
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Typography sx={{ p: 1 }}>
              <button className="google">
                <img src="/images/google.svg" alt="" />
                Sign in with Google
              </button>
            </Typography>
          </Popover>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
