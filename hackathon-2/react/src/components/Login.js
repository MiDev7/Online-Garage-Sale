import React from 'react'
import Header from './Header'
import { FormGroup, TextField } from '@mui/material'
import {Typography} from '@mui/material'
import Card from '@mui/material/Card';
import {Button ,InputAdornment,IconButton,InputLabel,FormControl,FilledInput} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Grid from '@mui/material/Grid';
import AuthContext from "./context/Authcontext";
import {useContext, useState} from 'react'
import{Navigate} from 'react-router-dom';


function Login() {
  const [values, setValues] = React.useState({
    username:'',
    password:'',
    showPassword:false,
  });
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  let usernameInput

  let pwdInput

  const { loginUser } = useContext(AuthContext);
  const handleSubmit = e => {
    e.preventDefault();
    usernameInput = username;
    pwdInput = password;
    usernameInput.length > 0 && loginUser(usernameInput, pwdInput);
    console.log('form submitted')
    {
      user ? (<Navigate to="../" />):(<Navigate to="../login"/>)
    }
  };

  const handleChange = (prop) => (event) =>{
    setValues({...values,[prop]:event.target.value});
    setPassword(event.target.value)
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
        <Card sx={{ maxWidth: 500 , padding: 5, margin:'auto',marginTop:5, position:'relative'}}>
        <FormGroup>
          <Grid container spacing={2}>
            
            <Grid item xs={12}>
              <Typography textAlign='center' variant='h3' color="primary" fontWeight="bold"  >
                LOGIN
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField label="Username" placeholder='Enter your username' onChange={e => setUsername(e.target.value)}   id='username' htmlFor='username' variant='filled' fullWidth></TextField>
            </Grid>
            <Grid item xs={12}>
            
              <FormControl  variant="filled" fullWidth >
                <InputLabel htmlFor="password">Password</InputLabel>
                <FilledInput
                id="password"
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
                  <Button type='submit' variant='outlined' onClick={handleSubmit} 

                  fullWidth>Login</Button>
            </Grid>
            
          </Grid>
          </FormGroup>
        </Card>
      </div>
    </React.Fragment>
  )
}

export default Login