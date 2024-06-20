import React from "react";
import {
  Grid,
  Box,
  Typography,
  TextField,
  InputAdornment,
  Button
} from "@mui/material";
import mobile from "../../assets/Downlods.png";
import arrow from "../../assets/arrow.png";
import App from "../../assets/app.png";
import Google from "../../assets/googlepay.png"


function Download() {
  return (
    <div>
   
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={mobile}
            alt="mobile"
            sx={{
              width: { xs: "100%", md: "80%" },
              padding: { xs: "20px", md: "30px" },
              position: "relative",
              marginLeft:{md:"150px"}
            }}
          />
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontFamily: "Poppins",
              fontWeight: "500",
              fontSize: { xs: "40px", md: "60px" },
              color: "#1B3C74",
              paddingLeft: { xs: "20px", md: "100px" },
              paddingTop: { xs: "20px", md: "80px" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Download the
          </Typography>

          <Box>
            <Typography
              variant="h2"
              component="body"
              sx={{
                fontFamily: "Poppins",
                fontWeight: "500",
                fontSize: { xs: "40px", md: "60px" },
                color: "#1B3C74",
                paddingLeft: { xs: "20px", md: "100px" },
                textAlign: { xs: "center", md: "left" }
              }}
            >
              <span style={{ color: "#2AA7FF" }}>Medify</span> App
            </Typography>
          </Box>
          <Box
            component="img"
            src={arrow}
            alt="arrow"
            sx={{
                width: { xs: "15%", md: "10%" }, 
                height: { xs: "15%", md: "10%" }, 
                paddingLeft: { xs: "0px", md: "20px" },
                margin: { xs: "20px auto", md: "0" },
              
              }} 
          />
          <Box>
            <Typography
              component="body"
              sx={{
                fontFamily: "Lato",
                fontWeight: "1000",
                fontSize: "20px",
                paddingLeft: { xs: "20px", md: "90px" },
                color: "#414146",
                textAlign: { xs: "center", md: "left" }
              }}
            >
              Get the link to download the app
            </Typography>
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                paddingLeft: { xs: "0", md: "90px" },
                width: { xs: "100%", md: "auto" },
                marginTop: "10px"
              }}
            >
              <TextField
                 sx={{
                    border: '1px solid #F0F0F0',
                    flex: 1,
                    width: { xs: "90%", md: "50%" },
                    margin: { xs: "10px auto", md: "0" }
                  }}
                placeholder="Enter phone number"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">+91</InputAdornment>
                  ),
                }}
                required
              />
            
                <Button   sx={{
                padding: "20px 40px",
                marginLeft: { xs: "0", md: "20px" },
                marginTop: { xs: "10px", md: "0" },
                width: { xs: "90%", md: "auto" },
                background:"#2AA8FF"
              }}
              variant="contained"
              color="primary"> Send SMS</Button>
              
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                paddingLeft: { xs: "0", md: "90px" },
                width: { xs: "100%", md: "auto" },
                marginTop: "30px"
              }}>
                 <Button   sx={{
                padding: "20px 40px",
                marginLeft: { xs: "0", md: "20px" },
                marginTop: { xs: "10px", md: "0" },
                width: { xs: "90%", md: "auto" },
                background:"black"
              }}
              variant="contained"
              color="primary" startIcon={<img src={Google} alt="google" style={{width:"30px"}}/>}>Google play</Button>
               <Button   sx={{
                padding: "20px 40px",
                marginLeft: { xs: "0", md: "20px" },
                marginTop: { xs: "10px", md: "0" },
                width: { xs: "90%", md: "auto" },
                background:"black"
              }}
              variant="contained"
              color="primary"  startIcon={<img src={App} alt="App"  style={{width:"30px"}}/>}>App Store</Button>

            </Box>

          </Box>

        </Grid>
      </Grid>
    </div>
  );
}

export default Download;
