import React,{useState} from 'react';
import "./css/homepage.css"
import Features from './Features';
import PeopleIcon from '@material-ui/icons/People';
import Footer from './Footer';
import Message from './Message';
import Services from './Services';
import { orange } from '@material-ui/core/colors';
function Homepage() {
  return <>
  <div className='Homepage'>
      <div className='Homepage__Banner'>
      <img src='./images/Banner.jpg' alt='banner'/>
      <h1 className='text'>LAZIMPAT ENGINEERING WORKS</h1>
      <button className='button1'>VIEW SERVICES</button>
      <button className='button2'>GET A QUOTE</button>
      </div>
      <div className='Homepage__Features'>
        <h1>OUR FEATURES</h1>
        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
        <Features/>
      </div>
      <div  className='Counts' style={{backgroundImage:"url(./images/Banner.jpg)"}}>
      <div className='employees'>
        <PeopleIcon style={{ fontSize: 50, color:orange[700]}}/>
          <p>100</p>
          <p>Employees</p>
        </div>
        <div className='clients'>
        <PeopleIcon style={{ fontSize: 50 , color:orange[700]}}/>
          <p>100</p>
          <p>Clients</p>
        </div>
        <div className='shipments'>
        <PeopleIcon style={{ fontSize: 50, color:orange[700]}}/>
          <p>100</p>
          <p>Shipments</p>
        </div>
      </div>
      <div className='Homepage__Services'>
        <h1>OUR SERIVICES</h1>
        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
       <Services/>
      </div>
      <div className='Sayings' style={{backgroundImage:"url(./images/banner2.jpg)"}}>
        <h1>What Our Clients Say</h1>
        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
        <div className='Sayings__cards'>
        <Message Name='Dikshya' Message='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.'/>
        <Message Name='Deepan' Message='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.'/>
        </div>
      </div>

  </div>;
  </>
}

export default Homepage;
