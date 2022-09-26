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
//     color: theme.palette.text.secondary,
//   }));
function Shop(){
    return (
        <Grid container spacing={2} justifyContent="center" sx={{
            position:"relative"
        }}>
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
                        Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions style={{justifyContent: 'center'}}>
                        <Button size="medium" variant="contained">BUY</Button>
                    </CardActions>
                </Card>
            
            </Grid>
            <Grid item sx={6} >
                <Card sx={{ maxWidth: 250 }}>
                    <CardMedia
                            component="img"
                            height="140"
                            image="https://raw.githubusercontent.com/MiDev7/hackathon-2/main/main/static/image/Products/syed-hussaini-MXeDE_yCdHQ-unsplash.jpg"
                            alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions style={{justifyContent: 'center'}}>
                        <Button size="medium" variant="contained">BUY</Button>
                    </CardActions>
                </Card>
            
            </Grid>
            <Grid item sx={6} >
                <Card sx={{ maxWidth: 250 }}>
                    <CardMedia
                            component="img"
                            height="140"
                            image="https://raw.githubusercontent.com/MiDev7/hackathon-2/main/main/static/image/Products/syed-hussaini-MXeDE_yCdHQ-unsplash.jpg"
                            alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions style={{justifyContent: 'center'}}>
                        <Button size="medium" variant="contained">BUY</Button>
                    </CardActions>
                </Card>
            
            </Grid>
            <Grid item sx={6} md={4} >
                <Card sx={{ maxWidth: 250 }}>
                    <CardMedia
                            component="img"
                            height="140"
                            image="https://raw.githubusercontent.com/MiDev7/hackathon-2/main/main/static/image/Products/syed-hussaini-MXeDE_yCdHQ-unsplash.jpg"
                            alt="green iguana"
                    />
                    <CardContent >
                        <Typography gutterBottom variant="h5" component="div">
                        Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions style={{justifyContent: 'center'}}>
                        <Button size="medium" variant="contained">BUY</Button>
                    </CardActions>
                </Card>
            
            </Grid>
    

        </Grid>

      );
}

export default Shop
