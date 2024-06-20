import React, { useState } from "react";
import doctor from "../../assets/doctor.png";
import labs from "../../assets/labs.png";
import hospitals from "../../assets/hospitals.png";
import medicalstore from "../../assets/medicalstore.png";
import ambulance from "../../assets/ambulance.png";
import { Stack, Grid, Box, Typography } from "@mui/material";
import "./Iconstab.css"
function Iconstab() {
  const [active, setactive] = useState("Hospitals");
  const values = [
    {
      image:  doctor ,
      title: "Doctors",
    },
    { image: labs , title: "Labs" },
    { image:  hospitals , title: "Hospitals" },
    { image:  medicalstore , title: "Medicalstore" },
    { image:  ambulance , title: "Ambulance" },
  ];
  return (
    <div className="iconmain">
         <h3 className="iconhead">You may be looking for</h3>
      <Stack flexDirection={{md:"row"}}>
      
        <Grid container spacing={2} className="grid">
         { values.map((value,index)=>(<Grid item key={index} >
            <Box className={`Box ${active === value.title ? "Active" : ""}`}>
            <div><img src={value.image} alt={value.title}/></div>
            <div className={value.title==="Hospitals"?"title":"Title"}>{value.title}</div>
            </Box>
            
         </Grid>))}
        </Grid>
      </Stack>
    </div>
  );
}

export default Iconstab;
