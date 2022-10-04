import React,{useState} from 'react'
import {SwipeableDrawer,List,ListItemButton, ListItemIcon, ListItemText, IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Drawer() {
    const PAGES = ["HOME","SHOP","ABOUT US","CONTACT US"]
    const [openDrawer, setOpenDrawer] =  useState(false)
  return (
    <React.Fragment>
        <SwipeableDrawer 
        sx={{
            padding: "20px",
            width: "90%"
        }}
        open={openDrawer}
            onClose={()=>setOpenDrawer(false)}
        >
            <List >
                {
                    PAGES.map((page,index)=>(
                        <ListItemButton onClick={()=> setOpenDrawer(false)} key={index} variant="contained"
                        >
                            <ListItemIcon>
                                <ListItemText>{page}</ListItemText>
                            </ListItemIcon>
                        </ListItemButton>
                    ))}
                <hr/>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemText>LOGIN</ListItemText>
                    </ListItemIcon>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemText>REGISTER</ListItemText>
                    </ListItemIcon>
                </ListItemButton>
                    
                
            </List>
        </SwipeableDrawer>
        <IconButton  sx={{ color: "primary.light"}}onClick={()=> setOpenDrawer(!openDrawer)}><MenuIcon/></IconButton>
    </React.Fragment>
  )
}

export default Drawer