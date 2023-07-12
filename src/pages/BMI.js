import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import BMIForm from '../components/BMIForm'

const BMI = () => {
  
  return (
  <Box id='BMI' >
    <Stack>
        <Typography variant='h3'>
            Know Your Body Mass Index
        </Typography>
        <BMIForm />
    </Stack>
  </Box>
  )
}

export default BMI
