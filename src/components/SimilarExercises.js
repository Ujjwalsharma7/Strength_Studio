import React from 'react'
import { Box, Typography, Stack } from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar';

const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => {
  return (
   <Box sx={{mt: { lg:'100px', xs: '0'}}}>
    <Typography variant='h4'>
      Exerses that target the same muscle group
    </Typography>
  

   </Box>
  )
}

export default SimilarExercises
