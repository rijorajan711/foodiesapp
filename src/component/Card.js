import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../util/cartSlice";

const Card = (props) => {

const dispatch=useDispatch()

 function rijo(pro){
      
      dispatch(addToCart(pro)) 
       }
       
       


  return (
    <React.Fragment>
      <div className="h-[500px] rounded-2xl w-[400px] shadow-xl hover:scale-[1.1] transition duration-500 cursor-pointer ">
        <img className="h-[75%] w-[100%] rounded-t-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+props.image}></img>
        <h1 className="font-bold text-xl">{props.hotel}</h1>
        <h2 className="text-lg">{props.cost}</h2>
           <div className="flex justify-evenly text-center">
          <div className="w-[200px] h-[70px] bg-orange-500 pt-5 rounded-lg hover:scale-[1.2] transition duration-500 hover:text-white "><button className="w-[100%] " onClick={()=>rijo(props)} >add to Cart </button></div>
          <div className="w-[200px] h-[70px] bg-orange-500 pt-5 rounded-lg hover:scale-[1.2] transition duration-500 hover:text-white">Order</div>
           </div>
          
            
          
       
        
      </div>
    </React.Fragment>
  );
};

export default Card;
