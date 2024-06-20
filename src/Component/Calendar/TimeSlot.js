import React from 'react';
import { Stack, Divider, Typography, Chip } from '@mui/material';

function TimeSlot({ availableSlot ,hospital,handleBooking,date}) {
  const CustomChip = ({ label }) => (
    <Chip
      label={label}
     variant="outlined"
   
      
      clickable
      style={{ marginRight: '10px',borderRadius:"5px",color:"#2AA7FF"}} // Example styling, adjust as needed
      onClick={()=>handleCLick(label)}
    />
  );
const handleCLick=(label)=>{
  handleBooking({...hospital,bookingDate:date,bookingSlot:label})
}
  return (
    <div>
      <Stack direction="column" justifyContent="center"  margin="10px 10px 10px 10px" divider={<Divider orientation="horizontal" flexItem />}>
        {availableSlot.morning.length > 0 && (
          <Stack direction="row" spacing={2} margin="10px"  alignItems="center" justifyContent="flex-start"  flexWrap={"wrap"}> 
            <Typography padding="30px" fontSize="20px">Morning</Typography>
            {availableSlot.morning.map((slot, index) => (
              <CustomChip key={index} label={slot} />
            ))}
          </Stack>
        )}

      
        {availableSlot.afternoon.length > 0 && (
          <Stack direction="row" spacing={2} margin="10px" alignItems="center" justifyContent="flex-start"  flexWrap={"wrap"}>
            <Typography padding="20px" fontSize="20px">Afternoon</Typography>
            {availableSlot.afternoon.map((slot, index) => (
              <CustomChip key={index} label={slot} />
            ))}
          </Stack>
        )}

        {availableSlot.evening.length > 0 && (
          <Stack direction="row" spacing={2} margin="10px"  alignItems="center" justifyContent="flex-start"  flexWrap={"wrap"}>
            <Typography padding="30px" fontSize="20px">Evening</Typography>
            {availableSlot.evening.map((slot, index) => (
              <CustomChip key={index} label={slot} />
            ))}
          </Stack>
        )}
      </Stack>
    </div>
  );
}

export default TimeSlot;