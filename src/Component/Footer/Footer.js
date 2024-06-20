import React from 'react'
import {Box,Container,Grid,Stack, Typography} from "@mui/material"
import logo from "../../assets/logo.png"
import facebook from "../../assets/facebook.png"
import twitter from "../../assets/twitter.png"
import youtube from "../../assets/youtube.png"
import picon from "../../assets/picon.png"
import FooterLink from './FooterLink'

function Footer() {
  return (
    <Box sx={{background:"#1B3C74" ,'@media (max-width: 600px)': {
          marginLeft: '20px',
        },}}>
         <Container >
        <Box >
<Grid container spacing={4} padding="30px" borderBottom="1px solid white" 
>

  <Grid item xs={12} md={4.5}>
    <Stack sx={{width:"100px",  height: { xs: 'auto', md: '200px' } }}  direction="column" justifyContent="space-between" alignItems="flex-start" >
    <img src={logo} alt="logo" height={36}/>
      <Stack sx={{display:"flex",flexDirection:"row",marginTop:{xs:"20px" }}} gap="10px">
        <Box component="img" src={facebook} alt="facebook" sx={{width:"50%"}}/>
        <Box component="img" src={twitter} alt="twitter" sx={{width:"50%"}}/>
        <Box component="img" src={youtube} alt="youtube" sx={{width:"50%"}}/>
        <Box component="img" src={picon} alt="picon" sx={{width:"50%"}}/>
        
      </Stack>
    </Stack>
    
  </Grid>
 
  <Grid item xs={12} md={2.5}>
   <Stack>
   <FooterLink>About Us</FooterLink>
              <FooterLink>Our Pricing</FooterLink>
              <FooterLink>Our Gallery</FooterLink>
              <FooterLink>Appointment</FooterLink>
              <FooterLink>Privacy Policy</FooterLink>
   </Stack>
  </Grid>
 
  <Grid item xs={12} md={2.5}>
   <Stack>
   <FooterLink>Orthology</FooterLink>
              <FooterLink>Neurology</FooterLink>
              <FooterLink>Dental Care</FooterLink>
              <FooterLink>Opthalmology</FooterLink>
              <FooterLink>Cardiology</FooterLink>
    
   </Stack>
  </Grid>
  <Grid item xs={12} md={2.5}>
   <Stack>
   <FooterLink>About Us</FooterLink>
              <FooterLink>Our Pricing</FooterLink>
              <FooterLink>Our Gallery</FooterLink>
              <FooterLink>Appointment</FooterLink>
              <FooterLink>Privacy Policy</FooterLink>
   </Stack>
  </Grid>
</Grid>

        </Box>
        <Typography padding="20px 0px 20px 0px" color="white">Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</Typography>
        </Container>
    </Box>
  )
}

export default Footer