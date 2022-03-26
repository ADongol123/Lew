import React from 'react';
import "./css/Footer.css";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { blue, red } from '@material-ui/core/colors';
function Footer() {
  return <div className='Footer'>
      <div className='Footer__Logo'>
          <img src='./images/logo.jpg' alt='logo'/>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia dese mollit anim id est laborum.</p>
           <p style={{color:'gray'}}>@2018 atu. All rights reserved.</p>     
      </div>
      <div className='Footer__Contacts'>
          <h3>Contact us</h3>
          <a>Email : office@email.com</a>
          <a>Phone: +977-98765431</a>
          <a>Address: Lazimpat, Kathmandu</a>
      </div>
      <div className='Footer__Links'>
          <h3>Quick Links</h3>
          <a>About US</a>
          <a> Teams of services</a>
          <a>Privacy Policy</a>
      </div>
      <div className='Footer__Social'>
          <h3>Follow us</h3>
          <a href='https://www.facebook.com/lazimpatengineering' target={'_blank'}><FacebookIcon style={{color:blue[800],fontSize: 40}}/></a>
          <a href='https://www.instagram.com/lazimpatenggworks/' target={'_blank'}><InstagramIcon style={{color:red[400], fontSize: 40}}/></a>
          <TwitterIcon style={{color:blue[400], fontSize: 40}}/>
      </div>
  </div>;
}

export default Footer;
