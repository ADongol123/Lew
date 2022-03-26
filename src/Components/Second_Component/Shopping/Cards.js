import React,{useState,useEffect} from 'react'
import db from '../../../firebase';
import CardItem from './CardItem'

import "./Cards.css"
function Cards() {
    const[data,setData]=useState([]);
    useEffect(()=>{
        db.collection('Products').onSnapshot((snapshot)=>
        setData(snapshot.docs.map((doc)=>({id:doc.id,data:doc.data()})))
        )
    },[])
    console.log(data);
    return (
        <div className="cards">
            <h1>Our Products</h1>
                <div className="cards__container">
                    <div className="cards__wrapper">
                        <div className="cards__items">
                            <ul>
                                
                                {data.map((product)=>(
                                    <CardItem
                                    src={product.data.image}
                                    text={product.data.text}
                                    label={product.data.name} 
                                    />
                                ))}  
                            
                            </ul>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Cards
