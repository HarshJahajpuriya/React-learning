const AppExample28 = () => {

  const doSomething = () => {
    return function(n) {
      alert(n*n);
    }
  }
  
  doSomething()(10);

  return (
    <div>
      <h1>Example 28 - Function returning a function</h1>
    </div>
  )
}

export default AppExample28;