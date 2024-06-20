import React, { useState } from "react";
import { Box, Grid, Typography,Chip } from "@mui/material";
import HospitalLogo from "../../assets/hospitalLogo.png";
import { IoIosThumbsUp } from "react-icons/io";
import Calendar from "../Calendar/Calendar";
import { format } from "date-fns";

function HospitalCard({ hospital, availableSlot, handleBooking, bookings }) {
  //console.log("hospital", hospital);
  const [showCalendar, setshowCalendar] = useState(false);
  const handleClick = () => {
    setshowCalendar(!showCalendar);
  };

  return (
    <div>
      <Box
        sx={{
          background: "white",
          marginTop: "50px",
          marginBottom: "20px",
          borderRadius: "10px",
          padding: "40px 20px 20px 20px",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{ paddingBottom: "30px", paddingLeft: "20px" }}
        >
          <Grid item md={3} xs={12}>
            <img
              src={HospitalLogo}
              alt="hospitalLogo"
              style={{ width: "170px", height: "150px" }}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography
              sx={{
                textTransform: "capitalize",
                color: "#14BEF0",
                fontFamily: "Poppins",
                fontWeight: "600",
                margin: "20px",
                fontSize: "20px",
              }}
            >
              {hospital["Hospital Name"].toLocaleLowerCase()}
            </Typography>
            <Typography
              sx={{
                textTransform: "capitalize",
                color: "black",
                fontFamily: "Poppins",
                fontWeight: "600",
                fontSize: "15px",
                marginLeft: "20px",
              }}
            >
              {" "}
              {hospital.City.toLocaleLowerCase()},{" "}
              {hospital.State.toLocaleLowerCase()}
            </Typography>
            <Typography
              sx={{
                color: "black",
                fontFamily: "Poppins",
                marginLeft: "20px",
                fontSize: "15px",
              }}
            >
              {hospital["Hospital Type"]}
            </Typography>
            <Typography
              sx={{
                color: "#414146",
                fontFamily: "Poppins",
                fontSize: "17px",
                marginTop: "10px",
              }}
            >
              <span
                style={{
                  color: "#02A401",
                  fontFamily: "Poppins",
                  fontWeight: "700",
                  marginLeft: "20px",
                  fontSize: "20px",
                }}
              >
                FREE{" "}
              </span>
              <span
                style={{ textDecoration: "line-through", color: "#787887" }}
              >
                ₹500
              </span>{" "}
              Consultation fee at clinic
            </Typography>
            {hospital["Hospital overall rating"] === "Not Available" ? (
              ""
            ) : (
              <Box sx={{ borderTop: "1px dotted #787887" }}>
                {" "}
                <Box
                  sx={{
                    margin: "10px 20px 10px 20px",
                    color: "white",
                    border: "1px solid #00A500",
                    borderRadius: "5px",
                    background: "#00A500",
                    width: "40px",
                    padding: "5px 10px 5px 10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <span style={{ color: "white", padding: "5px" }}>
                    <IoIosThumbsUp />
                  </span>
                  {hospital["Hospital overall rating"]}
                </Box>
              </Box>
            )}
          </Grid>
          {bookings === true ? (
            <Grid
              item
              md={3}
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row",
             
              }}
            >
             <Chip label={hospital.bookingSlot} variant="outlined" style={{borderRadius:"5px",color:"#14BEF0",border:"1px solid #14BEF0"}}/>
             <Chip label={format(hospital.bookingDate,"d LLLL yyyy")} sx={{marginLeft:"10px",marginRight:"50px",borderRadius:"5px",color:"#00A500",border:"1px solid #00A500",fontSize:"bold"}} variant="outlined" />
            </Grid>
          ) : (
            <Grid
              item
              md={3}
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  color: "#01A400",
                  fontFamily: "Poppins",
                  paddingBottom: "10px",
                  fontWeight: "500",
                  fontSize: "15px",
                }}
              >
                Available Today
              </Typography>
              <button onClick={() => handleClick()}>
                {showCalendar === true
                  ? "Hide Calendar"
                  : "Book FREE Center Visit"}
              </button>
            </Grid>
          )}
        </Grid>
        {showCalendar === true && (
          <Calendar
            hospital={hospital}
            availableSlot={availableSlot}
            handleBooking={handleBooking}
          />
        )}
      </Box>
    </div>
  );
}

export default HospitalCard;
