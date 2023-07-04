import React from 'react'
import { useState } from 'react'
import { Box } from '@mui/material'

import HeroBanner from '../components/HeroBanner'
import SearchExercies from '../components/SearchExercies'
import Exercises from '../components/Exercises'

const Home = () => {
  return (
   <Box>
    <HeroBanner />
    <SearchExercies /> 
    <Exercises />
   </Box>
  )
}

export default Home
