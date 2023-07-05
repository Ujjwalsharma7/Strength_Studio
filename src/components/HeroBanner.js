import React from 'react'
import { Box, Stack, Typography, Button} from '@mui/material'
const HeroBanner = () => {
  return (
    <Box sx={{
      mt: {lg: '212px' , xs: '70px'},
      ml: {sm: '50px'}
    }}>
        <Typography color='#ff2625' fontWeight='600px ' fontSize='26px'>Fitness Club</Typography>
    <Typography fontWeight={700} sx={{fontSize: {lg: '44px', xs:'40px'}
   }}>
      SETS, REPS <br /> and GAINS 
    </Typography>
    <Typography fontSize='22px' lineHeight='35px' mb={3}>Check out the most effective exercises</Typography>
    <Button variant="contained"  color='error'>Explore Exercises</Button>
    </Box>
  )
}

export default HeroBanner
