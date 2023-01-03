import React from "react";

const SloganContext = React.createContext()

const AppExample22 = () => {

  const slogans = [
    "Think Big !!!",
    "Learn Everything.",
    "Talk is cheap",
    "Action speaks louder than words"
  ]

  const [selectedSloganIndex, setSelectedSloganIndex] = React.useState(0);

  const updateSlogan = () => {
    setSelectedSloganIndex((sloganIndex) => {
      if(sloganIndex === slogans.length-1) return 0;
      else return sloganIndex+1;
    })
  }
  

  return (
    <div>
      <h1>Example 22 - React.useContext</h1>
      {/* <CoursesComponent slogan={slogans[selectedSloganIndex]}/>
      <ProjectsComponent slogan={slogans[selectedSloganIndex]}/> */}
      <SloganContext.Provider value={slogans[selectedSloganIndex]}> 
        <CoursesComponent />
        <ProjectsComponent />
      </SloganContext.Provider>
      <button onClick={updateSlogan}>Update Slogan</button>
    </div>
  )
}

const CoursesComponent = () => {
  const slogan = React.useContext(SloganContext)
  return (
    <div>
      <h3>Courses</h3>
      <ul>
        <li>C</li>
        <li>C++</li>
        <li>Java</li>
        <li>JavaScript</li>
        <li>Python</li>
      </ul>
      <h5>Our Slogan : <i>{slogan}</i></h5>
    </div>
  );
}

const ProjectsComponent = () => {
  const slogan = React.useContext(SloganContext)
  return (
    <div>
      <h3>Projects</h3>
      <ul>
        <li>Creating ORM Framework</li>
        <li>Creating Web Services Framework</li>
        <li>Creating our compiler</li>
      </ul>
      <h5>Our Motto : <i>{slogan}</i></h5> 
    </div>
  );  
}

export default AppExample22;