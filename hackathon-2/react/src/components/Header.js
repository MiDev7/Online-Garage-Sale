import React,{useState} from 'react'
import {AppBar, Typography,Toolbar, Tabs, Tab,Button,useMediaQuery,useTheme } from '@mui/material';
import Drawer from './Drawer';
import Signup from './Signup';
import Login from './Login';


function Header() {
    const [value, setValue] = useState()
    const DrawerTheme = useTheme();
    const PAGES = ["Home","Shop","About us","Contact us"]
    const isMatch =  useMediaQuery(DrawerTheme.breakpoints.down("md"));
    console.log(isMatch)
  return (
        <React.Fragment>
            
                <AppBar sx={{
                    background : '#F2F2F2',
                    position: 'relative'
                    
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
                                                <Tab key={index} href={page} label={page}/>
                                            ))
                                        }
                                    </Tabs>
                                    <Button href="../login" sx={{
                                        marginLeft: "auto"
                                    }}variant="contained">Login</Button>
                                    <Button href="../signup" sx={{
                                        marginLeft: "10px"
                                    }}variant="contained">Register</Button>
                                </>
                            )
                        }
                        
                        
                    </Toolbar>
                </AppBar>  
                
        </React.Fragment> 
     
  )
}

export default Header