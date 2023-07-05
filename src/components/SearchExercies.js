import { useEffect, useState } from "react"
import React from 'react'
import { Box, Button, Stack, TextField, Typography } from "@mui/material"

const SearchExercies = () => {
  return (
   <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
    <Typography fontWeight={700} sx={{fontSize:{lg: '44px' , xs:'30px'}}} mb='50px' textAlign='center'>Awesome Exercises You <br /> Should Know</Typography>
    <Box>
      <TextField
      height='76px'
      value=''
      onChange={(e) => {}}
      placeholder="Search Exercies"
      type="text" />
    </Box>
   </Stack>
  )
}

export default SearchExercies
