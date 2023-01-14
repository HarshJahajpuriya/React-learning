const express = require('express');
const oracle = require('oracledb');
const bodyParser = require('body-parser');

const app = express();

const urlEncodedBodyParser = bodyParser.urlencoded({ extended: false });

const timePass = (ms) => {
  var promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms)
  })
  return promise;
}

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
  // response.sendStatus(502)
  // return;
  console.log("Retreiving Data : " + new Date())
//  await timePass(5000);
  console.log("Data Retreived : " + new Date())
  var connection = null;
  connection = await oracle.getConnection({
    "user": "hr",
    "password": "pass",
    "connectionString": "localhost:1521/xepdb1"
  });

  var resultSet = await connection.execute("Select * from student order by salary desc, name, company");

  var students = [];
  resultSet.rows.forEach((row) => {

    var id = row[0];
    var name = row[1].trim();
    var jobType = row[2];
    var company = row[3].trim();
    var salary = row[4];
    var salaryType = row[5];

    if (jobType == 'F') {
      jobType = 'Full Time';
    } else if (jobType == 'I') {
      jobType = 'Internship';
    }

    if (salaryType == 'Y') {
      if (salary > 99000) {
        salary = (salary / 100000) + ' lacs per annum';
      } else {
        salary = salary + ' per annum';
      }
    } else if (salaryType == 'M') {
      if (salary > 99000) {
        salary = (salary / 100000) + ' lacs per month';
      } else {
        salary = salary + ' per month';
      }
    }

    let student = new Student(id, name, company, jobType, salary);
    students.push(student);
  })
  response.send(students);
})



app.post('/addPlacement', urlEncodedBodyParser, async (request, response) => {
  var connection = null;
    connection = await oracle.getConnection({
      "user": "hr",
      "password": "pass",
      "connectionString": "localhost:1521/xepdb1"
    })
  

  let student = request.body;


  var resultSet = await connection.execute(`select * from student where id = ${student.id}`);
  if(resultSet.rows.length > 0) {
    await connection.close();
    response.send({"success":false, "error":student.id+" exists."});
    return;
  }

  console.log(`insert into student values (${student.id},'${student.name}','${student.placementType}','${student.company}',${student.salary},'${student.salaryType}')`)
  resultSet = await connection.execute(`insert into student values (${student.id},'${student.name}','${student.placementType}','${student.company}',${student.salary},'${student.salaryType}')`)
  await connection.commit();
  await connection.close();

  response.send({"success":true});
})

app.get('/deletePlacement', urlEncodedBodyParser, async (request, response) => {
  let id = request.query.id;
  var connection = await oracle.getConnection({
    user: "hr",
    password: "pass",
    connectionString: "localhost:1521/xepdb1"
  })

  let resultSet = await connection.execute(`select * from student where id = ${id}`);
  console.log(resultSet);
  if(resultSet.rows.length=0) {
    await connection.close();
    response.send({"status":false, "error": "Student with id "+id+" does not exists."});
    return;
  }
  resultSet = await connection.execute(`delete from student where id = ${id}`);
  console.log(resultSet);
  await connection.commit();
  await connection.close();
  response.send({"status": true});
  return;


})

app.post('/updatePlacement', urlEncodedBodyParser, async (request, response) => {
  var connection = null;
    connection = await oracle.getConnection({
      "user": "hr",
      "password": "pass",
      "connectionString": "localhost:1521/xepdb1"
    })
  

  let student = request.body;


  var resultSet = await connection.execute(`select * from student where id = ${student.id}`);
  if(resultSet.rows.length === 0) {
    await connection.close();
    response.send({"success":false, "error":student.id+" does not exists."});
    return;
  }

  console.log(`update student set name='${student.name}', job_type='${student.placementType}', company='${student.company}', salary=${student.salary}, salary_type='${student.salaryType}' where id = ${student.id}`)
  resultSet = await connection.execute(`update student set name='${student.name}', job_type='${student.placementType}', company='${student.company}', salary=${student.salary}, salary_type='${student.salaryType}' where id = ${student.id}`)
  await connection.commit();
  await connection.close();

  response.send({"success":true});
})

class StudentImageDetail {
  constructor(id, name, month, year) {
    this.id = id;
    this.name = name;
    this.month = month;
    this.year = year;
  }
}

app.get("/getPlacedStudentImagesDetails", async (request, response) => {
  const connection = await oracle.getConnection({
    user: 'hr',
    password: 'pass',
    connectString: 'localhost:1521/xepdb1'
  });

  let resultSet = await connection.execute(`select * from student_image`);
  let studentImageDetails = [];
  let id, name, month, year;

  for(let row of resultSet.rows) {
    id = row[0];
    name = row[1];
    month = row[2];
    year = row[3];
    let studentImageDetail = new StudentImageDetail(id, name, month, year);
    studentImageDetails.push(studentImageDetail);
  }
  console.log(studentImageDetails);
  response.send(studentImageDetails);

})


app.listen(5050, function (err) {
  if (err) {
    console.log(err);
  }
  console.log('Server is ready to accept requests on 5050');
});
