import React from 'react';

const AppExample15 = () => {

//alert(":)");
// this line will execute every time state changes, as whenever the state changes component re-renders.
const [title, setTitle] = React.useState("Think Big!!!");
// This line will execute only once when the component renders for the first time.
// Whenever the component re-renders after change in state, the above line will execute.
// But the value of title will not be set as "Think Big!!!".
// Now the value of title can only be changed using the defined function.

const [something, setSomething] = React.useState("Something new");

React.useEffect(() => {
alert(':)');
}, [title])

// [title] -> the passed function will execute each time title changes
// [something] -> The passed function will execute each time value of something changes
// [title, something] -> The passed function will execute each time value of title or something changes.
// [] -> The passed function will execute only once.

const changeTitle = () => {
setTitle("We Teach more than we promise to teach");
}

const changeSomething = () => {
setSomething("Something is being changed");
}

return (
<div>
<h1>Thinking Machines</h1>
<TitleComponent title={title} something={something}/><br/><br/>
<button type='button' onClick={changeTitle}>Change title</button><br/><br/>
<button type='button' onClick={changeSomething}>Change something</button>
</div>
);

}


const TitleComponent = ({title, something}) => {
return (
<div>
{title}
<h3>{something}</h3>
</div>
);
}

export default AppExample15;