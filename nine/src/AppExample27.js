import React from 'react';

const AppExample27 = () => {

  const [counter, setCounter] = React.useState(0);

  const incrementCounter = () => {
    setCounter(counter+1);
  }

  const equalityEvaluator = () => {
    alert('null==null' +" : "+(null==null))
    alert('10==10' +" : "+(10==10))
    alert('true==true'+" : "+ (true==true))
    alert('false==false'+" : "+ (false==false))
    // These are primitive value, hence there values are directly compared.
    
    alert('[]==[]'+" : "+([]==[]))
    alert('{}=={}'+" : "+({}=={}))
    alert('function==function'+" : "+ (function(){}==function(){}))
    alert('()=>{}==()=>{}'+" : "+((()=>{})==(()=>{})))
    // Everything else except primitive data types are objects in java, 
    // hence there addresses are being compared.

  }

  return (
    <div>
      <h1>Example 27 - React.useMemo() hook</h1>
      <NoticeBoardComponent count={counter}/>
      <button onClick={incrementCounter}>++</button> <br />
      <button onClick={equalityEvaluator}>Equality Evaluator</button>
    </div>
  );
}

var oldData = null;

const NoticeBoardComponent = ({count}) => {

  // const data = {"city": "Indore", "state": "MP"};
  // alert(oldData == data);
  // oldData = data;

  // 1. Whenever the value of count increases the NoticeBoardComponent will re-render.
  // 2. On first time rendering of the NoticeBoardComponent, null is assigned to oldData variable.
  //    And a reference of an object is assigned to data constant.
  // 3. On comparing these two variables the result will be null.
  // 4. And the reference of the object assigned to data constant will be assigned to oldData variable.
  // 5. Hence they are pointing to the same object.
  // 4. But on re-rendering of the component, oldData variable is still pointing to the previous object,
  //    but for data constant a new object will be created and assigned to it.
  // 5. Therefore, on camparing the both objects we will still get false, as they are pointing to different objects.


  const data = React.useMemo(()=>{return {"city":"Indore","state":"MP"}},[])
  alert(oldData == data)
  oldData = data;
  // 1. On first rendering, since nothing has been memorized, the function will execute and
  //    the returned value will be assigned to data constant.
  // 2. React.useMemo hook will memorize this object, and on re-rendering the memorized object
  //    will be returned.
  // 3. We can specify some values in the array, and when those values changes the function will
  //    execute again, and whatever the function returns will get assigned to data constant.
  // 4. Since, the passed array is empty, the function will execute only once in this case.
  // 5. So the same object will get assigned to data constant on each re-rendering.
  // 6. Therefore, after first rendering oldData and data both will point to the same object.

  return (
    <div>
      <h2>Notice Board</h2>
      <h3>No of placements : {count} </h3>
    </div>
  )
}

export default AppExample27;