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
        }else{

            let bmi = (weight/((height*height)/10000));
            setBmi(bmi.toFixed(1));

            if(bmi<18){
                setMessage('You are underweight')
            } else  if(bmi>18 && bmi<=25){
                setMessage('You are a healthy person.')
            } else  if(bmi>25){
                setMessage('You are overweight')
            }
        }
    }

    let reload = (event) => {
        setWeight(0);
        setHeight(0);
        setBmi('');
    }
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={calcBmi}
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
                        value={weight}
                        onChange={(event) => {
                            setWeight(event.target.value)
                        }}
                    />
                </Stack>

                <Stack sx={{ margin: '20px' }}>
                    <TextField
                        type='number'
                        id="height"
                        label="Height"
                        defaultValue="0"
                        helperText="(in cm)"
                        color='error'
                        required
                        value={height}
                        onChange={(event) => {
                            setHeight(event.target.value)
                        }}
                    />
                </Stack>


            </Stack>
            <Stack direction='row'>
            <Button variant='contained' type='submit' color='secondary' sx={{ margin: '20px', width:'150px'}} >Calculate</Button>
            <Button variant='outlined' type='submit' color='secondary' sx={{ margin: '20px', width:'150px'}} onClick={reload} >Reload</Button>
            </Stack>
            <Stack sx={{justifyContent:'center', alignItems: 'center'}}>
            <Typography variant='h4'>Your BMI is: {bmi}</Typography>
            <Typography variant='h6'>{message}</Typography> 
            <Stack className='img-container'></Stack>
            </Stack>
    </Box>
    )
}

export default BMIForm
