import React from 'react';

const App = () => {
  const [aaa, bbb] = React.useState("God is in details.");
  const doSomething = () => {
    if(aaa === "God is in details.")
      bbb("Devil is in details.");
    else
      bbb("God is in details.")
  }
  return (
    <div>  
      <h1 onClick={doSomething}>Thinking Machines</h1>
      <h3>{aaa}</h3>
      <Title slogan={aaa}></Title>
    </div>
  );
}

const Title = (props) => {
  return (
    <h4>{props.slogan}</h4>
  );
}

export default App;