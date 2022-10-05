import React, {useState} from 'react'
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

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder"
];

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
  const [personName, setPersonName] = React.useState([]);

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
  const handleUpload = (event) => {
    setUrl(event.target.value);
  
    console.log("value is:", event.target.value);
  };
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
             <input type="file" hidden value={Url} onChange={handleUpload}/>
          </Button>
        </Grid>
        <Grid item xs={12}>
          <TextField label='Product Name' variant='filled' placeholder='Enter product name' fullWidth ></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField label='Price' type='number' placeholder='Enter price of unity' variant='filled' fullWidth></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField label='Quantity available' placeholder='Enter the quantity available' variant='filled' fullWidth></TextField>
        </Grid>
        <Grid item xs={12}>
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
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          < Button type='submit' variant='contained'   fullWidth>Submit</Button>
        </Grid>
      </Grid>
    </div>
  )
  return (
    <Admin content={AddProduct}></Admin>
  )
}

export default AddProducts