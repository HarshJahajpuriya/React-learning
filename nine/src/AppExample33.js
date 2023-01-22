import React from 'react'
import { withStyles } from '@material-ui/core'

const lookAndFeel = () => {
  return ({
    mainContainer: {
      padding: '10px',
      margin: '10px',
      color: 'red',
      border: '2px solid blue'
    }
  })
}

const AppExample33 = ({ classes }) => {
  return (
    <div className={classes.mainContainer}>
      <h1>Example 33 - @material-ui using withStyles with export default statement</h1>
    </div>
  )
}

export default withStyles(lookAndFeel)(AppExample33);