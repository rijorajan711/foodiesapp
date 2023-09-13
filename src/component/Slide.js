import { useState } from "react"


const Slide=({title,description})=>{
    const [btn,setbtn]=useState(false)

    return(
        <div className="mt-5 bg-slate-200 rounded-lg hover:scale-[1.1] transition duration-500 cursor-pointer">
            <div className="flex justify-between  h-16 items-center ">
                <h1 className="flex1 ml-8">{title}</h1>
           {
             btn?<button className="mr-8 hover:border border-white"  onClick={()=>setbtn(false)}>less</button>:<button className="mr-8 hover:text-white" onClick={()=>setbtn(true)}>more</button>
           } 
            
            </div>
            <div className="m-5">

           {btn&&<p className="text-justify text-sm  ">{description}</p>
           } 
            </div>

        </div>
    )
}

export default Slide