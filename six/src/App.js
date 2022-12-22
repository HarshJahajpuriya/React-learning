import React from 'react';

function App() {

  const [aaa, bbb] = React.useState("God is in Details.");

  const doSomething = () => {
    if(aaa === "God is in Details.")
      bbb("Devil is in Details.");
    else 
      bbb("God is in Details.");
  }

  return (
    <div>
      <h1>Thinking Machines</h1>
      <Title slogan={aaa} changeSlogan={doSomething}/>
    </div>
  );
}

const Title = (props) => {

  const justDoIt = () => {
    props.changeSlogan();
  }

  return (
    <h3 onClick={justDoIt}>{props.slogan}</h3>
  );
}

export default App;