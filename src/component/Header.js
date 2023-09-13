import {signOut } from "firebase/auth";
import {auth} from "../firebase"
import React from "react";
import image from "../../src/images/foodies.jpeg";
import Searchbar from "./Searchbar";
import { cardData } from "../helpers/TheFunctions";
import Content from "./Content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom"
import { addItem,clearItems } from "../util/cardSlice";
import {
  faLocationDot,
  faCartPlus,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";


const Header = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  
console.log("this is header")

  const handle = async() => {
    const CardData = await cardData();
    dispatch(clearItems())
    dispatch(addItem(CardData))
  };

  const SignOut=()=>{
     signOut(auth).then(() => {
      localStorage.clear()
      navigate("/")
  }).catch((error) => {
    // An error happened.
  });
  }
 


  return (
    <React.Fragment>
      <div className="h-48 bg-slate-300 text-black  flex justify-evenly items-center">
        <div className="h-28 ml-3 w-[20%] shadow-lg hover:border border-white ">
          <Link to="/body" onClick={handle}>  <img
            className="w-full  h-full object-cover rounded-xl"
            alt="rijo"
            src={image}
          ></img>  </Link>
          
        
        </div>
         
        <div className="ml-5 cursor-pointer hover:border border-white">
          <p>Delivered To</p>
          <div className="flex items-center ">
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ color: "#e6e6e6" }}
            />
            <p className="pl-3 font-bold">India</p>
          </div>
        </div>

        <div className="pl-5 flex } ">
          <Searchbar />
        </div>
        <div className="hover:border border-white">
          <Content name={"Welcome "} content={localStorage.getItem("name")} />
        </div>
        <div className="hover:border border-white">
          <Content name={"Return"} content={"& Orders"} />
        </div>
        <div className="flex hover:border border-white">
           <Link to="/cart">
          <FontAwesomeIcon className="h-8" icon={faCartPlus} />
          <p className="pl-3 font-bold">Cart</p>
           </Link>
       
        </div>
        {
           localStorage.getItem("name")? <div className="h-10 w-24 text-center text-lg pt-2 bg-orange-500 hover:scale-[1.1] transition duration-500 cursor-pointer">
          <button onClick={SignOut} className="hover:text-white">SignOut</button></div>:<div></div>


        }
       
      </div>

      <div className="flex h-10 bg-slate-700 opacity-4 shadow-2xl text-slate-50 items-center">
        <div className="">
         <FontAwesomeIcon icon={faBars} />
          All
        </div>
        <div className="flex ml-2 ">
          <p className="pl-3">About</p>
          <p className="pl-3">Contact</p>
          <p className="pl-3">Gift</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
