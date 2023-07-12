import React from 'react'
import { Box, TextField, Stack, Button} from '@mui/material'



const BMIForm = () => {

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
     <Stack direction='row'>

<Stack sx={{margin:'20px'}}>

       
        <TextField
         type='number'
         id="weight"
         label="Weight"
         defaultValue=""
         helperText="(in Kgs)"
         
         color='error'
         />
         </Stack>
     
         <Stack sx={{margin:'20px'}}>
      <TextField
         type='number'
         id="hieght"
         label="Hieght"
         defaultValue=""
         helperText="(in cm)"
         color='error'
         />
     </Stack>

    
         </Stack>
   
         <Button variant='contained' color='secondary' sx={{margin: '20px'}}>Calculate</Button>
    </Box>
  )
}

export default BMIForm
