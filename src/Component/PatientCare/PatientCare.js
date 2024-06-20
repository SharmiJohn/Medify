import React from "react";
import { Box, Container, ListItemText, Stack } from "@mui/material";
import image from "../../assets/PatCare.png";
import { Grid } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import tick from "../../assets/tick.png";
function PatientCare() {
  return (
    <div>
        <Container>
      <Grid container spacing={2} alignItems="center" justifyContent="center" marginTop="80px" marginBottom="30px">
        <Grid item xs={12} md={6} paddingRight="5px">
          <img src={image} alt="patientcare" width="100%" height="100%" />
        </Grid>
        <Grid item xs={13} md={6} style={{paddingLeft:"70px"}}>
          <h5 style={{color:"#2AA7FF", fontFamily:"Poppins"}}>HELPING PATIENTS FROM AROUND THE GLOBE!!</h5>
          <h1 style={{color:"#1B3C74"}}>Patient <span style={{color:"#2AA7FF", fontFamily:"Poppins"}}>Caring</span></h1>

          <p style={{color:"#77829D"}}>
            Our goal is to deliver quality of care in a courteous, respectful,
            and compassionate manner. We hope you will allow us to care for you
            and strive to be the first and best choice for healthcare.
          </p>
          <List >
        
            <ListItem>
              <ListItemIcon>
                <img src={tick} alt="tick" />
              </ListItemIcon>
              <ListItemText  primary="Stay Updated About Your Health" primaryTypographyProps={{ style: { color: "#1B3C74", fontFamily: "Roboto", fontWeight: 600 } }}/>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <img src={tick} alt="tick" />
              </ListItemIcon>
              <ListItemText primary="Check Your Results Online" primaryTypographyProps={{ style: { color: "#1B3C74", fontFamily: "Roboto", fontWeight: 600 } }}/>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <img src={tick} alt="tick" />
              </ListItemIcon>
              <ListItemText primary="Manage Your Appointments" primaryTypographyProps={{ style: { color: "#1B3C74", fontFamily: "Roboto", fontWeight: 600 } }}/>
            </ListItem>
          </List>
        </Grid>
      </Grid>
      </Container>
    </div>
  );
}

export default PatientCare;
