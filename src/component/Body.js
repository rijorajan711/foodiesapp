import React from "react";
import Card from "./Card";
import { cardData } from "../helpers/TheFunctions";
import { addItem } from "../util/cardSlice";
import { about } from "../constant";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Slide from "./Slide";
const Body = () => {
  console.log("enter to body component")

  const dispatch = useDispatch();
  useEffect(() => {
    const data = async () => {
      const CardData = await cardData();
      console.log("enter to useEffect in body")
        
      dispatch(addItem(CardData));
    };
    data();
  }, []);
  const CardFetchedData = useSelector((store) => store.card.items[0]);

  return (
    <>
      <div className="h-auto mt-10 ml-4 flex justify-center gap-10 flex-wrap">
          {CardFetchedData?.map((data) => {
                return (
          
                  data?.card?.card?.info?.name && (
               
                    <Card
                id={data?.card?.card?.info?.id}
                cost={data?.card?.card?.info?.costForTwo}
                hotel={data?.card?.card?.info?.name}
                image={data?.card?.card?.info?.cloudinaryImageId}
                ></Card>
                )
                )
             
              }
                )
             
              }

         </div>
         <div className="w-[50%] h-auto ml-[25%]  mt-5">
         <Slide title={about.name}  description={about.detail} />
         <Slide title={"Contact Us"}  description={about.detail} />
         <Slide title={"Carrer"}  description={about.detail} />
         <Slide title={"Why we"}  description={about.detail} />
         </div>

       </>    )
              }
          


  

export default Body;
