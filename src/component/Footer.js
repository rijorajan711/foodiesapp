import image from "../images/foodies.jpeg"
const Footer=()=>{

    return(
        <>
        <div className="flex h-[400px] mt-16">
           <div className="flex-1 bg-slate-300 ">

           </div>
           <div className="flex-1 bg-slate-300"  >
           </div>
          
          
           <div className="flex-1">
           <img
            className="w-full  h-full object-cover rounded-xl"
            alt="rijo"
            src={image}
          ></img>
           </div>
           <div className="flex-1 bg-slate-300  ">
             


           </div>
          
          
           <div className="flex-1k bg-slate-300 text-black">
          
              <p className="pt-8 hover:scale-[1.1] transition scale-y-100">About</p>
              <p className="pt-8 hover:scale-[1.1] transition scale-y-100">Contact Us</p>
              <p className="pt-8 hover:scale-[1.1] transition scale-y-100">Help & Support</p>
              <p className="pt-8 hover:scale-[1.1] transition scale-y-100">Team</p>
              <p className="pt-8 hover:scale-[1.1] transition scale-y-100">Career</p>
           </div>
           <div className="flex-1 bg-slate-300">

            </div>
          
         

        </div>
        </>
    )

}

export default Footer