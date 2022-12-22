import React from 'react';

function produceFactorial(num, addressOfAFunction) {
setTimeout(function() {
var e, f;
e = f = 1;
while(e<=num) {
f = f*e;
e++;
}
addressOfAFunction(f);
},20000);
}

const AppExample11 = () => {

const buttonClicked = () => {
produceFactorial(5, function(factorial) {
alert('Factorial of 5 is '+ factorial);
})
alert('Factorial is being produced somewhere else');
}

return (
<div>
<h1>Thinking Machines</h1>
<button type='button' onClick={buttonClicked}>Click Me</button>
</div>
);

}

export default AppExample11;