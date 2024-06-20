import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Box } from '@mui/material';
import Offer1 from "../../assets/offer1.png"
import Offer2 from "../../assets/offer2.png"
import { Pagination } from 'swiper/modules';
import "./Swiper.css"
export default function Swiiper() {
   
    return (
      <>
      <Box style={{padding:"200px 50px 50px 50px",background:"white"}}  sx={{'@media (max-width: 600px)': {
          marginLeft: '30px',
        },}}>
        <Swiper pagination={{clickable:"true"}} modules={[Pagination]} className="mySwiper"  slidesPerView= "1"
          
        breakpoints= {{
           
           
            764: {
              slidesPerView: 3,
              spaceBetween: 40
            }}
          }>
          <SwiperSlide>
            <Box  sx={{ width: '100%', height: 'auto',  }} component={"img"} src={Offer1}/> 
          </SwiperSlide>
          <SwiperSlide>  <Box  sx={{ width: '100%', height: 'auto', }} component={"img"} src={Offer2}/> </SwiperSlide>
          <SwiperSlide>  <Box  sx={{ width: '100%', height: 'auto',  }} component={"img"} src={Offer1}/> </SwiperSlide>
          <SwiperSlide>  <Box  sx={{ width: '100%', height: 'auto' }} component={"img"} src={Offer2}/> </SwiperSlide>
          <SwiperSlide>  <Box   sx={{ width: '100%', height: 'auto' }} component={"img"} src={Offer1}/> </SwiperSlide>
          
        </Swiper>
        </Box>
      </>
    );
  }