import React from 'react';

const AppExample17 = () => {

  const arrayReducer = () => {
    var x= [10,20,30];

    // When only one argument is passed to reduce function, the accumulator will be the first element of the array
    // On cycle 1:    10,         20,  1,  [10,20,30]
    // On cycle 2:    undefined,  30,  2,  [10,20,30]
    //                  ^
    //                Whatever the previous cycle's function return 
    // In the passed function,
    // the first argument is accumulator (by default the first element of array is accumulator) (i.e, 10)
    // the second argument is the next element of the array (i.e, 20)
    // the third argument is the index of latest element of the array (i.e, 1 for element 20)
    // the fourth argument is the whole array for which the reduce function is invoked
    x.reduce((a,b,c,d) => {
      alert(a);
      alert(b);
      alert(c);
      alert(d);
    })

    // When two arguments are passed to reduce function, the second argument will act as the accumulator in the first cycle.
    // on cycle 1:    0,    10,   0,    [10,20,30]
    // on cycle 2:    10,   20,   1,    [10,20,30]
    // on cycle 1:    30,   30,   2,    [10,20,30]
    // Finally the array reducer will return 60.
    var j = 0;
    j = x.reduce((a,b,c,d) => {
      alert(a);
      alert(b);
      alert(c);
      alert(d);
      return a+b;
    }, 0)
    alert("Total is = " + j);

  }

  

  // Pure function:
  // 1. For a particular input, the output is always same
  // 2. Function should have no side effects, that is the local variables of the function can be changed but the outer environment (variables) should not get affected.

  // Reducers:
  // Reducers are the pure functions that take the current state and an action as arguments, and return a new state result.

  // reducer1 is a pure function
  const reducer1 = (value, action) => {
    if(action==="UP") return value+1;
    if(action==="DOWN") return value-1;
    return value;
  }

  // reducer2 is not a pure function
  const reducer2 = (obj, action) => {
    if(action === "UP") obj.value++;
    if(action === "DOWN") obj.value--;
    return obj;
  }

  // reducer3 is not a pure function
  const reducer3 = (obj, action) => {
    var m = {
      value: obj.value
    }
    if(action === "UP") m.value++;
    if(action === "DOWN") m.value--;
    return m;
  }

  const reducer = () => {
    var v=10;
    alert(reducer1(v,"UP"))
    alert(v)
    alert(reducer1(v,"DOWN"))
    alert(v)

    var k = {value: 100}
    alert(reducer2(k, "UP").value)
    alert(k.value)
    alert(reducer2(k, "DOWN").value)
    alert(k.value)

    var x = {value: 500}
    alert(reducer3(x, "UP").value)
    alert(x.value)
    alert(reducer3(x, "DOWN").value)
    alert(k.value)
  }


  const add = (a,b,c,d) => {
    return a+b+c+d;
  }

  const spread = () => {
    var arr = [10,20,30,40,50];
    alert(add(arr[0],arr[1],arr[2],arr[3]));
    alert(add(...arr))
    var a,b,c,d;
    [a,b,c,d] = [...arr];
    alert(a)
    alert(b)
    alert(c)
    alert(d)
    alert([...arr])
  }


  const reduceIt = (obj, action) => {
    if(action === "ADD") {
      return { ...obj, "result": obj.firstNumber + obj.secondNumber };
    }
    if(action === "SUBTRACT") {
      return { ...obj, "result": obj.firstNumber - obj.secondNumber };
    }
    return obj;
  }


  const doSomething = () => {
    var dataModel = {
      firstNumber : 10,
      secondNumber : 20,
      result: 0
    }

    alert(reduceIt(dataModel, "ADD").result)
    alert(dataModel.result);
    alert(reduceIt(dataModel, "SUBTRACT").result)
    alert(dataModel.result);

  }


  return (
    <div>
      <h1>Thinking Machines</h1>
      <br></br>
      <br></br>
      <button onClick={arrayReducer}>Array Reducer</button>
      <br></br>
      <br></br>
      <button onClick={reducer}>Reducer (Pure Function)</button>
      <br></br>
      <br></br>
      <button onClick={spread}>Spread Operator</button>
      <br></br>
      <br></br>
      <button onClick={doSomething}>FINAL</button>
    </div>
  );
}

export default AppExample17;