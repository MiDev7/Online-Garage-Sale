import React, {useEffect, useState} from 'react'
import {
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  Box, 
  Button, 
  FilledInput, 
  Grid, 
  TextField,
  Typography} from '@mui/material';
import AddIcon from "@material-ui/icons/Add";
import { useTheme } from '@mui/material/styles';
import Admin from './Admin'
import Chip from "@mui/material/Chip";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

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

const names = [];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium
  };
} 


function AddProducts() {
  const theme = useTheme();
  const [category, setCategory] = React.useState([]);
  const [price, setPrice] = React.useState();
  const [quantity, setQuantity] = React.useState(0);
  const [desc, setDesc] = React.useState('');
  const [personName, setPersonName] = React.useState([]);
  const [productName,setProductName] = React.useState()
  const handleChange = (event) => {
    const {
      target: { value }
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const [Url, setUrl] = useState();
  const handleChangeName = (event) => {
    setProductName(event.target.value)
  }
  const handleUpload = (event) => {
    setUrl(event.target.value);
    console.log(event.target.value)
    let imageUrl = document.getElementById("fileInput").files[0];
    let formData = new FormData();

    formData.append("image", imageUrl);                                
    
    fetch('http://127.0.0.1:8000/api/addProduct/',{
    method:'POST',
    headers:{
      'X-CSRFToken' : csrftoken
    },
    body: formData
    })
    .then((response) => response.json())
    .then((data)=>{
      console.log('data sent',data)
      setProductName(data.result)
    })
    console.log("value is:", event.target.value);
  };

  const submitForm = () => {
    let imageUrl = document.getElementById("fileInput").files[0];
    let formData = new FormData();

    formData.append("image", imageUrl);     
    fetch('/api/saveProduct/',{
      method:'POST',
      headers:{
        'X-CSRFToken' : csrftoken,
        'Content-type':'application/json'
      },
      body: JSON.stringify({
        'name': productName,
        'price': price,
        'quantity': quantity,
        'desc': desc,
        'image': formData
        // 'category': ,
        // ''
      })
      
    })
    .then((response) => response.json())
    .then((data)=>{
      console.log(data)
    })
  }

  useEffect(()=>{
    fetch('/api/category/',{
      method:'GET',
    })
    .then((response) => response.json())
    .then((data)=>{
      console.log('data received', data)
      setCategory(data)
    })
  },[])

  const AddProduct = (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography textAlign='center' variant='h3' color='primary' fontWeight='bold'>
            ADD PRODUCT
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" component="label" color="primary">
          {" "}
            <AddIcon /> Upload a file
             <input type="file" id='fileInput'hidden value={Url} name='image' onChange={handleUpload} />
          </Button>
        </Grid>
        <Grid item xs={12}>
          <TextField label='Product Name'value={productName}  variant='filled' placeholder='Enter product name' fullWidth  onChange={handleChangeName}></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField label='Price' type='number' placeholder='Enter price of unity' value={price} onChange={e => setPrice(e.target.value)} variant='filled' fullWidth></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField label='Quantity available' placeholder='Enter the quantity available' onChange={e => setQuantity(e.target.value)} value={quantity} variant='filled' fullWidth></TextField>
        </Grid>
        {/* <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-multiple-chip-label">Category</InputLabel>
            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple
              value={personName}
              onChange={handleChange}
              input={<FilledInput id="select-multiple-chip" label="Chip" />}
              renderValue={(selected) => (
                
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip color='primary' key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {category.map((item) => (
                <MenuItem
                  key={item.id}
                  value={item.name}
                  style={getStyles(item.name, personName, theme)}
                >
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid> */}
        <Grid item xs={12}>
          <TextField
            id="filled-textarea"
            label="Description"
            placeholder="Enter the description"
            multiline
            variant="filled"
            value={desc}
            onChange={e => setDesc(e.target.value)}
            fullWidth

          />
        </Grid>
        <Grid item xs={12}>
          < Button type='submit' onClick={submitForm} variant='contained'  fullWidth>Submit</Button>
        </Grid>
      </Grid>
    </div>
  )
  return (
    <Admin content={AddProduct}></Admin>
  )
}

export default AddProducts