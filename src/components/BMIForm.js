import React from 'react'
import { Box, TextField,  } from '@mui/material'
const BMIForm = () => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '30ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
       
        <TextField
         type='number'
          id="weight"
          label="Weight"
          defaultValue=""
          helperText="(in Kgs)"
         
          color='error'
        />
      </div>
      <div>
      <TextField
         type='number'
          id="hieght"
          label="hieght"
          defaultValue=""
          helperText="(in cm)"
       
          color='error'
        />
      </div>
   
      
    </Box>
  )
}

export default BMIForm
