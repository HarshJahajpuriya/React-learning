import React from 'react';

const students = [
    {"id":101, "name":"Harsh Kumar Jahajpuriya", "type":"Full Time", "company":"Microsoft", "salary":"30 LPA", "yearOfPassing":"2021"},
    {"id":102, "name":"Harhsita Dhasad", "type":"Full Time", "company":"Microsoft", "salary":"10 LPA", "yearOfPassing":"2021"},
    {"id":103, "name":"Ritik Dongre", "type":"Full Time", "company":"TCS", "salary":"20 LPA", "yearOfPassing":"2021"},
    {"id":104, "name":"Pawan Kumar Jahajpuriya", "type":"Full Time", "company":"Google", "salary":"30 LPA", "yearOfPassing":"2021"},
    {"id":105, "name":"Praveen Yadav", "type":"Internship", "company":"Linked In", "salary":"1 LPA", "yearOfPassing":"2021"},
    {"id":106, "name":"Lalit Patidar", "type":"Full Time", "company":"Hashed In", "salary":"20 LPA", "yearOfPassing":"2021"}
  ];

const AppExample7 = () => {

const [title] = React.useState('Thinking Machines');
const [year] = React.useState(2021);


return (
<div>
<TitleComponent title={title} placementYear={year} />
{true && <StudentsListComponent students={students} />}
</div>
);


}


const TitleComponent = ({title, placementYear}) => {
return (
<h1>{title} : Placements {placementYear}</h1>
)
}


const StudentsListComponent = ({students}) => {
return (
<div>
{
students.map((student) => {
return (
<StudentComponent key={student.id} student={student} />
)
})
}
</div>
)
}


const StudentComponent = ({student}) => {
return (
<div>
Name: <b>{student.name}</b> <br/>
Company: <b>{student.company} </b> <br/>
Type: <b>{student.type}</b>&nbsp; &nbsp; Salary: <b>{student.salary}</b><br/>
Year of passing: <b>{student.yearOfPassing}</b>
<hr/>
</div>
)
}


export default AppExample7;