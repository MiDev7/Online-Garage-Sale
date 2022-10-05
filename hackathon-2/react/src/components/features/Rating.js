import * as React from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import {useState} from  'react';



export default function Rating() {
  const [rating, setRating] = useState('0')
  const handleChange = event => {
    setRating(event.target.value)
    console.log(event.target.value)
  };
  return (
    
      <>
      <Typography component="legend">10 stars</Typography>
      <Rating name="customized-10" color='#583f85' defaultValue={2} max={10} onChange={handleChange} value={rating}  precision={0.2}/>
 </>
  );
}
