import React from 'react';
import {Route, Link, BrowserRouter, Routes} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const myStyles = () => {
  return ({
    appBarSpacer : {
      margin : '120px',
    },
    welcome: {
      color: 'gray',
      fontWeight: '400',
      fontSize: 'xxx-large'
    }
  })
}

const AppExample36 = withStyles(myStyles)(({classes}) => {
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

const HomeComponent = withStyles(myStyles)(({ classes }) => {

  const [menuAnchor, setMenuAnchor] = React.useState(null);

  const showMenu = (ev) => {
    setMenuAnchor(ev.currentTarget)
  }

  const hideMenu = (ev) => {
    setMenuAnchor(null);
  }

  return (
    <div className={classes.appBarSpacer}>
      <AppBar>
        <Toolbar>
          <IconButton color='inherit' onClick={showMenu}>
            <MenuIcon />
          </IconButton>
          <Typography>Example 36 - react-router-dom with @material-ui components</Typography>
        </Toolbar>
        <Menu
          keepMounted
          anchorEl={menuAnchor}
          open={Boolean(menuAnchor)}
          onClose={hideMenu}
        >
          <MenuItem component={Link} to="/courses">Courses</MenuItem>
          <MenuItem component={Link} to="/contactus">Contact Us</MenuItem>
        </Menu>
      </AppBar>
      <Grid container justify='center'>
        <Grid item xs={1}><div className={classes.welcome}>Welcome</div></Grid>        
      </Grid>
    </div>
  );
})

const CoursesComponent = () => {
  return (
    <div>
    <h1>Example 36 - react-router-dom with @material-ui components</h1>
      <h2>Courses</h2>
      <br />
      <Link to="/">Home</Link>
    </div>
  );
}

const ContactUsComponent = () => {
  return (
    <div>
    <h1>Example 36 - react-router-dom with @material-ui components</h1>
      <h2>Contact Us</h2>
      <br />
      <Link to="/">Home</Link>
    </div>
  );
}



export default AppExample36;