import React, { useState } from 'react'
import { Container, Stack, Typography ,Box} from '@mui/material';
import {startOfDay,add,format,isEqual} from "date-fns"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Scrollbar } from 'swiper/modules';
import "./DaySlot.css"
import 'swiper/css/scrollbar';
import 'swiper/css';
import 'swiper/css/navigation';
function DaySlot({ date,setdate, totalSlot}) {
    const todayDate=startOfDay(new Date());
    const dateItem=[];
    for(let i=0;i<7;i++){
        dateItem.push(add(todayDate,{days:i}))
    }
    const customisedate=(day)=>{
        if(isEqual(day,todayDate)){
            return "Today";

        }
       else if(isEqual(todayDate,add(day,{days:-1}))){
        return "Tomorrow"
       }
       else{
        return format(day,'E,d LLL')
       }
    }
  return (
    <div >
    <Stack direction="row" height="100px"    textAlign="center" borderTop="1px solid #F0F0F5"  >

    <Swiper navigation={true} modules={[Navigation]}   className="swiperStyles" loop={false} 
          breakpoints={{
           
            764: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
           
          }}>
            {dateItem.length!==0&& dateItem.map((day,index)=><SwiperSlide key={index}>
                <div  className={`swiper-slide-content ${isEqual(day, date) ? 'selected' : ''}`}
                  onClick={() => setdate(day)}>
                  <Container><Typography className={`content  ${isEqual(day, date) ? 'selected' : ''}`} sx={{fontFamily:"Lato",fontSize:"20px",fontWeight:"500"}}>{customisedate(day)}</Typography>
                  <Typography sx={{color:"#01A400",fontFamily:"Lato",fontSize:"15px",fontWeight:"300"}}>{totalSlot} slots available</Typography></Container>
                  <Box sx={{width:"100%",height:'5px' ,marginTop:'30px',backgroundColor:isEqual(day, date) ? '#2AA7FF' : '#F0F0F5'}} position="absolute">
                    
                  </Box>
             
                </div>
               
                
                
                </SwiperSlide>)}
       
        
      </Swiper>
    </Stack>

    </div>
  )
}

export default DaySlot