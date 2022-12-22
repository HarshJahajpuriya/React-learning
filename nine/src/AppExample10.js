import React from 'react';

function produceFactorial(num) {
var e, f;
e=f=1;

while(e<=num) {
f = f*e;
e++;
}

return f;
}

const AppExample10 = () => {

const buttonClicked = () => {
var factorial = produceFactorial(5);
// The control will move to the next instruction when the produceFactorial function completes/ends
alert('Factorial of 5 is ' + factorial);
}

return (
<div>
<h1>Thinking Machines</h1>
<button type='button' onClick={buttonClicked}>Click Me</button>
</div>
);

}

export default AppExample10;