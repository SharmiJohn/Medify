import React from "react";
import { Card, CardMedia, CardContent, Typography, Box,Stack ,Container} from "@mui/material";
import latest from "../../assets/lastest.png";

import icon from "../../assets/icon.png";

function Blogs() {
  return (
    <Box sx={{ textAlign: "center", padding: "20px",bgcolor:"white" ,marginBottom:"40px",'@media (max-width: 600px)': {
          marginLeft: '30px',
        },}}>
      <Typography variant="h6" style={{color:"#2AA7FF",fontSize:"15px"}}>Blog & News</Typography>
     <h1 style={{fontWeight:"600",fontSize:"50px",color:"#1B3C74",marginTop:"0px"}}>Read Our Latest News</h1>
    <Container>
    <Stack flexDirection={{xs:"column",md:"row"}}  >
    <Card sx={{ maxWidth: 345, margin: "0 auto" ,marginTop: { xs: 2, md: 4 },marginBottom:{xs:2,md:4}}} >
        <CardMedia component="img" image={latest} alt="Latest news" />
        <CardContent
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems:"flex-start",
            flexDirection: "column",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            Medical | March 31, 2022
          </Typography>
          <Typography color="#1B3C74"  fontWeight="500" component="p"style={{marginTop:"10px"}} >
            6 Tips To Protect Your Mental Health 
          </Typography>
          <Typography color="#1B3C74"  fontWeight="500" component="p" >
          When You’re Sick
          </Typography>
          <Typography color="#1B3C74" fontWeight="500" style={{display:"flex",justifyContent:"center" ,alignItems:"center", marginTop:"10px"}}>
            <img src={icon} alt="icon" style={{ height: "30px" }} />
            Rebecca Lee
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 345, margin: "0 auto" ,marginTop: { xs: 2, md: 4 },marginBottom:{xs:2,md:4}}}>
        <CardMedia component="img" image={latest} alt="Latest news" />
        <CardContent
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems:"flex-start",
            flexDirection: "column",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            Medical | March 31, 2022
          </Typography>
          <Typography color="#1B3C74"  fontWeight="500" component="p"style={{marginTop:"10px"}} >
            6 Tips To Protect Your Mental Health 
          </Typography>
          <Typography color="#1B3C74"  fontWeight="500" component="p" >
          When You’re Sick
          </Typography>
          <Typography color="#1B3C74" fontWeight="500" style={{display:"flex",justifyContent:"center" ,alignItems:"center", marginTop:"10px"}}>
            <img src={icon} alt="icon" style={{ height: "30px" }} />
            Rebecca Lee
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 345, margin: "0 auto",marginTop: { xs: 2, md: 4 },marginBottom:{xs:2,md:4} }}>
        <CardMedia component="img" image={latest} alt="Latest news" />
        <CardContent
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems:"flex-start",
            flexDirection: "column",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            Medical | March 31, 2022
          </Typography>
          <Typography color="#1B3C74"  fontWeight="500" component="p"style={{marginTop:"10px"}} >
            6 Tips To Protect Your Mental Health 
          </Typography>
          <Typography color="#1B3C74"  fontWeight="500" component="p" >
          When You’re Sick
          </Typography>
          <Typography color="#1B3C74" fontWeight="500" style={{display:"flex",justifyContent:"center" ,alignItems:"center", marginTop:"10px"}}>
            <img src={icon} alt="icon" style={{ height: "30px" }} />
            Rebecca Lee
          </Typography>
        </CardContent>
      </Card>
    </Stack>
    </Container>
    </Box>
  );
}

export default Blogs;
