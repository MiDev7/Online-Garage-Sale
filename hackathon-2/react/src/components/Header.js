import React,{useState , useContext} from 'react'
import {AppBar, Typography,Toolbar, Tabs, Tab,Button,useMediaQuery,useTheme } from '@mui/material';
import Drawer from './Drawer';
import AuthContext from "./context/Authcontext";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Badge from '@mui/material/Badge';
import CartContext from './context/CartContext';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import Divider from '@mui/material/Divider';
import { Navigate } from 'react-router-dom';



function Header() {
    const [value, setValue] = useState(0);
    const {items} = useContext(CartContext)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    const DrawerTheme = useTheme();
    const isMatch =  useMediaQuery(DrawerTheme.breakpoints.down("md"));
    const { user, logoutUser } = useContext(AuthContext);

    const adminPanel = (event) => {
        <Navigate to="../adminPanel" />
    }

    const handleClose = () => {
        setAnchorEl(null);
      };
    const tabs =  {
        "1":{
            "title":"HOME",
            "link":"../"
        },
        "2":{
            "title":"SHOP",
            "link":"../shop"
        },
        "3":{
            "title":"ABOUT US",
            "link":"../aboutus"
        },
        "4":{
            "title":"CONTACT US",
            "link":"../contactus"
        }
    }

    var arr =[]
    Object.keys(tabs).forEach(function(key) {
        arr.push(tabs[key]);
      });




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
                                    color: 'primary.light'
                                    }}  
                                    value={value} 
                                    onChange={handleChange}
                                    indicatorColor="primary">
                                        {
                                        arr.map(item =>
                                                <Tab key={item.title} href={item.link} tabIndex={item.id} label={item.title}/>
                                                
                                            )
                                        }
                                    </Tabs>
                                </>
                            )
                        }
                        {user ? (
                            <>
                                <Badge color="error" badgeContent={items.length} sx={{
                                            marginLeft: 'auto',
                                        }} showZero>
                                    <a href="../checkout" >
                                        <ShoppingBasketIcon color='primary' />
                                    </a>  
                                </Badge>
                                <Tooltip title="Account settings">
                                    <IconButton
                                        onClick={handleClick}
                                        size="small"
                                        sx={{ ml: 2 }}
                                        aria-controls={open ? 'account-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                    >
                                        <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    anchorEl={anchorEl}
                                    id="account-menu"
                                    open={open}
                                    onClose={handleClose}
                                    onClick={handleClose}
                                    PaperProps={{
                                    elevation: 0,
                                    sx: {
                                        overflow: 'visible',
                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                        mt: 1.5,
                                        '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                        },
                                        '&:before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                        },
                                    },
                                    }}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    <MenuItem onClick={adminPanel} >
                                        <Avatar /> Profile
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem>
                                        <Button onClick={logoutUser} sx={{
                                        marginLeft: "25px"
                                    }}variant="text">
                                            <ListItemIcon>
                                                <Logout fontSize="medium" fontWeight="700"  />
                                            </ListItemIcon>
                                            Logout
                                        </Button>
                                    </MenuItem>
                                </Menu>
                                
                                
                            </>
                        ):(
                            <>
                                <Button href="../login" sx={{
                                    marginLeft: "auto"
                                }}variant="contained">Login</Button>
                                <Button href="../signup" sx={{
                                    marginLeft: "10px"
                                }}variant="contained">Register</Button>
                            </>
                        )}
                    </Toolbar>
                </AppBar>  
                
        </React.Fragment> 
     
  )
}

export default Header