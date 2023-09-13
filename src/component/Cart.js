
import { useSelector } from "react-redux/es/hooks/useSelector";
import CardForCart from "./CardForCart";

const Cart=()=>{
   const data =useSelector(store=>store.cart.items)

          
   
    return(
        <>
    <div className="h-auto mt-10 ml-4 flex  gap-10 flex-wrap">

<h1>cart page</h1>
   {data.map((dataa)=>
       
    <CardForCart data={dataa} />

   )}
    </div>
        </>

    )
}

export default Cart