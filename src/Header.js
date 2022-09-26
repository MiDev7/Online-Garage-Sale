import React,{useState} from 'react'
import {AppBar, Typography,Toolbar, Tabs, Tab,Button,useMediaQuery,useTheme } from '@mui/material';
import {ThemeProvider, createTheme,} from '@mui/material/styles';
import Drawer from './Drawer';


const theme = createTheme({
    palette: {
      background: {
        main: '#F2F2F2',
      },
      text: {
        primary: '#7EA955',
        secondary: '#7EA955',
      },
      primary: {
        light: '#548C1C',
        main: '#42731F',
        dark: '#42741F'
      }
    },
});

function Header() {
    const [value, setValue] = useState()
    const DrawerTheme = useTheme();
    const PAGES = ["HOME","SHOP","ABOUT US","CONTACT US"]
    const isMatch =  useMediaQuery(DrawerTheme.breakpoints.down("md"));
    console.log(isMatch)
  return (
    <ThemeProvider theme={theme}>
        <React.Fragment>
            
                <AppBar sx={{
                    background : '#F2F2F2'
                }}>
                    <Toolbar>
                        <Typography sx={{
                            color : 'primary.main'
                        }}> 
                            Online Garage Sale
                        </Typography>
                        {
                            isMatch ? (
                                <>
                                    <Drawer sx={{
                                        marginRight : '100%',
                                        padding: '100px'
                                    }}/>
                                </>
                            ):(
                                <>
                                    <Tabs sx={{
                                    marginLeft : 'auto',
                                    color: 'primary.dark'
                                    }}  
                                    value={value} 
                                    onChange={(e,value)=> setValue(value)} 
                                    indicatorColor="primary">
                                        {
                                            PAGES.map((page,index)=>(
                                                <Tab key={index} label={page}/>
                                            ))
                                        }
                                    </Tabs>
                                    <Button  sx={{
                                        marginLeft: "auto"
                                    }}variant="contained">Login</Button>
                                    <Button sx={{
                                        marginLeft: "10px"
                                    }}variant="contained">Register</Button>
                                </>
                            )
                        }
                        
                        
                    </Toolbar>
                </AppBar>  
                
        </React.Fragment> 
     </ThemeProvider>
  )
}

export default Header