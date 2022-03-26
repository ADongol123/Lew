import React,{useState,useEffect} from 'react'
import {Link } from "react-router-dom"
import { Modal,Input, Button} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from '@material-ui/icons/Close';
import"./CardItem.css"
import db from '../../../firebase';
import {useSelector} from 'react-redux';
import { selectUserName, selectUserPhoto} from "../../../features/user/userSlice"
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
  
function CardItem(props) {
    const[open,setOpen]=useState(false);
    const handleClose = () => setOpen(false);
    const[label,setLabel]=useState("")
    const[Cname,setCompanyname]=useState("");
    const[Cphone,setCompanyphone]=useState("");
    const[Cemail,setCompanyemail]=useState("");
    const[Caddress,setCompanyaddress]=useState("");
    const[CLphone,setCompanylphone]=useState("");
    const[Cimage,setCompanyimage]=useState("");
    const[CSaddress,setCompanysaddress]=useState("");
    const[CPlocation,setCompanyplocation]=useState("");
    const[firstnerror,setFirstnerror]=useState(false);
    const[phoneerror,setPhoneerror]=useState(false);
    const[emailerror,setEmailerror]=useState(false);
    const userName = useSelector(selectUserName);
    const userPhoto= useSelector(selectUserPhoto);
    const [start,setStart]=useState(false);
    const handleSubmit = (e) =>{
        e.preventDefault();
        db.collection(props.label).add({
            label:props.label,
            Cname:Cname,
            Cphone:Cphone,
            Cemail:Cemail,
            Caddress:Caddress,
            CLphone:CLphone,
            Cimage:Cimage,
            CSaddress:CSaddress,
            CPlocation:CPlocation
        })
        setCompanyname("");
        setCompanyphone("");
        setCompanyemail("");
        setCompanyaddress("");
        setCompanylphone("");
        setCompanyimage("");
        setCompanysaddress("");
        setCompanyplocation("");


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
    function emailvalidate(e){
        let item= e.target.value;
        if(!item.includes("@")){
             setEmailerror(true)
        }
        else{
            setEmailerror(false)
        }
    }
    function phonevalidate(e){
        let item= e.target.value;
        if(item.length < 11){
             setPhoneerror(true)
        }
        else{
            setPhoneerror(false)
        }
    }
    return ( <>
    {userName ? ( <Modal open={open} onClose={(e)=> setOpen(false)}>
            <div className="modal__paper">
                <div className="modal__top"> 
                    <div className="modal__stop"><CloseIcon fontSize="large" onClick={handleClose}/></div>
                </div>
                <div>
                <div className="modal__mainn">
                    <div className="modal__mfirst">
                         <figure className="modal__mfigure" data-category={props.label}>
                            <img className="modal__mimage" src={props.src} alt="Travel Images" />
                        </figure>
                         <div className="modal__minfo">
                            <h5 className="modal__mtext">{props.text}</h5>
                         </div>
                    </div>
                    <div className="modal__msecond">
                        <form>
                        <label>ORDER</label>
                            <div className="modal__mmsecond">
                                <div className = "field1">
                                    <input type="text" 
                                    value={Cname} 
                                    onChange={(e)=> setCompanyname(e.target.value)}
                                    onInput={fnamevalidate}
                                    placeholder="Company Name"/>        
                                    {firstnerror ? <span style={{color:"red",fontSize:10}}>Full Company Name</span>: null}
                                    <input type="phone" 
                                    onChange={(e)=> setCompanyphone(e.target.value)}
                                    value={Cphone} 
                                    type="number"
                                    onInput={phonevalidate}
                                    placeholder="Phone no."/>
                                    {phoneerror ? <span style={{color:"red",fontSize:10}}>Innvalid number</span>: null}
                                    <input type="email" 
                                    onChange={(e)=> setCompanyemail(e.target.value)}
                                    value={Cemail} 
                                    onInput={emailvalidate}
                                    placeholder="E-mail"/>
                                    {emailerror ? <span style={{color:"red",fontSize:10}}>Invalid email</span>: null}
                                    
                                </div>
                                <div className="field2">
                                    <input value={Caddress} 
                                    onChange={(e)=> setCompanyaddress(e.target.value)}
                                    placeholder=" Company Address"/>   

                                    <input value={CLphone}
                                    onChange={(e)=> setCompanylphone(e.target.value)}
                                     placeholder="Landline no.(optional)"/>

                                    <input value={Cimage} 
                                    onChange={(e)=> setCompanyimage(e.target.value)}
                                    placeholder="Image URl of the place"/>          
                                </div>
                           </div>
                         <textarea value={CSaddress}
                         required
                         onChange={(e)=> setCompanysaddress(e.target.value)}
                         placeholder="Shipping Address"/>

                         <textarea value={CPlocation} 
                         required
                         onChange={(e)=> setCompanyplocation(e.target.value)}
                         placeholder="Physical location of the project"/>

                        <Button className='modal__button' onClick={handleSubmit} type="submit">Submit</Button>

                        </form> 
                    </div>
                  </div>    
               </div>
            </div>
         </Modal>):(
             <div style={{}}>
                <h1>Login for order</h1>
             </div>
         )
              }
       
         
            <li className="cards__item" onClick={(e) =>setOpen(true)}>
                
                <div className="cards__item__link">
                    <figure className="cards__item__pic-wrap" data-category={props.label}>
                        <img src={props.src} alt="Travel Images" className="cards__item__img"/>
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards__items__text">
                        {props.text}

                        </h5>
                    </div>

                </div>
                 
                          
            </li>   
        </>
    )
}

export default CardItem
 