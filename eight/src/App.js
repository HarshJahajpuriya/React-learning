import React from 'react';

const App = () => {

  const title = "Thinking Machines";
  const year = 2022;

  const [searchWhat, changeSearchCriteria] = React.useState("None");
  const [selectedStudent, changeSelectedStudent] = React.useState(null);

  const students = [
    {"id":101, "name":"Harsh Kumar Jahajpuriya", "type":"Full Time", "company":"Microsoft", "salary":"30 LPA"},
    {"id":102, "name":"Harhsita Dhasad", "type":"Full Time", "company":"Microsoft", "salary":"10 LPA"},
    {"id":103, "name":"Ritik Dongre", "type":"Full Time", "company":"TCS", "salary":"20 LPA"},
    {"id":104, "name":"Pawan Kumar Jahajpuriya", "type":"Full Time", "company":"Google", "salary":"30 LPA"},
    {"id":105, "name":"Praveen Yadav", "type":"Internship", "company":"Linked In", "salary":"1 LPA"},
    {"id":106, "name":"Lalit Patidar", "type":"Full Time", "company":"Hashed In", "salary":"20 LPA"}
  ];

  const applyFilter = (ev) => {
    if(ev.currentTarget.value.length <3) {
      changeSearchCriteria("None");
      return;
    }
    changeSearchCriteria(ev.currentTarget.value)
  }

  const filteredStudents = students.filter((student) => {
    if(searchWhat === "None") return true;
    return student.company.toLowerCase().includes(searchWhat.toLowerCase());
  });

  const studentSelected = (ev) => {
    var selectedStudentId = ev.currentTarget.id;
    filteredStudents.forEach(student => {
      if(student.id == selectedStudentId) {
        changeSelectedStudent(student);
      }
    });
  }

  return (
    <div>
      <Title title={title} placementYear={year}/>
      <SearchBox searchIt={applyFilter}/>
      Filter Applied: {searchWhat}
      <StudentsList students={filteredStudents} selectStudent={studentSelected}/>
      <StudentDetail student={selectedStudent}/>
    </div>
  );
}

const Title = (props) => {
  return (
    <h1>{props.title} - Placements {props.placementYear}</h1>
  );
}

const SearchBox = (props) => {

  const search = (ev) => {
    props.searchIt(ev);
  }

  return (
    <div>
      <label htmlFor='searchBox'>Search : </label>
      <input type='text' id='searchBox' onChange={search} ></input>
    </div>
  );
}

const StudentsList = (props) => {
  return (
    <ul>
      {
        props.students.map((student) => {
          return (
            <li id={student.id} key={student.id} onClick={props.selectStudent}><b>{student.name}</b> ({student.company})</li>
          );
        })
      }
    </ul>
  );
}

const StudentDetail = (props) => {
  if(props.student === null) {
    return (
      <table>
        <tbody>

        </tbody>
      </table>
    );
  }
  return (
    <div>
      <br></br>
      <h4>Student Details:</h4>
      <table>
        <tbody>
          <tr>
            <td>Id</td>
            <td><b>{props.student.id}</b></td>
          </tr>
          <tr>
            <td>Name</td>
            <td><b>{props.student.name}</b></td>
          </tr>
          <tr>
            <td>Job Type</td>
            <td><b>{props.student.type}</b></td>
          </tr>
          <tr>
            <td>Company</td>
            <td><b>{props.student.company}</b></td>
          </tr>
          <tr>
            <td>Package</td>
            <td><b>{props.student.salary}</b></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;