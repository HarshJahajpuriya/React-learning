import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core';

const lookAndFeelClassGenerator = () => {
  return ({
    "mainContainer": {
      width: "500px",
      height: "400px",
      border: "1px solid orange",
      margin: "10px",
      padding: "10px"
    },
    "mainHeading": {
      fontSize: "20pt",
      fontWeight: "bold",
      fontColor: "gray"
    },
    "subheading": {
      fontSize: "10pt",
      fontWeight: "bold",
      color: "orangered"
    }
  })
}

const AppExample29 = withStyles(lookAndFeelClassGenerator)(({classes})=>{
  return(
    <div className={classes.mainContainer}>
      <div className={classes.mainHeading}>Example 29 - @material-ui</div>
      <br></br>
      <div className={classes.subheading}>Learn Everything</div>
      <SubContainerComponent heading/>
    </div>
  )
});

const SubContainerComponent = (props) => {
  if(props.heading) {
    return (
      <h6>Subcontainer Here</h6>
    );
  } else {
    return (
      <h6>Nothing Here</h6>
    )
  }
}

export default AppExample29;
