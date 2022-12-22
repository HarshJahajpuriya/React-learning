import React from 'react';


function getEmployees() {
const promise = new Promise((resolve)=>{
fetch('/employees').then(response => {
return response.json();
}).then(employees => {
resolve(employees);
});
})
return promise;
}

const AppExample14 = () => {

const [employees, setEmployees] = React.useState([]);

React.useEffect(() => {
const promise = getEmployees();
promise.then(employees => {
setEmployees(employees);
})
}, []);
// We are using React.useEffect hook so that when the component re-renders then the request is 
// not sent again to the server.


return (
<div>
<h1>Thinking Machines</h1>
<EmployeesListComponent employees={employees}/>
</div>
);

}

const EmployeesListComponent = ({employees}) => {
return (
<ul>
{
employees.map((employee) => {
return (
<li key={employee.id}>{employee.firstName} {employee.lastName}</li>
)
})
}
</ul>
);
}


export default AppExample14;