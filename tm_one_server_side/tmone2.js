const express = require('express');
const oracle = require('oracledb');
const app = express();



class Student {
constructor(id, name, company, jobType, salary) {
this.id = id;
this.name = name;
this.company = company;
this.jobType = jobType;
this.salary = salary;
}

getId() {
return this.id;
}

getName() {
return this.name;
}

getJobType() {
return this.jobType;
}

getCompany() {
return this.company;
}

getSalary() {
return this.salary;
}

getSalaryType() {
return this.salaryType;
}

}

app.get('/placements', async (request, response) => {
console.log("Request Arrived for placement at : " + new Date());

var connection = null;
connection = await oracle.getConnection({
"user":"hr",
"password":"pass",
"connectionString":"localhost:1521/xepdb1"
});

var resultSet = await connection.execute("Select * from student");

var students = [];
resultSet.rows.forEach((row) => {

var id = row[0];
var name = row[1];
var jobType = row[2];
var company = row[3];
var salary = row[4];
var salaryType = row[5];

if(jobType=='F') {
jobType='Full Time';
} else if(jobType=='I') {
jobType='Internship';
}

if(salaryType=='Y') {
if(salary > 99000) {
salary = (salary/100000) + ' lacs per annum';
} else {
salary = salary + ' per annum';
}
} else if(salaryType=='M') {
if(salary>99000) {
salary = (salary/100000) + ' lacs per month';
} else {
salary = salary + ' per month';
}
}

let student = new Student(id, name, company, jobType, salary);
students.push(student);
})
response.send(students);
})



app.listen(5050, function(err) {
if(err) {
console.log(err);
}
console.log('Server is ready to accept requests on 5050');
});
