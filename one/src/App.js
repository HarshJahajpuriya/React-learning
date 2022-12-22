import React, { useRef } from 'react';
import './App.css';
function App() {
  const tmsloganRef = useRef();
  const goToNextSlogan = function () {
    tmsloganRef.current.updateSlogan("Devil is in details");
  };
  const goToNextMotto = function () {
    tmsloganRef.current.updateMotto("Motto 2");
  };
  const getCredits = function () {
    tmsloganRef.current.updateCredits("Harsh Jahajpuriya");
  };
  return (
    <div>
      <h1>First Application Of React</h1>
      <Slogan slogan='We teach more than we promise to teach' motto='Think Big!!!' ref={tmsloganRef} />
      <br />
      <button type='button' onClick={goToNextSlogan}>Next Slogan</button>
      <br />
      <button type='button' onClick={goToNextMotto}>Next Motto</button>
      <br />
      <button type='button' onClick={getCredits}>Credits</button>
    </div>
  );
}
class Slogan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "slogan": props.slogan,
      "motto": props.motto
    };
  }
  updateSlogan(slogan) {
    this.setState({
      "slogan": slogan,
      "brandName": "Thinking Machines"
    });
  }
  updateMotto(motto) {
    this.setState({
      "motto": motto
    });
  }
  updateCredits(credits) {
    this.setState({
      "credits": credits
    });
  }
  render() {
    return (
      <div>
        <b>
          {this.state.brandName}
          <br></br>
          {this.state.slogan}
          <br></br>
          {this.state.motto}
          <br></br>
        </b>
        {this.state.credits}
      </div>
    );
  }
}
export default App;
