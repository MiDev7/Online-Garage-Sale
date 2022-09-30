import React from 'react'
// import {styled, Paper} from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';



// const Item = styled(Paper)(({ theme }) => ({
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.secondary,
//   }));
class Shop extends React.Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
    }

    fetchData(){
        fetch('http://127.0.0.1:8000/api/products/')
        .then(response=>response.json())
        .then((data)=>{
            this.setState({
                data:data
            });
        });
    }

    componentDidMount(){
        this.fetchData();
        
    }

    render(){
        const prodData=this.state.data;
        const cards = prodData.map((prod)=>
            <Grid item sx={6}>
                <Card sx={{ maxWidth: 250 }}>
                    <CardMedia
                            component="img"
                            height="140"
                            image="https://raw.githubusercontent.com/MiDev7/hackathon-2/main/main/static/image/Products/syed-hussaini-MXeDE_yCdHQ-unsplash.jpg"
                            alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {prod.name}
                        </Typography>
                        <Typography variant="body2" color="secondary.dark">
                        MUR {prod.price}
                        </Typography>
                    </CardContent>
                    <CardActions style={{justifyContent: 'center'}}>
                        <Button className='Button'  size="large" variant="contained">BUY</Button>
                    </CardActions>
                </Card>
            
            </Grid>
        );
        return (

            <Grid container spacing={2} justifyContent="center" sx={{
                position:"relative"
            }}>
                {cards}
            </Grid>
    
          );
    }
    
}

export default Shop
