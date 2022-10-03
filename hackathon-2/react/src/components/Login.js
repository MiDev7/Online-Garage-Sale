import React from 'react'
import Header from './Header'
import { TextField } from '@mui/material'
import {Typography} from '@mui/material'
import Card from '@mui/material/Card';
import {Button ,InputAdornment,IconButton,InputLabel,FormControl,FilledInput} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Grid from '@mui/material/Grid';


function Login() {
  const [values, setValues] = React.useState({
    password:'',
    showPassword:false,
  });

  const handleChange = (prop) => (event) =>{
    setValues({...values,[prop]:event.target.value});
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  return (
    <React.Fragment>
      <div>
        <Header></Header>
      </div>
      <div>
        <Card>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography textAlign='center' variant='h3' >
                LOGIN
              </Typography>
            </Grid>
            <Grid item sx={12} sm={6} >
              <TextField label="username" placeholder='Enter your username' variant='filled' fullWidth></TextField>
            </Grid>
            <Grid item sx={12} sm={6}>
            
              <FormControl  variant="filled" fullWidth >
                <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                <FilledInput
                id="filled-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                endAdornment={
                    <InputAdornment position="end">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                    >
                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                    </InputAdornment>
                }
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
                  <   Button type='submit' variant='contained' fullWidth>Login</Button>
                  </Grid>
          </Grid>
        </Card>
      </div>
    </React.Fragment>
  )
}

export default Login