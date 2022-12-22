import React from 'react';

const App = () => {

  const [childText, updateChildText] = React.useState("");

  const doSomething = (ev) => {
    updateChildText(ev.currentTarget.value);
  }

  return (
    <div>
      <h1>Thinking Machines</h1>
      <ChildComponent tellParent={doSomething} text={childText} />
    </div>
  );
}

const ChildComponent = props => {

  const somethingHappened = (ev) => {
    props.tellParent(ev);
  }

  return (
    <div>
      Something <input type='text' onChange={somethingHappened}></input>
      <br></br>
      Child is saying, <b>{props.text}</b> 
    </div>
  );
}

export default App;