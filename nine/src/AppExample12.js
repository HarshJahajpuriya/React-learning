import React from 'react';

const AppExample12 = () => {

function produceFactorial(num) {
const p = new Promise(resolve => {
setTimeout(()=>{
var e, f;
e = f = 1;
while(e<=num) {
f = f*e;
e++;
}
resolve(f);
}, 10000);
});
return p;
}

const buttonClickHandler = () => {
var prms = produceFactorial(5);
alert('Factorial is being produced somewhere else.');
prms.then((factorial) => {
alert('The factorial of 5 is : ' + factorial);
});
}

return (
<div>
<h1>Thinking Machines</h1>
<button type='button' onClick={buttonClickHandler}>Click Me</button>
</div>
);

}

export default AppExample12;