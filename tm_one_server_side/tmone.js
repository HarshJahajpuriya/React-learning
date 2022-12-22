const express = require('express');
const oracle = require('oracledb');
const app = express();

class Employee {
constructor(id, firstName , lastName) {
this.id = id;
this.firstName = firstName;
this.lastName = lastName;
}
getId() {
return this.id;
}
getFirstName() {
return this.firstName;
}
getLastName() {
return this.lastName();
}
}

app.get('/employees', async function(request, response){
console.log("Request Arrived for employees at: " + new Date())
let connection = null;
connection = await oracle.getConnection({
"user": "hr",
"password": "pass",
"connectionString": "localhost:1521/xepdb1"
});
var resultSet = await connection.execute('select employee_id, first_name, last_name from employees order by first_name, last_name');
var employees = [];
resultSet.rows.forEach(row => {
employees.push(new Employee(row[0], row[1], row[2]));
})
response.send(employees);
})


app.listen(5050, function(err) {
if(err) {
console.log(err);
}
console.log('Server is ready to accept requests on 5050');
});
