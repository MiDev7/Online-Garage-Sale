import React, {useState, useEffect} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import {useContext} from 'react'
import  CartContext  from './context/CartContext';


function Cards() {
    const [data,setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            let response = await fetch('http://127.0.0.1:8000/api/products/');
        
            if (response.status === 200) {
                let data = await response.json();
                // handle data
                setData(data)
            }
        }

        fetchData();
      
      },[]);

    const {addToCart} = useContext(CartContext)
  return (
    <React.Fragment>
        {
        
            data.map((item)=>
            <Grid  key={item.id} item xs={3}>
                <Card sx={{ maxWidth: 250 }}>
                    <CardMedia
                            component="img"
                            height="140"
                            image="https://raw.githubusercontent.com/MiDev7/hackathon-2/main/main/static/image/Products/syed-hussaini-MXeDE_yCdHQ-unsplash.jpg"
                            alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                        </Typography>
                        <Typography variant="body2" color="secondary.dark">
                        MUR {item.price}
                        </Typography>
                    </CardContent>
                    <CardActions style={{justifyContent: 'center'}}>
                        <Button className='Button'  size="large" onClick={()=> addToCart(item.name , item.price)} variant="contained">BUY</Button>
                    </CardActions>
                </Card>
            
            </Grid>
             )
        }
    </React.Fragment>
  )
}

export default Cards