import React from "react";
import SearchForm from "../../Component/SearchForm/SearchForm";
import { useSearchParams } from "react-router-dom"; //getdata deom url
import { Box, Container, Stack, Typography, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import ad from "../../assets/ad.png";
import axios from "axios";
import bookicon from "../../assets/bookicon.png";
import HospitalCard from "../../Component/HospitalCard/HospitalCard";
import Modals from "../../Component/Modals/Modals";
function SearchPage() {
  let [searchParams, setSearchParams] = useSearchParams();
  const [state, setstate] = useState(searchParams.get("state"));
  const [city, setcity] = useState(searchParams.get("city"));
  const [hospitals, sethospitals] = useState([]);
  const [loading, setloading] = useState(false);
  const[Modelopen,setModalopen]=useState(false);
  const[bookingDetails,setbookingDetails]=useState({})
  const[availableSlot,setavailableSlot]=useState({
    morning: ["11:30 AM"],
    afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
    evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
  })
  const handleBooking=(hospitals)=>{
    setModalopen(true);
    setbookingDetails(hospitals)
  }
  useEffect(() => {
    const gethospital = async () => {
      try {
        const response = await axios.get(
          `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`
        );
        sethospitals(response.data);
        setloading(false);
      } catch (error) {
        console.log(error);
      }
    };

    if (state && city) {
      setloading(true);
      gethospital();
    }
    console.log(hospitals);
  }, [state, city]);
  useEffect(() => {
    setstate(searchParams.get("state"));
    setcity(searchParams.get("city"));
  }, [searchParams]);

  return (
    <div>
      <Box
        sx={{
          border:
            "1px soli linear-gradient(91.75deg, #2AA7FF 1.4%, #0C8CE6 100.57%) ",
          background:
            "linear-gradient(91.75deg, #2AA7FF 1.4%, #0C8CE6 100.57%)",
          padding: "15px",
          borderBottomRightRadius: "15px",
          borderBottomLeftRadius: "15px",
          height: "70px",
          position: "relative",
          '@media (max-width: 600px)': {
          marginLeft: '30px',
        },
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            transform: "translatey(50%)",
            background: "#FFFFFF",
            borderRadius: "10px",
            p: 3,
            mb: "50px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          }}
        >
          <SearchForm />
        </Container>
      </Box>
      <Container>
        <Grid container spacing={10}>
          <Grid item xs={12} md={9}>
            <Stack  marginTop={{md:"200px" ,xs:"400px"}}>
              {hospitals.length === 0 && loading===false && (
                <Box>
                  <Typography
                    sx={{
                      fontWeight: "800",
                      fontSize: "30px",
                      border: "1px solid white",
                      background: "white",
                      padding: "20px",
                      borderRadius: "10px",
                    }}
                  >
                    Please Select State and City
                  </Typography>
                </Box>
              )}
              {loading===true&& ( <Box>
                  <Typography
                    sx={{
                      fontWeight: "800",
                      fontSize: "30px",
                      border: "1px solid white",
                      background: "white",
                      padding: "20px",
                      borderRadius: "10px",
                    }}
                  >
                    Loading
                  </Typography>
                </Box>)
              }

              {hospitals.length !== 0 && (
                <Box> <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "500",
                  fontSize: "20px",
                }}
              >
                {hospitals.length} medical centers available in{" "}
                <span style={{ textTransform: "capitalize" }}>
                  {city.toLocaleLowerCase()}
                </span>
              </Typography>
              <Typography display="flex" alignItems="center" color="#787887" >
              <Box marginBottom={{md:'0px',xs:"20px"}}> <img
                  src={bookicon}
                  alt="bookicon"
                  style={{ width: "20px", height: "20px" , marginRight: "10px"}}
                /></Box> {" "} Book appointments with minimum wait-time & verified doctor
                details
              </Typography>
              </Box>
               
              )}
              <Stack>
                {hospitals!==0&&hospitals.map((hospital,index)=>(
                  <HospitalCard key={index} hospital={hospital} availableSlot={availableSlot} handleBooking={handleBooking}/>
                ))}
              </Stack>
             
            </Stack>
          </Grid>
          
          <Grid item xs={12} md={3}>
            <Box sx={{ mt: 40 ,width:"350px" ,height:"300px", '@media (max-width: 600px)': {
          marginTop: '10px',
        },}} >
              {" "}
              <img
                src={ad}
                alt="ad"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Modals open={Modelopen} setModalopen={setModalopen} bookingDetails={bookingDetails}/>
    </div>
  );
}

export default SearchPage;
