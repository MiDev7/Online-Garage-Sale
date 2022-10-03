import React from 'react'
import {useState, useContext} from 'react';
import Header from './Header'
import {Typography} from '@mui/material'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import {Button ,InputAdornment,IconButton,InputLabel,FormControl,FilledInput} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import MuiPhoneNumber from 'material-ui-phone-number';
import AuthContext from "./context/Authcontext";


function Signup() {
    const [values, setValues] = React.useState({
        password: '',
        confirmPassword:'',
        showPassword: false,
        showConfirmPassword: false,
      });
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const { registerUser } = useContext(AuthContext);
  
    const handleSubmit = async e => {
      e.preventDefault();
      registerUser(username, password, password2, lastname, firstname,email);
    };
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        setPassword(event.target.value);
        
      };

      const handleChangeConfirmPassword = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        setPassword2(event.target.value);
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
            <Card sx={{ maxWidth: 750 , padding: 5, margin:'auto', position:'relative',marginTop:5}} >
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography textAlign='center' variant='h3' color="primary" fontWeight="bold" >REGISTER</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Username" placeholder="Enter your username" variant="filled" onChange={e => setUsername(e.target.value)} fullWidth ></TextField>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <TextField label="First Name" placeholder="Enter your first name" variant="filled"  onChange={e => setFirstname(e.target.value)}  fullWidth ></TextField>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <TextField label="Last Name" placeholder="Enter your last name" variant="filled" onChange={e => setLastname(e.target.value)}  fullWidth ></TextField>
                    </Grid>
                    <Grid item xs={12} >
                        <TextField label="Email" placeholder='Type your email' variant='filled' type='email' onChange={e => setEmail(e.target.value)}  fullWidth></TextField>
                    </Grid>
                    <Grid item xs={12} >
                        <FormControl  variant="filled" fullWidth >
                            <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                            <FilledInput
                            id="filled-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password') }
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
                        <MuiPhoneNumber defaultCountry={'mu'} onChange={e => setPhone(e.target.value)} variant='filled' label='Phone number' value={phone}  fullWidth/>
                    </Grid>
                    <Grid item xs={12}>
                      < Button type='submit' variant='contained' onClick={handleSubmit}  fullWidth>Submit</Button>
                    </Grid>
                    
                </Grid>
                
            </Card>
        </div>
        
    </React.Fragment>
  )
}

export default Signup