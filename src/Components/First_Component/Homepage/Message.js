import React from 'react';
import './css/Message.css';
function Message({Name,Message}) {
  return <div className='Message'>
      <div className='Message__card'>
      <img src='/images/logo.jpg' alt=''/>
         <div className='Message__info'>
           <p>{Message}</p>
           <h3 style={{color:"orange"}}>{Name}</h3>
         </div>

      </div>
  </div>;
}

export default Message;
