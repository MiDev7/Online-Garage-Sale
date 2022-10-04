import React,{useState , useContext} from 'react'
import {AppBar, Typography,Toolbar, Tabs, Tab,Button,useMediaQuery,useTheme } from '@mui/material';
import Drawer from './Drawer';
import AuthContext from "./context/Authcontext";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Badge from '@mui/material/Badge';
import CartContext from './context/CartContext';


function Header() {
    const [value, setValue] = useState(0);
    const {items} = useContext(CartContext)
    var count = items.length
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    const DrawerTheme = useTheme();
    const isMatch =  useMediaQuery(DrawerTheme.breakpoints.down("md"));
    const { user, logoutUser } = useContext(AuthContext);


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
                                <Button onClick={logoutUser} sx={{
                                    marginLeft: "25px"
                                }}variant="contained">Logout</Button>
                                
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