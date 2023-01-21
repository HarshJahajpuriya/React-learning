import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Chip from '@material-ui/core/Chip'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Hidden from '@material-ui/core/Hidden'

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

const GridContainer = (props) => {
  return (
    <Grid container {...props} />
  );
}

const ContainerItem = (props) => {
  return (
    <Grid item {...props} />
  );
}

const AppExample30 = withStyles(lookAndFeel)(({ classes }) => {
  const occupiedSpace = 3;
  return (
    <div className={classes.mainContainer}>

      <AppBar>
        <Toolbar>
          <Typography>Learning React (@material-ui)</Typography>
        </Toolbar>
      </AppBar>

      <GridContainer spacing={4}>
        <ContainerItem xs={12}>
          <Paper className={classes.paper}>
            <GridContainer justifyContent='center'>
              <ContainerItem>
                <Chip label='Example 31 - @material-ui (AppBar, Toolbar, Header, Footer, Hidden, Typography)'></Chip>
              </ContainerItem>
            </GridContainer>
          </Paper>
        </ContainerItem>

        <ContainerItem xs={occupiedSpace}>
          <Paper className={classes.paper}>
            <GridContainer justifyContent='space-evenly'>
              <ContainerItem>
                <Chip label='1'></Chip>
              </ContainerItem>
              <ContainerItem>
                <Chip label='2'></Chip>
              </ContainerItem>
              <ContainerItem>
                <Chip label='3'></Chip>
              </ContainerItem>
            </GridContainer>
          </Paper>
        </ContainerItem>

        <ContainerItem xs={occupiedSpace}>
          <Paper className={classes.paper}>
            <GridContainer justifyContent='space-evenly'>
              <ContainerItem>
                <Chip label='4'></Chip>
              </ContainerItem>
              <ContainerItem>
                <Chip label='5'></Chip>
              </ContainerItem>
              <ContainerItem>
                <Chip label='6'></Chip>
              </ContainerItem>
            </GridContainer>
          </Paper>
        </ContainerItem>

        <ContainerItem xs={occupiedSpace}>
          <Paper className={classes.paper}>
            <GridContainer justifyContent='space-around'>
              <ContainerItem>
                <Chip label='7'></Chip>
              </ContainerItem>
              <ContainerItem>
                <Chip label='8'></Chip>
              </ContainerItem>
              <ContainerItem>
                <Chip label='9'></Chip>
              </ContainerItem>
            </GridContainer>
          </Paper>
        </ContainerItem>

        <ContainerItem xs={occupiedSpace}>
          <Paper className={classes.paper}>
            <GridContainer justifyContent='flex-end'>
              <ContainerItem>
                <Chip label='10'></Chip>
              </ContainerItem>
              <ContainerItem>
                <Chip label='11'></Chip>
              </ContainerItem>
              <ContainerItem>
                <Chip label='12'></Chip>
              </ContainerItem>
            </GridContainer>
          </Paper>
        </ContainerItem>

        <ContainerItem xs={occupiedSpace}>
          <Paper className={classes.paper}>
            <GridContainer justifyContent='space-evenly'>
              <ContainerItem>
                <Chip label='1'></Chip>
              </ContainerItem>
              <ContainerItem>
                <Chip label='2'></Chip>
              </ContainerItem>
              <ContainerItem>
                <Chip label='3'></Chip>
              </ContainerItem>
            </GridContainer>
          </Paper>
        </ContainerItem>

        <ContainerItem xs={occupiedSpace}>
          <Paper className={classes.paper}>
            <GridContainer justifyContent='space-evenly'>
              <ContainerItem>
                <Chip label='4'></Chip>
              </ContainerItem>
              <ContainerItem>
                <Chip label='5'></Chip>
              </ContainerItem>
              <ContainerItem>
                <Chip label='6'></Chip>
              </ContainerItem>
            </GridContainer>
          </Paper>
        </ContainerItem>

        <ContainerItem xs={occupiedSpace}>
          <Paper className={classes.paper}>
            <GridContainer justifyContent='space-around'>
              <ContainerItem>
                <Chip label='7'></Chip>
              </ContainerItem>
              <ContainerItem>
                <Chip label='8'></Chip>
              </ContainerItem>
              <ContainerItem>
                <Chip label='9'></Chip>
              </ContainerItem>
            </GridContainer>
          </Paper>
        </ContainerItem>

        <ContainerItem xs={occupiedSpace}>
          <Paper className={classes.paper}>
            <GridContainer justifyContent='flex-end'>
              <ContainerItem>
                <Chip label='10'></Chip>
              </ContainerItem>
              <ContainerItem>
                <Chip label='11'></Chip>
              </ContainerItem>
              <ContainerItem>
                <Chip label='12'></Chip>
              </ContainerItem>
            </GridContainer>
          </Paper>
        </ContainerItem>


        <ContainerItem xs={occupiedSpace}>
          <Paper className={classes.paper}>
            <GridContainer justifyContent='space-evenly'>
              <ContainerItem>
                <Chip label='1'></Chip>
              </ContainerItem>
              <ContainerItem>
                <Chip label='2'></Chip>
              </ContainerItem>
              <ContainerItem>
                <Chip label='3'></Chip>
              </ContainerItem>
            </GridContainer>
          </Paper>
        </ContainerItem>

        <ContainerItem xs={occupiedSpace}>
          <Paper className={classes.paper}>
            <GridContainer justifyContent='space-evenly'>
              <ContainerItem>
                <Chip label='4'></Chip>
              </ContainerItem>
              <ContainerItem>
                <Chip label='5'></Chip>
              </ContainerItem>
              <ContainerItem>
                <Chip label='6'></Chip>
              </ContainerItem>
            </GridContainer>
          </Paper>
        </ContainerItem>

        <ContainerItem xs={occupiedSpace}>
          <Paper className={classes.paper}>
            <GridContainer justifyContent='space-around'>
              <ContainerItem>
                <Chip label='7'></Chip>
              </ContainerItem>
              <ContainerItem>
                <Chip label='8'></Chip>
              </ContainerItem>
              <ContainerItem>
                <Chip label='9'></Chip>
              </ContainerItem>
            </GridContainer>
          </Paper>
        </ContainerItem>

        <ContainerItem xs={occupiedSpace}>
          <Paper className={classes.paper}>
            <GridContainer justifyContent='flex-end'>
              <ContainerItem>
                <Chip label='10'></Chip>
              </ContainerItem>
              <ContainerItem>
                <Chip label='11'></Chip>
              </ContainerItem>
              <ContainerItem>
                <Chip label='12'></Chip>
              </ContainerItem>
            </GridContainer>
          </Paper>
        </ContainerItem>


        <ContainerItem xs={occupiedSpace}>
          <Paper className={classes.paper}>
            <GridContainer justifyContent='space-evenly'>
              <ContainerItem>
                <Chip label='1'></Chip>
              </ContainerItem>
              <ContainerItem>
                <Chip label='2'></Chip>
              </ContainerItem>
              <ContainerItem>
                <Chip label='3'></Chip>
              </ContainerItem>
            </GridContainer>
          </Paper>
        </ContainerItem>

        <ContainerItem xs={occupiedSpace}>
          <Paper className={classes.paper}>
            <GridContainer justifyContent='space-evenly'>
              <ContainerItem>
                <Chip label='4'></Chip>
              </ContainerItem>
              <ContainerItem>
                <Chip label='5'></Chip>
              </ContainerItem>
              <ContainerItem>
                <Chip label='6'></Chip>
              </ContainerItem>
            </GridContainer>
          </Paper>
        </ContainerItem>

        <ContainerItem xs={occupiedSpace}>
          <Paper className={classes.paper}>
            <GridContainer justifyContent='space-around'>
              <ContainerItem>
                <Chip label='7'></Chip>
              </ContainerItem>
              <ContainerItem>
                <Chip label='8'></Chip>
              </ContainerItem>
              <ContainerItem>
                <Chip label='9'></Chip>
              </ContainerItem>
            </GridContainer>
          </Paper>
        </ContainerItem>

        <ContainerItem xs={occupiedSpace}>
          <Paper className={classes.paper}>
            <GridContainer justifyContent='flex-end'>
              <ContainerItem>
                <Chip label='10'></Chip>
              </ContainerItem>
              <ContainerItem>
                <Chip label='11'></Chip>
              </ContainerItem>
              <ContainerItem>
                <Chip label='12'></Chip>
              </ContainerItem>
            </GridContainer>
          </Paper>
        </ContainerItem>


        <ContainerItem xs={occupiedSpace}>
          <Paper className={classes.paper}>
            <GridContainer justifyContent='space-evenly'>
              <ContainerItem>
                <Chip label='1'></Chip>
              </ContainerItem>
              <ContainerItem>
                <Chip label='2'></Chip>
              </ContainerItem>
              <ContainerItem>
                <Chip label='3'></Chip>
              </ContainerItem>
            </GridContainer>
          </Paper>
        </ContainerItem>

        <ContainerItem xs={occupiedSpace}>
          <Paper className={classes.paper}>
            <GridContainer justifyContent='space-evenly'>
              <ContainerItem>
                <Chip label='4'></Chip>
              </ContainerItem>
              <ContainerItem>
                <Chip label='5'></Chip>
              </ContainerItem>
              <ContainerItem>
                <Chip label='6'></Chip>
              </ContainerItem>
            </GridContainer>
          </Paper>
        </ContainerItem>

        <ContainerItem xs={occupiedSpace}>
          <Paper className={classes.paper}>
            <GridContainer justifyContent='space-around'>
              <ContainerItem>
                <Chip label='7'></Chip>
              </ContainerItem>
              <ContainerItem>
                <Chip label='8'></Chip>
              </ContainerItem>
              <ContainerItem>
                <Chip label='9'></Chip>
              </ContainerItem>
            </GridContainer>
          </Paper>
        </ContainerItem>

        <ContainerItem xs={occupiedSpace}>
          <Paper className={classes.paper}>
            <GridContainer justifyContent='flex-end'>
              <ContainerItem>
                <Chip label='10'></Chip>
              </ContainerItem>
              <ContainerItem>
                <Chip label='11'></Chip>
              </ContainerItem>
              <ContainerItem>
                <Chip label='12'></Chip>
              </ContainerItem>
            </GridContainer>
          </Paper>
        </ContainerItem>


        <ContainerItem xs={occupiedSpace}>
          <Paper className={classes.paper}>
            <GridContainer justifyContent='space-evenly'>
              <ContainerItem>
                <Chip label='1'></Chip>
              </ContainerItem>
              <ContainerItem>
                <Chip label='2'></Chip>
              </ContainerItem>
              <ContainerItem>
                <Chip label='3'></Chip>
              </ContainerItem>
            </GridContainer>
          </Paper>
        </ContainerItem>

        <ContainerItem xs={occupiedSpace}>
          <Paper className={classes.paper}>
            <GridContainer justifyContent='space-evenly'>
              <ContainerItem>
                <Chip label='4'></Chip>
              </ContainerItem>
              <ContainerItem>
                <Chip label='5'></Chip>
              </ContainerItem>
              <ContainerItem>
                <Chip label='6'></Chip>
              </ContainerItem>
            </GridContainer>
          </Paper>
        </ContainerItem>

        <ContainerItem xs={occupiedSpace}>
          <Paper className={classes.paper}>
            <GridContainer justifyContent='space-around'>
              <ContainerItem>
                <Chip label='7'></Chip>
              </ContainerItem>
              <ContainerItem>
                <Chip label='8'></Chip>
              </ContainerItem>
              <ContainerItem>
                <Chip label='9'></Chip>
              </ContainerItem>
            </GridContainer>
          </Paper>
        </ContainerItem>

        <ContainerItem xs={occupiedSpace}>
          <Paper className={classes.paper}>
            <GridContainer justifyContent='flex-end'>
              <ContainerItem>
                <Chip label='10'></Chip>
              </ContainerItem>
              <ContainerItem>
                <Chip label='11'></Chip>
              </ContainerItem>
              <ContainerItem>
                <Chip label='12'></Chip>
              </ContainerItem>
            </GridContainer>
          </Paper>
        </ContainerItem>


        <ContainerItem xs={occupiedSpace}>
          <Paper className={classes.paper}>
            <GridContainer justifyContent='space-evenly'>
              <ContainerItem>
                <Chip label='1'></Chip>
              </ContainerItem>
              <ContainerItem>
                <Chip label='2'></Chip>
              </ContainerItem>
              <ContainerItem>
                <Chip label='3'></Chip>
              </ContainerItem>
            </GridContainer>
          </Paper>
        </ContainerItem>

        <ContainerItem xs={occupiedSpace}>
          <Paper className={classes.paper}>
            <GridContainer justifyContent='space-evenly'>
              <ContainerItem>
                <Chip label='4'></Chip>
              </ContainerItem>
              <ContainerItem>
                <Chip label='5'></Chip>
              </ContainerItem>
              <ContainerItem>
                <Chip label='6'></Chip>
              </ContainerItem>
            </GridContainer>
          </Paper>
        </ContainerItem>

        <ContainerItem xs={occupiedSpace}>
          <Paper className={classes.paper}>
            <GridContainer justifyContent='space-around'>
              <ContainerItem>
                <Chip label='7'></Chip>
              </ContainerItem>
              <ContainerItem>
                <Chip label='8'></Chip>
              </ContainerItem>
              <ContainerItem>
                <Chip label='9'></Chip>
              </ContainerItem>
            </GridContainer>
          </Paper>
        </ContainerItem>

        <ContainerItem xs={occupiedSpace}>
          <Paper className={classes.paper}>
            <GridContainer justifyContent='flex-end'>
              <ContainerItem>
                <Chip label='10'></Chip>
              </ContainerItem>
              <ContainerItem>
                <Chip label='11'></Chip>
              </ContainerItem>
              <ContainerItem>
                <Chip label='12'></Chip>
              </ContainerItem>
            </GridContainer>
          </Paper>
        </ContainerItem>

        <Hidden only={["xs", "md"]}>
          <ContainerItem xs={12}>
            <Paper className={classes.paper}>
              <GridContainer>
                <ContainerItem xs={4}>
                  <GridContainer justifyContent='flex-start'>
                    <ContainerItem xs={4}>
                      <Typography>&copy;2023</Typography>
                    </ContainerItem>
                  </GridContainer>
                </ContainerItem>
                <ContainerItem xs={4}>
                  <GridContainer justifyContent='center'>
                    <ContainerItem>
                      <Chip label='Footer'></Chip>
                    </ContainerItem>
                  </GridContainer>
                </ContainerItem>
                <ContainerItem xs={4}>
                  <GridContainer justifyContent='flex-end'>
                    <ContainerItem>
                      <Typography>:- Harsh Kumar Jahajpuriya</Typography>
                    </ContainerItem>
                  </GridContainer>
                </ContainerItem>
              </GridContainer>
            </Paper>
          </ContainerItem>
        </Hidden>


      </GridContainer>
    </div>
  );
});

export default AppExample30;