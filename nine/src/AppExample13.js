import React from 'react';
import loader from './loader.gif';


const AppExample13 = () => {

const [factorial, setFactorial] = React.useState(0);
const [jobStarted, setJobStarted] = React.useState(false);
const [processing, setProcessing] = React.useState(false);

const produceFactorial =(num) => {
const p = new Promise(resolve => {
setTimeout(() => {
var e , f;
e =f = 1;
while(e<=num) {
f= f *e;
e++;
}
resolve(f);
}, 10000);
})
return p;
} 

const buttonClickHandler = () => {
setJobStarted(true);
setProcessing(true);
const prms = produceFactorial(5);
prms.then(f => {
setProcessing(false);
setFactorial(f);
})
}

return(
<div>
<h1>Thinking Machines-Ujjain</h1>
<button type='button' onClick={buttonClickHandler}>Click Me</button>
<br></br>
{jobStarted===true && processing===true && <img src={loader}></img>}
<br/><br/><br/>
{jobStarted===true && processing===false && 'Factorial: '}
{jobStarted===true && processing===false && factorial}
</div>
);
}

export default AppExample13;