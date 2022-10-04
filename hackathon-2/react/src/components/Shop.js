import React from 'react'
// import {styled, Paper} from '@mui/material'
import Cards from './Cards'
import Grid from '@mui/material/Grid';
import {FileContext } from './context/CartContext'
import {useState, useEffect} from 'react'

// const Item = styled(Paper)(({ theme }) => ({
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.secondary,
//   }));
function Shop(){
    return ( 
        <React.Fragment>
            <Grid container spacing={1} justifyContent="center" sx={{
            position:"relative"
        }}><Cards></Cards>
            </Grid>
        </React.Fragment>
        
    
    );
    
}

export default Shop
