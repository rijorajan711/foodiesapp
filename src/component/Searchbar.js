import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
 
import { addItem,clearItems } from "../util/cardSlice";{}
import { cardData } from "../helpers/TheFunctions";

import { useEffect, useState } from "react";


const Searchbar = () => {
  const [value,setValue]=useState("")
  const [actualData,setActualData]=useState([])
  const dispatch=useDispatch()
  useEffect(()=>{
    const data = async () => {
      const CardData = await cardData();
      setActualData(CardData)
      console.log("SEARCH fetched data",CardData)
  }
  data()}
  ,[])


      
       const headerSearchValue=(e)=>{
             const data= e.target.value
             setValue(data)
       }
       const getFilterdData=(value)=>{
            
             const IncludeData=actualData.filter((data)=>data?.card?.card?.info?.cuisines.includes(value))
             console.log("includeDataaaaaaaaaaa",IncludeData)
             dispatch(clearItems())
             dispatch(addItem(IncludeData))
                                     }

               
                                     console.log("this is this is serach bar")                      

    return (
      <div className="w-[620px] h-10 rounded-md flex justify-evenly  bg-red-500">
        <select className="text-slate-950 rounded-l-md w-11 ">
          <option>All</option>
        </select>
        <input className="border-none w-[100%]" placeholder="search" onChange={headerSearchValue} />
        <div className="bg-orange-500 rounded-r-md w-12 flex items-center justify-center">
         
            <button onClick={()=>getFilterdData(value)}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
           
        </div>
      </div>
    );
  };
  
export default Searchbar
            
                