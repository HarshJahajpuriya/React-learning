import React from 'react';
import './AppExample23.css';

const AppExample23 = () => {

  const [theme, setTheme] = React.useState("darkTheme");

  const changeTheme = (ev) => {
    setTheme(ev.target.value);
  }

  return (
    <div className='mainContainer'>
      <h1>Example 23(A) - External CSS</h1>
      <br />
      <br />
      <b>Select Theme</b> &nbsp;
      <select value={theme} onChange={changeTheme}>
        <option value="lightTheme">Light</option>
        <option value="darkTheme">Dark</option>
      </select>
      <br />
      <br />
      <AboutMeComponent theme={theme} />
    </div>
  );
}

const AboutMeComponent = ({theme}) => {
  return (
    <div className={[theme, "aboutMe"].join(" ")}>
      <h3>Harsh Kumar Jahajpuriya</h3>
      I want to be an software engineer with peerless skills and excpetional development abilities. <br /> <br />
      I completed my graduation in 2022, and started a full time job as Associate Software engineer and Virtusa Consulting Private Limited.
    </div>
  );
}

export default AppExample23;