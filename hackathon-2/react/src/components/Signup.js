import React from 'react'
import Header from './Header'
import {Typography} from '@mui/material'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import {Button ,InputAdornment,IconButton,InputLabel,FormControl,FilledInput} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import MuiPhoneNumber from 'material-ui-phone-number';

function Signup() {
    const [values, setValues] = React.useState({
        phone:'',
        password: '',
        confirmPassword:'',
        showPassword: false,
        showConfirmPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };

      const handleChangeConfirmPassword = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };

      const handleClickShowConfirmPassword = () => {
        setValues({
          ...values,
          showConfirmPassword: !values.showConfirmPassword,
        });
      };
    
    
      
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
      const handleMouseDownConfirmPassword = (event) => {
        event.preventDefault();
      };
    
  return (
    <React.Fragment>
        <div>
            <Header ></Header>
        </div>
        <div>
            <Card sx={{ maxWidth: 750 , padding: 5, margin:'auto', position:'relative',marginTop:5}} >
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography textAlign='center' variant='h3' color="primary" fontWeight="bold" >REGISTER</Typography>
                    </Grid>
                    
                    <Grid item xs={12} sm={6} >
                        <TextField label="First Name" placeholder="Enter your first name" variant="filled" fullWidth ></TextField>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <TextField label="Last Name" placeholder="Enter your last name" variant="filled" fullWidth ></TextField>
                    </Grid>
                    <Grid item xs={12} >
                        <TextField label="Email" placeholder='Type your email' variant='filled' type='email' fullWidth></TextField>
                    </Grid>
                    <Grid item xs={12} >
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
                    <Grid item xs={12} >
                        <FormControl  variant="filled" fullWidth >
                            <InputLabel htmlFor="filled-adornment-confirmPassword">Confirm Password</InputLabel>
                            <FilledInput
                                id="filled-adornment-confirmPassword"
                                type={values.showConfirmPassword ? 'text' : 'password'}
                                value={values.confirmPassword}
                                onChange={handleChangeConfirmPassword('confirmPassword')}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle confirm password visibility"
                                    onClick={handleClickShowConfirmPassword}
                                    onMouseDown={handleMouseDownConfirmPassword}
                                    edge="end"
                                    >
                                    {values.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                            </FormControl>
                    </Grid>
                    <Grid item xs={12} >
                        <MuiPhoneNumber defaultCountry={'mu'} onChange={handleChange} variant='filled' label='Phone number' value={values.phone}  fullWidth/>
                    </Grid>
                    <Grid item xs={12}>
                    <   Button type='submit' variant='contained' fullWidth>Submit</Button>
                    </Grid>
                    
                </Grid>
            </Card>
        </div>
        
    </React.Fragment>
  )
}

export default Signup