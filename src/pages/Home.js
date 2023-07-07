import React from 'react'
import { useState } from 'react'
import { Box } from '@mui/material'

import HeroBanner from '../components/HeroBanner'
import SearchExercies from '../components/SearchExercies'
import Exercises from '../components/Exercises'

const Home = () => {
const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);
  return (
   <Box>
    <HeroBanner />
    <SearchExercies bodyPart={bodyPart} setBodyPart={setBodyPart} setExercises={setExercises} /> 
    <Exercises bodyPart={bodyPart} setBodyPart={setBodyPart} setExercises={setExercises}/>
   </Box>
  )
}

export default Home
