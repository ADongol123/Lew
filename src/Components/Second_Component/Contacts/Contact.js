import React,{useState,useEffect} from 'react';
import "./Contact.css"
import EmailIcon from '@material-ui/icons/Email';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import db from './../../../firebase';
import firebase from "firebase"
function Contact() {
    const[firstname,setFirstname]=useState("");
    const[lastname,setLastname]=useState("");
    const[email,setEmail]=useState("");
    const[message,setMessage]=useState("");
    const[firstnerror,setFirstnerror]=useState(false);
    const[secondnerror,setSecondnerror]=useState(false);
    const[messageerror,setMessageerror]=useState("");
    const[emailerror,setEmailerror]=useState(false);
    const handleSubmit = (e) => {
         e.preventDefault();
         db.collection("queries").add({
             fname:firstname,
             lname:lastname,
             email:email,
             message:message,
             timestamp:firebase.firestore.FieldValue.serverTimestamp()
         }) 
        //  alert("your message was send");
         setFirstname('');
         setLastname('');
         setEmail('');
         setMessage('');
       
    }
    function fnamevalidate(e){
        let item= e.target.value;
        if(item.length < 4){
             setFirstnerror(true)
        }
        else{
            setFirstnerror(false)
        }
    }
    function snamevalidate(e){
        let item= e.target.value;
        if(item.length < 4){
             setSecondnerror(true)
        }
        else{
            setSecondnerror(false)
        }
    }  function emailvalidate(e){
        let item= e.target.value;
        if(!item.includes("@")){
             setEmailerror(true)
        }
        else{
            setEmailerror(false)
        }
    }
  return <div className='contact'>
      <div className='contact__touch'>
          <h2>GET IN TOUCH</h2>
          <p>Enter your info and we'll give you a call</p>
          <div className='contact__form'>
            <form>
                <p>Name<span style={{color:'red',fontSize:20}}>*</span></p>
                <div className='contactform__name'>
                    
                    <div className='cname__first'>
                        <input type='text' 
                        required
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)} 
                        onInput={fnamevalidate}
                        />
                        <p>First</p>
                        {firstnerror ? <span style={{color:"red",fontSize:10}}>The name must be more than 4 letter</span>: null}
                    </div>
                    <div className='cname__second'>
                        <input type='text'
                        required
                        value={lastname}
                        onChange={(e)=> setLastname(e.target.value)}
                        onInput={snamevalidate}
                        />
                        <p>Last</p>
                        {secondnerror ? <span style={{color:"red",fontSize:10}}>The name must me more than 4 letters</span>:null}
                    </div>
                </div>
                <div className='contactform__email'>
                    <p>Email<span style={{color:'red',fontSize:20}}>*</span></p>
                    <input type='email'
                    required
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    onInput={emailvalidate}
                    /><br/>
                    {emailerror?<span style={{color:"red",fontSize:10}}>Invalid email</span>:null}
                </div>
                <div className='contactform__message'>
                    <p>Message<span style={{color:'red',fontSize:20}}>*</span></p>
                    <input type='text' 
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <button className='contact__button'
                onClick={handleSubmit}
                >Submit</button>
            </form>
          </div>
      </div>
      <div className='contact__info'>
          <h2>INFORMATION</h2>
          <p>Contact us at anytime</p>
          <div className='contact__information'>
                <div className='contactinfo__description'>
                    <LocalPhoneIcon style={{color:"#0e304e",height:50,width:50}} className='contactinfo__icon' />
                    <p>977 984-1879982 <br/>01-4428506</p>
                </div>
                <div className='contactinfo__description'>
                    <EmailIcon style={{color:"#0e304e",height:50,width:50}} className='contactinfo__icon'/>
                    <p>lazimpatmetal@gmail.com</p>
                </div>
                <div className='contactinfo__description'>
                    <LocationOnIcon style={{color:"#0e304e",height:50,width:50}} className='contactinfo__icon'/>
                    <p>Lazimpat,Kathmandu</p>
                </div>
          </div>
          <div className='contact__smedia'>
                <p>SOCIAL MEDIA</p>
                <div className='contact__icons'>
                    <FacebookIcon style={{color:"#0e304e",height:50,width:50}}/>
                    <TwitterIcon style={{color:"#0e304e",height:50,width:50}}/>
                    <InstagramIcon style={{color:"#0e304e",height:50,width:50}}/>
                </div>
          </div>
      </div>
  </div>;
}

export default Contact;
