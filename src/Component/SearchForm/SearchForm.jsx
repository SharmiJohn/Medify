import React, { useEffect, useState } from "react";
import { Box, Select, MenuItem, InputAdornment } from "@mui/material";
import { IoIosSearch } from "react-icons/io";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function SearchForm() {
  const [state, setstate] = useState([]);
  const [cities, setcities] = useState([]);
  const [data, setdata] = useState({ state: "", city: "" });
  const navigate = useNavigate();
  useEffect(() => {
    const fetchstate = async () => {
      try {
        let response = await axios.get(
          "https://meddata-backend.onrender.com/states"
        );
        setstate(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchstate();
  }, []);
  useEffect(()=>{
    const fetchcity=async()=>{
        setcities([]);
        setdata((prev)=>({...prev,city:""}))
        try{
            let responses=await axios.get(`https://meddata-backend.onrender.com/cities/${data.state}`)
            setcities(responses.data);
        }
        catch(error){
            console.log(error);
        }
    }
   fetchcity();
  },[data.state])
  const handledata = (e) => {
    const name = e.target.name;
    setdata((prev) => ({ ...prev, [name]: e.target.value }));
  };
  const handlesubmit=(e)=>{
    e.preventDefault();
    console.log(data.state,data.city);
    if(data.state&& data.city){
        navigate( `/search?state=${data.state}&city=${data.city}
`)
    }

  }
  return (
    <div>
      <Box
        component="form"
        sx={{ display: "flex", justifyContent:"center",alignItems:"center",gap:"40px",flexDirection: { xs: "column", md: "row" } }}
        onSubmit={handlesubmit}
      >
        <Select
        displayEmpty
          id="state"
          name="state"
          sx={{ width: "300px" }}
          value={data.state}
          onChange={(e) => handledata(e)}
          startAdornment={
            <InputAdornment position="start">
              <IoIosSearch />
            </InputAdornment>
          }
         
        >
          {/* startAdornment={ <InputAdornment position="start"></InputAdornment>}econ place pandrathukaga */}
          <MenuItem disabled value=""  sx={{color:"#ABB6C7"}}>
            State
          </MenuItem>
          {state.map((items, index) => (
            <MenuItem value={items} key={index}>
              {items}
            </MenuItem>
          ))}
        </Select>
        <Select
        displayEmpty
          id="city"
          name="city"
          value={data.city}
          onChange={(e) => handledata(e)}
          startAdornment={
            <InputAdornment position="start">
              <IoIosSearch />
            </InputAdornment>
          }
          
          sx={{ width: "300px" }}
          
        >
          <MenuItem disabled value="" sx={{color:"#ABB6C7"}}>
            Cities
          </MenuItem>
          {cities.map((item,index)=>( <MenuItem key={index} value={item}>{item}</MenuItem>))}
         
        </Select>
        <button>{ <IoIosSearch />} Search</button>
      </Box>
    </div>
  );
}

export default SearchForm;
