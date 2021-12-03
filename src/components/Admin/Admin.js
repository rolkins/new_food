import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Admin() {
  return (
      <Grid containter spacing={2}>

          <Grid item xs={8}>
          23123
          </Grid>

             <Grid item xs={4}>
              1
            </Grid>


      </Grid>
  )

}