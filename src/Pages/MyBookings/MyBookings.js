import React from 'react'
import { Box, Typography,Stack,Grid,Container} from '@mui/material'
import MyBookSearch from '../../Component/MyBookSearch/MyBookSearch'
import { useState,useEffect } from 'react';
import HospitalCard from '../../Component/HospitalCard/HospitalCard';
import ad from "../../assets/ad.png"
function MyBookings() {
  const [filteredList,setfilteredList]=useState([]);
  const[booking,setbooking]=useState([]);
  useEffect(()=>{
    let bookingDetails=localStorage.getItem("Bookings")
    if(bookingDetails){
      setbooking(JSON.parse(bookingDetails));
    }
  },[]);
  useEffect(()=>{
  setfilteredList(booking);
  },[booking])
  return (
    <div>
          <Box
        sx={{
          border:
            "1px soli linear-gradient(91.75deg, #2AA7FF 1.4%, #0C8CE6 100.57%) ",
          background:
            "linear-gradient(91.75deg, #2AA7FF 1.4%, #0C8CE6 100.57%)",
          padding: "15px",
          borderBottomRightRadius: "15px",
          borderBottomLeftRadius: "15px",
          height: "70px",
          position: "relative",
          '@media (max-width: 600px)': {
          marginLeft: '40px',
        },
        }}
      > <h1 style={{color:"white",marginLeft:"100px"}}>MyBookings</h1>
        <Stack
             sx={{
              width: {
                md: '800px',
                xs: '300px',
              },
              position: {
                md: 'absolute',
                xs: 'static', // Reset position for small screens
              },
              transform: {
                md: 'translateY(50%)',
                xs: 'none', // Reset transform for small screens
              },
              background: '#FFFFFF',
              borderRadius: '10px',
              p: 3,
              boxShadow: '0 0 10px rgba(0,0,0,0.1)',
              left: {
                md: '30%',
                xs: '0', // Adjust left for small screens if needed
              },
              bottom: {
                md: '20px',
                xs: '0', // Adjust bottom for small screens if needed
              },
              '@media (max-width: 600px)': {
        
          marginLeft:"-10px"
        },
            }}
          
         
        >
          <MyBookSearch booking={booking} setfilteredList={setfilteredList}/>
        </Stack></Box>
        <Container>
        <Grid container spacing={10}>
          <Grid item xs={12} md={9}>
            <Stack  marginTop={{md:"100px" ,xs:"200px"}}>
              {filteredList.length === 0  && (
                <Box>
                  <Typography
                    sx={{
                      fontWeight: "800",
                      fontSize: "30px",
                      border: "1px solid white",
                      background: "white",
                      padding: "20px",
                      borderRadius: "10px",
                    }}
                  >
                   No Bookings Found
                  </Typography>
                </Box>
              )}
             
             
              <Stack>
                {filteredList.length!==0&&filteredList.map((hospital,index)=>(
                  <HospitalCard key={index} hospital={hospital} bookings={true} />
                ))}
              </Stack>
             
            </Stack>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box sx={{ mt: 20 ,width:"350px" ,height:"300px",  '@media (max-width: 600px)': {
          marginTop: '0px', marginBottom:"10px"
        },}}>
              {" "}
              <img
                src={ad}
                alt="ad"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default MyBookings