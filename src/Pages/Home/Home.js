import React from "react";
import Hero from "../../Component/Hero/Hero";
import "./Home.css"
import { Stack ,Container} from "@mui/material";
import SearchForm from '../../Component/SearchForm/SearchForm'
import Iconstab from '../../Component/Iconstab/Iconstab'
import Swiiper from "../../Component/Swiper/Swiper"
import Specialiisation from "../../Component/Specialisation/Specialiisation";
import Specialist from "../../Component/Specialist/Specialist";
import PatientCare from "../../Component/PatientCare/PatientCare";
import Blogs from "../../Component/Blogs/Blogs";
import Families from "../../Component/Families/Families";
import Frequent from "../../Component/Frequent/Frequent";
import Download from "../../Component/Download/Download";
import Footer from "../../Component/Footer/Footer";

function Home() {
  return (
    <div>
     
       <Container maxWidth="xl">
       <Hero />
          <Stack
            p={{ xs: 2.5, md: 6 }}
            mt={{ xs: -2, md: 0, lg: 0, xl: -10 }}
            position="relative"
            zIndex={99}

            bgcolor="#fff"
            borderRadius="15px"
            spacing={10}
            boxShadow="0 0 12px rgba(0,0,0,0.1)"
            sx={{'@media (max-width: 600px)': {
          marginLeft: '30px',
        },}}
          >
          <SearchForm />
          <Iconstab/>
        
          </Stack>
       
        </Container>
        <div style={{position:"relative",bottom:"150px"}}><Swiiper/></div>  
        <Container maxWidth="xl" style={{ marginTop: "-150px" }}>
        <Specialiisation />
      </Container>
      <Specialist/>
      <PatientCare/>
      <Blogs/>
      <Families/>
   
          
        
     
    </div>
  );
}

export default Home;
