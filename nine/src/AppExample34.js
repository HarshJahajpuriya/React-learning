import React from 'react';
import { withStyles } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem';

const lookAndFeel = () => {
  return ({
    mainContainer: {
      flexGrow: 1,
      color: 'blue'
    },
    contentSection: {
      marginTop: '80px'
    }
  })
}

const AppExample34 = ({ classes }) => {

  const [anchorForMenu, setAnchorForMenu] = React.useState(null);

  const appBarMenuOpenHandler = (el) => {
    setAnchorForMenu(el.currentTarget)
  }

  const appBarMenuCloseHandler = () => {
    setAnchorForMenu(null);
  }

  return (
    <div className={classes.mainContainer}>
      <AppBar>
        <Toolbar>
          <IconButton color='inherit' onClick={appBarMenuOpenHandler}>
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorForMenu}
            open={Boolean(anchorForMenu)}
            onClose={appBarMenuCloseHandler}
          >
            <MenuItem>Option 1</MenuItem>
            <MenuItem>Option 2</MenuItem>
            <MenuItem>Option 3</MenuItem>
            <MenuItem>Option 4</MenuItem>
          </Menu>
          <Typography> Example 34 - @material-ui Toolbar (IconButton, MenuIcon, Menu, MenuItem) </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.contentSection}>
        CONTENT
      </div>
    </div>
  )
}

export default withStyles(lookAndFeel)(AppExample34);