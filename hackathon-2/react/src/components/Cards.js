import React, {useState, useEffect} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
// import {useContext} from 'react'
// import  CartContext  from './context/CartContext';
import {addToCartUrl} from './constant/Constants'


function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
  }
  const csrftoken = getCookie('csrftoken');
  

function Cards() {
    const [products, setProduct] = useState([])
    const handleAddToCart = (productID) => {
        console.log(productID)
        fetch(addToCartUrl,{
         method:'POST',
         headers:{
            'X-CSRFToken' : csrftoken,
            'Content-Type' : 'application/json',
         },
         body: JSON.stringify({
             'productID': productID
         })
        })
        .then((response) => response.json())
        .then((data) =>{
            console.log(data)
        })
        
     }
    useEffect(() => {

        async function fetchData() {
            fetch('http://127.0.0.1:8000/api/products/',{
                method: 'GET'
            })
            .then((response) => response.json())
            .then((data)=>{
                console.log(data)
                setProduct(data)
            })
            
        }

        fetchData();
      
      },[]);

    
  return (
    <React.Fragment>
        {
        
            products.map((item)=>
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
                        <Button className='Button'  size="large" 
                         onClick={() => {handleAddToCart(item.id)}} variant="contained">BUY</Button>
                    </CardActions>
                </Card>
            
            </Grid>
             )
        }
    </React.Fragment>
  )
}

export default Cards