import React from "react"


const AppExample21 = () => {

  const slogans = [
    "Think Big !!!",
    "Learn Everything",
    "Action speaks louder than words",
    "Talk is cheap"
  ]

  const [selectedSloganIndex, setSelectedSloganIndex] = React.useState(0)

  // const updateSlogan = () => {
  //   if(selectedSloganIndex === slogans.length-1) setSelectedSloganIndex(0);
  //   else setSelectedSloganIndex(selectedSloganIndex+1);
  // }

  const updateSlogan = () => {
    setSelectedSloganIndex((sloganIndex) => {
      if(sloganIndex === slogans.length-1) return 0;
      else return sloganIndex+1;
    })
  }

  return (
    <div>
      <h1>Example 21</h1>
      <h3>My Slogan</h3>
      <div><b><i>{slogans[selectedSloganIndex]}</i></b></div>
      <br></br>
      <button onClick={updateSlogan}>Update Slogan</button>
    </div>
  );
}

export default AppExample21;