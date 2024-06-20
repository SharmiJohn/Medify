import React from "react";
import { Grid } from "@mui/material";
import doctorlogo from "../../assets/doctorlogo.png";

function Hero() {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={6}>
          <div
            style={{
           
              paddingTop: "100px",
              margin: "0px 80px 0px 80px" ,
              
            
            }}
          >
            <h3
              style={{
                fontSize: "40px",
                fontWeight: "400",
                fontFamily: "Poppins",
                marginTop: "0px",
                marginBottom: "0px",
              }}
            >
              Skip the travel! Find Online{" "}
            </h3>
            <h2
              style={{
                fontSize: "70px",
                marginTop: "0px",
                marginBottom: "0px",
                fontWeight: "500",
              }}
            >
              Medical <span style={{color:"#2AA7FF"}}> Centers</span>
            </h2>
            <p style={{fontSize: "24px",
  
    color: "#5C6169"}}>
              Connect instantly with a 24x7 specialist or choose to video visit
              a particular doctor.
            </p>
            <button>Find Centers</button>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            style={{ width: "100%", height: "100%" }}
            src={doctorlogo}
            alt="doctorimg"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Hero;
