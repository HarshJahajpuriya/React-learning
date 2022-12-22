import React from 'react';

function App() {
  const doSomething = () => {
    return [10, 20, 30];
  }

  const [a, b, c, d] = doSomething();
  alert(a + ', ' + b+ ', ' + c+ ', ' + d); 

  return (
    <div>
      <h1>Thinking Machines</h1>
    </div>
  );  
}

export default App;