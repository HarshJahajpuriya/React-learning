import React from 'react';
import { withStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListITemIcon';
import AddBox from '@material-ui/icons/AddBox';
import Cancel from '@material-ui/icons/Cancel';
import Done from '@material-ui/icons/Done';

const myStyles = (theme) => {
  return ({
    mainContainer: {
      flexGrow: 1
    },
    appBar : {
      zIndex: theme.zIndex.drawer+1
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      fontWeight: 600,
      margin: '10px'
    }
  });
}

const AppExample38 = (props) => {

  const [drawerOpened, setDrawerOpened] = React.useState(false);

  const openDrawer = () => {
    setDrawerOpened(true);
  }

  const closeDrawer = () => {
    setDrawerOpened(false);
  }

  return (
    <div className={props.mainContainer}>
      <AppBar position='fixed' className={props.classes.appBar}>
        <Toolbar>
          <Typography>Example 38 - Drawer</Typography>
        </Toolbar>
      </AppBar>
      <div className={props.classes.appBarSpacer} />
      <div className={props.classes.content}>
        <Grid container justifyContent='space-between'>
          <Grid item>
            <Drawer
              open={drawerOpened}
              variant='persistent'
            >
              <div className={props.classes.appBarSpacer} />
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Done />
                  </ListItemIcon>
                  Option 1
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Cancel />
                  </ListItemIcon>
                  Option 2
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <AddBox />
                  </ListItemIcon>
                  Option 3
                </ListItem>
              </List>
            </Drawer>
          </Grid>
          <Grid item>
            {drawerOpened === false && <Button variant="outlined" onClick={openDrawer}>OPEN DRAWER</Button>}
            {drawerOpened === true && <Button variant="outlined" onClick={closeDrawer}>CLOSE DRAWER</Button>}
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default withStyles(myStyles)(AppExample38);