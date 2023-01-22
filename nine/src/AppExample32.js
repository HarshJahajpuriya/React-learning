import React from 'react';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const lookAndFeel = () => {
  return ({
    "mainContainer": {
      margin: '10px',
      padding: '10px',
      textAlign: "center"
    },
    "city": {
      color: "gray",
      fontWeight: 500,
      padding: '5px',
      margin: "5px"
    }
  })
}

const AppExample32 = withStyles(lookAndFeel)(({ classes }) => {
  return (
    <div className={classes.mainContainer}>
      <h1>Example 32 - @material-ui (Grid - direction: column)</h1>
      <hr />
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Paper className={classes.city}>
            <h3>Cities Of Madhya Pradesh</h3>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Grid container spacing={3} direction="column">
            <Grid item>
              <Paper>Indore</Paper>
            </Grid>
            <Grid item>
              <Paper>Bhopal</Paper>
            </Grid>
            <Grid item>
              <Paper>Ujjain</Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid container spacing={3} direction="column">
            <Grid item>
              <Paper>Gwalior</Paper>
            </Grid>
            <Grid item>
              <Paper>Hoshangabad</Paper>
            </Grid>
            <Grid item>
              <Paper>Itarsi</Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid container spacing={3} direction="column">
            <Grid item>
              <Paper>Bhopal</Paper>
            </Grid>
            <Grid item>
              <Paper>Maksi</Paper>
            </Grid>
            <Grid item>
              <Paper>Sehore</Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid container spacing={3} direction="column">
            <Grid item>
              <Paper>Ratlam</Paper>
            </Grid>
            <Grid item>
              <Paper>Dhar</Paper>
            </Grid>
            <Grid item>
              <Paper>Vidisha</Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
})

export default AppExample32;