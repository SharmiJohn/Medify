import React from "react";
import doc1 from "../../assets/drahamad.png";
import doc3 from "../../assets/drankur.png";
import doc2 from "../../assets/drheena.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Box } from "@mui/material";
import "./Specialist.css"

function Specialist() {
  const Datas = [
    {
      image: doc1,
      name: "Dr. Ahmad Khan",
      special: "Neurologist",
    },
    { image: doc2, name: "Dr. Heena Sachdeva", special: "Orthopadics" },
    { image: doc3, name: "Dr. Ankur Sharma", special: "Medicine" },
    { image: doc1, name: "Dr. Ahmad Khan", special: "Neurologist" },
    { image: doc2, name: "Dr. Heena Sachdeva", special: "Orthopadics" },
    { image: doc3, name: "Dr. Ankur Sharma", special: "Medicine" },
    { image: doc1, name: "Dr. Ahmad Khan", special: "Neurologist" },
    { image: doc2, name: "Dr. Heena Sachdeva", special: "Orthopadics" },
    { image: doc3, name: "Dr. Ankur Sharma", special: "Medicine" },
  ];
  return <Box style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",background:"white"}} sx={{'@media (max-width: 600px)': {
          marginLeft: '30px',
        },}}>  
    
    <h1 className="specialist" style={{margin:"40px 0px"}}>Our Medical Specialist</h1>
    <div style={{ width: "100%" }}> <Swiper pagination={true} modules={[Pagination,Autoplay]}  centeredSlides={true} className="mySwiper"   loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
    }} breakpoints= {{
           
           
    764: {
      slidesPerView: 4,
      spaceBetween:2
     
    }}
  }>
    {Datas.map((data,index)=>(<SwiperSlide key={index}>
      <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <Box  >  <img src={data.image} alt={data.name} style={{width:"100%",height:"100%"}}/></Box>
      
        <Box color="#1B3C74">{data.name}</Box>
        <Box color="#2AA7FF" fontSize="15px">{data.special}</Box>
      </Box>
    </SwiperSlide>))}
  
  
</Swiper></div>
    
</Box>;
}

export default Specialist;
