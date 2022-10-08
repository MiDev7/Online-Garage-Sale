import React from 'react'
import { 
  Card,
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material'

function Cart() {
  return (
    <React.Fragment>
        <Card sx={{maxWidth: 1200, minHeight:700, padding:7, margin: 'auto'}}>
          <Grid container spacing={2} >
            <Grid item xs={12}>
              <Typography variant='h3' color='primary' fontWeight='bold'>CART</Typography>
            </Grid>
            <Grid item xs={12} fullWidth>
              <TableContainer>
                <Table sx={{ minWidth: 700 }} aria-label="Cart Table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center" colSpan={3}>
                        Details
                      </TableCell>
                      <TableCell align="right">Price</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Products</TableCell>
                      <TableCell align="right">Quantity</TableCell>
                      <TableCell align="right">Unit Price</TableCell>
                      <TableCell align="right">Total</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {/* {rows.map((row) => (
                      <TableRow key={row.desc}>
                        <TableCell>{row.desc}</TableCell>
                        <TableCell align="right">{row.qty}</TableCell>
                        <TableCell align="right">{row.unit}</TableCell>
                        <TableCell align="right">Rs {ccyFormat(row.price)}</TableCell>
                      </TableRow>
                    ))} */}

                    <TableRow>
                      <TableCell rowSpan={3} />
                      <TableCell colSpan={2}>Total</TableCell>
                      <TableCell align="right">5456</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>

        </Card>
    </React.Fragment>
  )
}

export default Cart