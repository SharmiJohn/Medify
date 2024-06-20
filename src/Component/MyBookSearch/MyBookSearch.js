import React, { useEffect, useMemo } from 'react';
import {Box} from "@mui/material"
import { IoIosSearch } from "react-icons/io";
import { useState } from 'react';

function MyBookSearch({booking,setfilteredList}) {
    const[input,setinput]=useState("");
   
    
      const filtered=useMemo(()=>  
        {if(input.trim()===0){
        setfilteredList(booking)
      }
      else{
       return booking.filter((hospital,index)=>(hospital["Hospital Name"].toLowerCase().includes(input.trim().toLowerCase())))
 
      }},[input]) 
    

 
    const handleSubmit=(e)=>{
        e.preventDefault();
        setfilteredList(filtered)
    }
  return (
    <div>
         
      <Box
        component="form" onSubmit={(e)=>handleSubmit(e)}
        sx={{ display: "flex", justifyContent:"center",alignItems:"center",gap:"40px",flexDirection: { xs: "column", md: "row" } }}
        
      >
        <input  placeholder='Search By Hospital Name' value={input} onChange={(e)=>setinput(e.target.value)} style={{width:"70%",height:"25px",color:"#ABB6C7",border:"1px solid #ABB6C7",borderRadius:"5px"}} />
        
         
       
        <button>{ <IoIosSearch />} Search</button>
      </Box>
  

    </div>
  )
}

export default MyBookSearch