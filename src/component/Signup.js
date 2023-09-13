import { signInWithPopup } from "firebase/auth"
// import {signInWithRedirect,getRedirectResult } from "firebase/auth";
import {auth,googleAuthProvider } from "../firebase"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import googleimage from "../images/download.png"

const Signup=()=>{
     const navigate=useNavigate()
     const [rijo,setRijo]=useState("")




//    const signInwithGoogle=()=>{.

//     signInWithRedirect(auth,googleAuthProvider);
//     getRedirectResult(auth)
//   .then((result) => {
//       navigate("/body")
//   }).catch((error) => {
//    console.log(error)
//   });

//    }




    const signInwithGoogle=()=>{
        console.log("signUP")
        signInWithPopup(auth,googleAuthProvider).then((data)=>{
           
          const name=data.user.displayName
          const email=data.user.email
          const profilePic=data.user.photoURL
          setRijo(data)
          localStorage.setItem("name",name)
          localStorage.setItem("email",email)
          localStorage.setItem("profilePic",profilePic)
          data?navigate("/body"):window.location.reload
          console.log("signupDATAAAAAAAAAAAA",rijo)
                 
        }).catch((error)=>{
          console.log(error)
        })
      }
    
    return (
    <>

    <div className="h-[400px] w-[20%] ml-[36.5%] mt-5 shadow-2xl bg-white rounded-3xl hover:scale-[1.1] transition duration-500" >
    <img className=" h-[25%]  shadow-2xl" src={googleimage}></img>
    <button className="bg-slate-400 mt-24 ml-9 h-14 w-[80%] rounded-full hover:scale-[1.1] text-white " onClick={signInwithGoogle}>CLICK TO SIGNIN</button>
    </div>
 
    </>
    )
}



export default Signup

