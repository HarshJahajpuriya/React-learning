import React from 'react';
var some = 0;
alert(some);
const titles = [
  "Thinking Machines",
  "CodeFles IT Services Pvt. Ltd.",
  "Jai Kisan",
  "Walkover",
  "Microsoft",
  "Google"
];
// Now the titles array is not the scope of AppExample1 component, it is in page scope.
// And the page is rendered only once for one request, so titles array will be declared only once.

const AppExample6 = () => {
  some++;
  // const titles = [
  //   "Thinking Machines",
  //   "CodeFles IT Services Pvt. Ltd.",
  //   "Jai Kisan",
  //   "Walkover",
  //   "Microsoft",
  //   "Google"
  // ];
  // In this case, when the titles array is in the AppExample1 component
  // Whenever, we add a title and then click on "Change Title", the changeTitle function will get
  // executed and it will change the value of titleIndex variable., i.e. the state will get changed
  // and since the state is changed the AppExample1 component will get re-rendered and the 
  // titles array will get redeclared.
  // And the added title will be removed.

  alert(some)
  const [titleIndex, setTitleIndex] = React.useState(0);

  const changeTitle = () => {
    if(titleIndex === titles.length-1) {
      setTitleIndex(0);
      return;
    }
    setTitleIndex(titleIndex+1);
  }

  const addTitle = () => {
    titles.push("Something");
    alert(titles.length)
    console.dir(titles)
  }

  return (
    <div>
      <Title title={titles[titleIndex]}/>
      <h4 onClick={changeTitle}>Change Title</h4>
      <h4 onClick={addTitle}>Add Title</h4>
      Displaying title at index: {titleIndex}
    </div>
  );
}

const Title = (props) => {
  return (
    <h1>{props.title}</h1>
  );
}

export default AppExample6;