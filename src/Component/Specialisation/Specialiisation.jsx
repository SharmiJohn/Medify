import React from "react";
import { Stack, Box } from "@mui/material";
import dentist from "../../assets/dentist.png";
import Cardio from "../../assets/Cardio.png";
import pcare from "../../assets/pcare.png";
import mri from "../../assets/mri.png";
import blood from "../../assets/blood.png";
import pisco from "../../assets/pisco.png";
import lab from "../../assets/lab.png";
import xray from "../../assets/xray.png";


function Specialisation() {
  const specialisations = [
    [
      { image: dentist, title: "Dentistry" },
      { image: pcare, title: "Primary Care" },
      { image: Cardio, title: "Cardiology" },
      { image: mri, title: "MRI Resonance" },
    ],
    [
      { image: blood, title: "Blood Test" },
      { image: pisco, title: "Piscologist" },
      { image: lab, title: "Laboratory" },
      { image: xray, title: "X-Ray" },
    ],
  ];

  return (
    <Box style={{display:"flex",flexDirection:"column" ,justifyContent:"center", alignItems:"center",marginBottom:"20px"}} sx={{'@media (max-width: 600px)': {
          marginLeft: '20px',
        },}}> 
      <h1 style={{color:"#1B3C74" ,marginTop:"30px"}}> Find by Specialisation</h1>
      {specialisations.map((row, rowIndex) => (
        <Stack
          key={rowIndex}
       
          justifyContent="center"
          alignItems="center"
          spacing={5}
          mb={2}
          flexDirection={{md:"row",xs:"column"}}
        >
          {row.map((item, index) => (
            <Box
              key={index}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              gap={2}
              p={2}
              border="1px solid white"
              borderRadius="15px"
              bgcolor="white"
              width="200px"
              height="150px"
              s
              style={{margin:"50px"}}          >
              <Box width="90px" height="80px"  mb={1} sx={{ display: "flex", alignItems: "center", justifyContent: "center" ,marginTop:"0px" }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
              <Box textAlign="center" fontFamily="Poppins" color="#ABB6C7">{item.title}</Box>
            </Box>
          ))}
        </Stack>
      ))}
      <div><button>View All</button></div>
    </Box>
  );
}

export default Specialisation;