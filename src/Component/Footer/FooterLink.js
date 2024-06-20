import React from 'react'
import { Stack ,Link} from '@mui/material'
import { MdArrowForwardIos } from "react-icons/md";
function FooterLink({children}) {
  return (
    <div>
        <Stack direction="row" spacing={3}>
        <Link href="#" underline="hover" color="white"  fontWeight={300} fontSize={14} fontFamily="Roboto" padding="10px">
        <MdArrowForwardIos />
         {children}
        
    </Link>

        </Stack>
    </div>
  )
}

export default FooterLink
