import React, { useState } from 'react'
import {startOfDay} from "date-fns"
import DaySlot from "./DaySlot/DaySlot"
import TimeSlot from "./TimeSlot"
import { Box } from '@mui/material'
function Calendar({hospital ,availableSlot,handleBooking}) {
    const [date,setdate]=useState(startOfDay(new Date()));
    const totalSlot=availableSlot.morning.length+availableSlot.afternoon.length+availableSlot.evening.length;
  return (
    <div>
        <Box>
            <DaySlot
            date={date} setdate={setdate} totalSlot={totalSlot}/>
            <TimeSlot availableSlot={availableSlot} hospital={hospital} handleBooking={handleBooking} date={date}/>
        </Box>
    </div>
  )
}

export default Calendar;