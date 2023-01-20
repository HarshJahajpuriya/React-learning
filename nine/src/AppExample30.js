import React from 'react';
import {withStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Chip from '@material-ui/core/Chip'

const lookAndFeel = () => {
  return ({
    mainContainer: {
      margin: "10px",
      border: "2px solid magenta",
      padding: "10px"
    },
    paper: {
      padding: "6px",
      color: "red",
    }
  });
}

const AppExample30 = withStyles(lookAndFeel)(({ classes, justify }) => {
  return (
    <div className={classes.mainContainer}>
      <h1>Example 30 - @material-ui (Grid, Paper, Chip)</h1>
      <Grid container spacing={4}>

        <Grid item xs={12} sm={6} md={3} lg={2}>
          <Paper className={classes.paper}>
            <Grid container  justifyContent={justify}>
              <Grid item>
                <Chip label='1'></Chip>
              </Grid>
              <Grid item>
                <Chip label='2'></Chip>
              </Grid>
              <Grid item>
                <Chip label='3'></Chip>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3} lg={2}>
          <Paper className={classes.paper}>
            <Grid container justifyContent='center'>
              <Grid item>
                <Chip label='4'></Chip>
              </Grid>
              <Grid item>
                <Chip label='5'></Chip>
              </Grid>
              <Grid item>
                <Chip label='6'></Chip>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3} lg={2}>
          <Paper className={classes.paper}>
            <Grid container justifyContent='space-evenly'>
              <Grid item>
                <Chip label='7'></Chip>
              </Grid>
              <Grid item>
                <Chip label='8'></Chip>
              </Grid>
              <Grid item>
                <Chip label='9'></Chip>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3} lg={2}>
          <Paper className={classes.paper}>
            <Grid container justifyContent='space-around'>
              <Grid item>
                <Chip label='10'></Chip>
              </Grid>
              <Grid item>
                <Chip label='11'></Chip>
              </Grid>
              <Grid item>
                <Chip label='12'></Chip>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3} lg={2}>
          <Paper className={classes.paper}>
            <Grid container justifyContent='space-between'>
              <Grid item>
                <Chip label='13'></Chip>
              </Grid>
              <Grid item>
                <Chip label='14'></Chip>
              </Grid>
              <Grid item>
                <Chip label='15'></Chip>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3} lg={2}>
          <Paper className={classes.paper}>
            <Grid container justifyContent='flex-end'>
              <Grid item>
                <Chip label='16'></Chip>
              </Grid>
              <Grid item>
                <Chip label='17'></Chip>
              </Grid>
              <Grid item>
                <Chip label='18'></Chip>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3} lg={2}>
          justifyContent='default'
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={2}>
          justifyContent='center'
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={2}>
          justifyContent='space-evenly'
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={2}>
          justifyContent='space-around'
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={2}>
          justifyContent='space-between'
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={2}>
          justifyContent='flex-end'
        </Grid>
      </Grid>
    </div>
  );
});

export default AppExample30;