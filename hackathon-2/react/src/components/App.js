import React from 'react'
import Shop from './Shop';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import {ThemeProvider, createTheme,} from '@mui/material/styles';
import {BrowserRouter as Router, Routes, Route, Link, Redirect} from 'react-router-dom'; 

const theme = createTheme({
  palette: {
    background: {
      main: '#F2F2F2',
    },
    text: {
      primary: '#616161',
      secondary: '#9e9e9e',
    },
    primary: {
      light: '#548C1C',
      main: '#42731F',
      dark: '#194013'
    },
    secondary: {
      main: '#F2F2F2'
    }
  },
  components: {
    MuiButton:{
      styleOverrides: {
        root: {
          borderRadius: "40px 0px 40px 0px",
          padding: "5px 40px"
        },
      },
    }
  }
});


function App() {
  return (
  <ThemeProvider theme={theme}>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>
  </ThemeProvider>

  );
};

export default App;