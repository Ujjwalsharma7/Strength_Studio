import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import Logo from '../assets/images/logo-no-background.png'
const footer = () => {
  return (
    <Box mt='80px' bgcolor='#fff3f4'>
      <Stack gap='20px' alignItems='center' px='40px' pt='24px'>
        <img src={Logo} alt='' width='200px' height='40px' />
        <Typography variant='h5' pb='20px' >
          Made with ❤️ by Ujjwalsharma7 
        </Typography>
      </Stack>
    </Box>
  )
}

export default footer
