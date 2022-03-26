import React from 'react';
import "./css/Services.css";
import PeopleIcon from '@material-ui/icons//People';
function Services() {
  return <div className="Services__container">
      <div className='Services'>
        <div className='Services__card'>
        <PeopleIcon sx={{ fontSize: 50, color: "orange"}}/>
        <div className='Services__detail'>
        <h3>MS Fabrication Works</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        </div>
        <div className='Services__card'>
        <PeopleIcon sx={{ fontSize: 50, color: "orange"  }}/>
        <div className='Services__detail'>
        <h3>Steel Railing</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        </div>
        </div>
        <div className='Services'>
        <div className='Services__card'>
        <PeopleIcon sx={{ fontSize: 50, color: "orange"}}/>
        <div className='Services__detail'>
        <h3>Industrial and Commercial Roofing Services</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        </div>
        <div className='Services__card'>
        <PeopleIcon sx={{ fontSize: 50, color: "orange"  }}/>
        <div className='Services__detail'>
        <h3>Structural Fabrication Services</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        </div>
        </div>
        <div className='Services'>
        <div className='Services__card'>
        <PeopleIcon sx={{ fontSize: 50, color: "orange"}}/>
        <div className='Services__detail'>
        <h3>Steel Gates</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        </div>
        <div className='Services__card'>
        <PeopleIcon sx={{ fontSize: 50, color: "orange"  }}/>
        <div className='Services__detail'>
        <h3>Window Railing</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        </div>
        </div>
        
      </div>;
}

export default Services;
