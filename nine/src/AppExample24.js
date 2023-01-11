import React from 'react';
import styledComponents from 'styled-components';

const StylishContainer = styledComponents.div`
  width: 700px;
  height: 400px;
  border: 2px solid gray;
  margin: auto;
  margin-top: 10px;
  padding: 10px;
  text-align: center;
  background: linear-gradient(to right, white, whitesmoke, #aaaaaa)
`;

const StylishHeading = styledComponents.h1`
  padding: 4px;
  border-bottom: 1px solid gray;
`;

const StylishAboutMe = styledComponents.div`
  margin: auto;
  width: 400px;
  height: 200px;
  text-align: left;
  padding: 12px;
  background: ${(wrapper) => {return wrapper.themeToApply.background}};
  color: ${(wrapper) => {return wrapper.themeToApply.foreground}};
  border: ${wrapper => wrapper.themeToApply.borderType}
`;

const darkTheme = {
  background: 'gray',
  foreground: 'white',
  borderType: '1px solid white'
}

const lightTheme = {
  background: 'whitesmoke',
  foreground: 'black',
  borderType: '1px solid gray'
}

const AppExample24 = () => {

  const [theme, setTheme] = React.useState(darkTheme);
  const [themeName, setThemeName] = React.useState("darkLook");

  const changeTheme = (ev) => {
    setThemeName(ev.target.value);
    if(ev.target.value === "darkLook") {  
      setTheme(darkTheme)
    } else if(ev.target.value === "lightLook") {
      setTheme(lightTheme);
    }
  }  

  return (
    <StylishContainer>
      <StylishHeading>Example 24 - styled-components library</StylishHeading>
      <br/>
      Select theme &nbsp;
      <select value={themeName} onChange={changeTheme}>
        <option value="darkLook">Dark</option>
        <option value="lightLook">Light</option>
      </select>
      <hr />
      <AboutMeComponent appliedTheme={theme}/>
    </StylishContainer>
  );
}

const AboutMeComponent = ({appliedTheme}) => {
  return (
    <StylishAboutMe themeToApply={appliedTheme}>
      <h3>About Me</h3>
      I want to be an software engineer with peerless skills and excpetional development abilities. <br /> <br />
      I completed my graduation in 2022, and started a full time job as Associate Software engineer and Virtusa Consulting Private Limited.
    </StylishAboutMe>
  );
}

export default AppExample24;