import React from 'react';
import styles from './AppExample23.module.css';

const AppExample23 = () => {

  const [themeName, setThemeName] = React.useState('lightTheme');
  const [theme, setTheme] = React.useState(styles.lightTheme);

  const changeTheme = (ev) => {
    setThemeName(ev.target.value)
    if(ev.target.value === "lightTheme") {
      setTheme(styles.lightTheme);
    } else if(ev.target.value === "darkTheme") {
      setTheme(styles.darkTheme)
    }
  } 

  return (
    <div className={styles.mainContainer}>
      <h1>Example 23 - External CSS</h1>
      <br />
      <br />
      <b>Select Theme</b> &nbsp;
      <select value={themeName} onChange={changeTheme}>
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
    <div className={[theme, styles.aboutMe].join(" ")}>
      <h3>Harsh Kumar Jahajpuriya</h3>
      I want to be an software engineer with peerless skills and excpetional development abilities. <br /> <br />
      I completed my graduation in 2022, and started a full time job as Associate Software engineer and Virtusa Consulting Private Limited.
    </div>
  );
}

export default AppExample23;