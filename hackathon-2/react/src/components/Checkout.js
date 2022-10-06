import React from 'react'
import {Grid, Typography,Card,TextField, Button} from '@mui/material';


function Checkout() {
  return (  
    <React.Fragment >
        <Grid container spacing={2} sx={{padding:'20px 300px '}} >
            <Grid item xs={12} md={8}>
              <Card sx={{ maxWidth: 1200, padding:7}} elevate={4}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography textAlign='center' variant='h5' color='primary' fontWeight='bold'>SHIPPING DETAIL</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField label='Address' variant='filled' placeholder='Enter location' fullWidth></TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField label='City' variant='filled' placeholder='Enter your city' fullWidth></TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField label='Province' variant='filled' placeholder='Enter your province' fullWidth></TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField label='Zipcode' variant='filled' placeholder='Enter your zipcode' fullWidth></TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <Button type='submit' variant='contained'  fullWidth>Submit</Button>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card color='primary' sx={{maxWidth:1000, minHeight:700, padding:7}}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography textAlign='center' variant='h5' color='primary' fontWeight='bold'> CARTS</Typography>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
        </Grid>
        
    </React.Fragment>
  )
}

export default Checkout