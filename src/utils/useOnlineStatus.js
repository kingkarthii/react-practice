import { useEffect, useState } from "react"


const useOnlineStatus=()=>{
   const[onlineStatus,setOnlinestatus]=useState(true);

   useEffect(()=>{
     window.addEventListener("offline",()=>{
        setOnlinestatus(false);
     })
   },[])
   return onlineStatus;
}

export default useOnlineStatus