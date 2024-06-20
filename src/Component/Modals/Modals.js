import * as React from 'react';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { format } from 'date-fns';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    borderRadius:"10px",
    boxShadow: 24,
    p: 4,
  };


function Modals({open,setModalopen,bookingDetails,setSnackbox}) {
    const [email,setemail]=useState("");
    const navigate = useNavigate();
   const Format=(day)=>{
    if (day) {
        const date = new Date(day);
        return format(date, "E, d LLL");
      } else {
        return null;
      }
    };
  
   const handleSubmit=(e)=>{
    e.preventDefault();
    const booking=localStorage.getItem("Bookings")
    let oldBooking=[];
    if(booking){  
        
        oldBooking=JSON.parse(booking);
    }
  

localStorage.setItem("Bookings",JSON.stringify([...oldBooking,{Email:email,...bookingDetails}]));
// setSnackbox(true);
setModalopen(false);
setemail("")
navigate( `/mybookings`)

   }
   
const handleClose = () => setModalopen(false);
  return (
    <div>
   
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <h1>Confirm Booking</h1>
        <p>Please enter your email to confirm booking for <span>{bookingDetails.bookingSlot}</span>  on  <span>{Format(bookingDetails.bookingDate)}</span></p>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <input placeholder='  Enter your email ***' type="Email" value={email} style={{width:"100%",height:"40px",fontSize:"15px"}} reqiured onChange={(e)=>setemail(e.target.value)}/>
            <Typography style={{padding:"20px 0px "}} ><button type="submit">Submit</button> <button style={{margin:"20px"}} onClick={()=>handleClose()}> Cancel</button></Typography>
        </form>
      </Box>
    </Modal>
  </div>
  )
}

export default Modals