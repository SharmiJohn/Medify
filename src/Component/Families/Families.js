import React from 'react'
import { Grid,Typography,Container} from '@mui/material'
import families from "../../assets/Families.png"

function Families() {
  return (
    <div>
        <Container>
        <Grid container justifyContent="center"
  alignItems="center" >
  <Grid xs={12} md={6} >
  <Typography variant="h6" style={{color:"#2AA7FF",fontSize:"15px"}}>CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</Typography>
  <h1 style={{fontWeight:"600",fontSize:"50px",color:"#1B3C74",margin:"0px"}}>Our Families</h1>
  <p style={{color:"#77829D",fontSize:"15px"}}>We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.</p>

  </Grid>
  <Grid xs={12} md={6}>
   <img src={families} alt="families" style={{width:"100%",height:"100%"}}/>
  </Grid>

</Grid>
        </Container>
        
    </div>
  )
}

export default Families