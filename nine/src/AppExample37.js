import React from 'react';
import { Route, Link, BrowserRouter, Routes } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const myStyles = (theme) => {
  return ({
    appBarSpacer: theme.mixins.toolbar,
    title: {
      color: 'gray',
      fontWeight: '400',
      fontSize: 'xxx-large'
    }
  })
}

const AppExample36 = withStyles(myStyles)(({ classes }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomeComponent />}></Route>
        <Route exact path="/courses" element={<CoursesComponent />}></Route>
        <Route exact path="/contactus" element={<ContactUsComponent />}></Route>
      </Routes>
    </BrowserRouter>
  );
})

const AppBarComponent = withStyles(myStyles)((props) => {
  const [menuAnchor, setMenuAnchor] = React.useState(null);

  const showMenu = (ev) => {
    setMenuAnchor(ev.currentTarget)
  }

  const hideMenu = (ev) => {
    setMenuAnchor(null);
  }

  return (
    <div className={props.classes.appBarSpacer}>
      <AppBar>
        <Toolbar>
          <IconButton color='inherit' onClick={showMenu}>
            <MenuIcon />
          </IconButton>
          <Typography>Example 37 - react-router-dom with @material-ui components - ({props.heading})</Typography>
        </Toolbar>
        <Menu
          keepMounted
          anchorEl={menuAnchor}
          open={Boolean(menuAnchor)}
          onClose={hideMenu}
        >
          {props.heading!=='Home' && <MenuItem component={Link} to="/">Home</MenuItem> }
          {props.heading!=='Courses' && <MenuItem component={Link} to="/courses">Courses</MenuItem> }
          {props.heading!=='Contact Us' && <MenuItem component={Link} to="/contactus">Contact Us</MenuItem> }
        </Menu>
      </AppBar>
    </div>
  );
})

const HomeComponent = withStyles(myStyles)(({ classes }) => {

  return (
    <div >
      <AppBarComponent heading="Home" />
      <Grid container justify='center'>
        <Grid item xs={2}><div className={classes.title}>Welcome</div></Grid>
      </Grid>
    </div>
  );
})

const CoursesComponent = withStyles(myStyles)(({ classes }) => {
  return (
    <div >
      <AppBarComponent heading="Courses" />
      <Grid container justify='center'>
        <Grid item xs={2}><div className={classes.title}>Courses</div></Grid>
      </Grid>
      <br />
      <Link to="/">Home</Link>
    </div>

  );
})

const ContactUsComponent = withStyles(myStyles)(({ classes }) => {

  return (


    <div >
      <AppBarComponent heading="Contact Us" />
      <Grid container justify='center'>
        <Grid item xs={2}><div className={classes.title}>Contact Us</div></Grid>
      </Grid>
      <br />
      <Link to="/">Home</Link>
    </div>

  );
})



export default AppExample36;