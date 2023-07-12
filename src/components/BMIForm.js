import React, { useState } from 'react';
import { Box, TextField, Stack, Button, Typography } from '@mui/material'




const BMIForm = () => {

    const [weight, setWeight]  = useState(0);
    const [height, setHeight] = useState(0);
    const [bmi, setBmi] = useState('');
    const [message, setMessage] = useState('');


    let imgSrc = '';

    let calcBmi = (event) => {
        event.preventDefault();

        if(weight === 0 || height === 0){
            alert('Please enter a valid weight and height');
        }
    }
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

                <Stack sx={{ margin: '20px' }}>


                    <TextField
                        type='number'
                        id="weight"
                        label="Weight"
                        defaultValue=""
                        helperText="(in Kgs)"
                        required
                        color='error'
                    />
                </Stack>

                <Stack sx={{ margin: '20px' }}>
                    <TextField
                        type='number'
                        id="hieght"
                        label="Hieght"
                        defaultValue="0"
                        helperText="(in cm)"
                        color='error'
                        required
                    />
                </Stack>


            </Stack>

            <Button variant='contained' type='submit' color='secondary' sx={{ margin: '20px' }}>Calculate</Button>
            <Stack sx={{justifyContent:'center', alignItems: 'center'}}>
            <Typography variant='h4'>Your BMI is: </Typography>
            <Typography variant='h6'>Message</Typography> 
            <Stack className='img-container'></Stack>
            </Stack>
    </Box>
    )
}

export default BMIForm
