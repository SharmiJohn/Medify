import React from 'react'
import { Typography,Grid, Container ,Box} from '@mui/material'
import frequent from "../../assets/frequent.png"
import { FaPlus } from "react-icons/fa";
import Accordion from '@mui/material/Accordion';

import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import './Frequent.css'

function Frequent() {
  return (
    <Box  sx={{
      backgroundColor: 'white',
      '@media (max-width: 600px)': {
        marginLeft: '20px',
      },
    }}>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:'column',paddingTop:"30px"}}>
        <Typography variant="h6" style={{color:"#2AA7FF",fontSize:"15px"}}>Get Your Answer</Typography>
        <h1 className='frequent' style={{fontWeight:"600",fontSize:"50px",color:"#1B3C74",margin:"0px"}}>Frequently Asked Questions</h1>
        </div>
       <Container>
       <Grid container spacing={2} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
  <Grid item xs={12} md={6}>
   <img src={frequent} alt="Frequent" style={{width:"100%",height:"100%"}}/>
  </Grid>
  <Grid item xs={12} md={6}>
  <Accordion sx={{ minHeight: '80px' }}  >
        <AccordionSummary
       
          expandIcon={<FaPlus style={{color:"#2AA7FF"}}/>}
          aria-controls="panel1-content"
          id="panel1-header"
          
        >
            <Typography sx={{color:"#1B3C74",fontFamily:"Poppins",fontWeight:"700",}}>
            Why choose our medical for your family?
            </Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      
      <Accordion sx={{ minHeight: '80px' }}>
        <AccordionSummary
       
          expandIcon={<FaPlus style={{color:"#2AA7FF"}}/>}
          aria-controls="panel2-content"
          id="panel2-header"
        >
            <Typography sx={{color:"#1B3C74",fontFamily:"Poppins",fontWeight:"700"}}> Why we are different from others?</Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ minHeight: '80px' }}>
        <AccordionSummary
       
          expandIcon={<FaPlus style={{color:"#2AA7FF"}}/>}
          aria-controls="panel2-content"
          id="panel2-header"
        >
            <Typography sx={{color:"#1B3C74",fontFamily:"Poppins",fontWeight:"700"}}>Trusted & experience senior care & love</Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ minHeight: '80px' }}>
        <AccordionSummary
       
          expandIcon={<FaPlus style={{color:"#2AA7FF"}} />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
            <Typography sx={{color:"#1B3C74",fontFamily:"Poppins",fontWeight:"700"}}>How to get appointment for emergency cases?</Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    
  </Grid>
  
        </Grid>
       </Container>
     
       
    </Box>
  )
}

export default Frequent