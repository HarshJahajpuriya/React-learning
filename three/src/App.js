import React, { useRef } from 'react';

class Student {
  constructor(id, name, company, salary) {
    this.id = id;
    this.name = name;
    this.company = company;
    this.salary = salary;
  }
}


function App() {

  const students = [];

  var filteredStudents = [];

  const placementListRef = useRef();

  const placementDetailRef = useRef();

  students.push(new Student(101, 'Harsh', 'Microsoft', '30 LPA'));
  students.push(new Student(102, 'Pawan', 'Amazon', '40 LPA'));
  students.push(new Student(103, 'Yash', 'Google', '50 LPA'));
  students.push(new Student(104, 'Lucky', 'Tesla', '60 LPA'));
  students.push(new Student(105, 'Aadarsh', 'Flipkart', '10 LPA'));
  students.push(new Student(106, 'Samriddhi', 'Codenation', '45 LPA'));
  students.push(new Student(107, 'Sahil', 'Infosys', '12 LPA'));
  students.push(new Student(108, 'Deepak', 'Flipkart', '9 LPA'));

  global.students = students;

  var selectedStudent = {
    name: "",
    company: '',
    salary: ''
  };

  const studentHasBeenSelected = (ev) => {
    students.forEach((student) => {
      if (ev.currentTarget.id === student.id.toString()) {
        selectedStudent = student;
      }
    })
    placementDetailRef.current.updateStudent(selectedStudent);
  }

  students.forEach((student) => {
    filteredStudents.push(student);
  })

  const searchCriteriaChanged = (ev) => {
    var searchWhat = (ev.currentTarget.value);
    if (searchWhat.length < 3) {
      searchWhat = '';
    }
    filteredStudents = [];
    students.forEach((student) => {
      if (student.company.toLowerCase().includes(searchWhat.toLowerCase())) {
        filteredStudents.push(student);
      }
    })
    placementListRef.current.updateStudents(filteredStudents);
    selectedStudent = {
      name: '',
      company: '',
      salary: ''
    };
    placementDetailRef.current.updateStudent(selectedStudent);
  }

  const addStudent = () => {
    const form = document.getElementById('addForm');
    var id = parseInt(form[0].value);
    var name = form[1].value;
    var company = form[2].value;
    var salary = form[3].value;
    students.push(new Student(id, name, company, salary));
    placementListRef.current.updateStudents(students);
    form[0].value = null;
    form[1].value = null;
    form[2].value = null;
    form[3].value = null;
  }

  return (
    <div>
      <h1>Thinking Machines</h1>
      <PlacementList placementYear={2021} students={filteredStudents} studentHasBeenSelected={studentHasBeenSelected} searchCriteriaChanged={searchCriteriaChanged} ref={placementListRef} />
      <AddStudent addStudent={addStudent} />
      <PlacementDetails selectedStudent={selectedStudent} ref={placementDetailRef} />
    </div>
  );
}


class PlacementList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'placementYear': props.placementYear,
      'students': props.students
    };
    this.studentHasBeenSelected = props.studentHasBeenSelected;
    this.searchCriteriaChanged = props.searchCriteriaChanged;
  }
  updateStudents(student) {
    this.setState({
      'students': student
    });
  }

  render() {
    return (
      <div id='placementsDiv'>
        <h3>Placement List: {this.state.placementYear}</h3>
        <b>Filter by company</b> <input type='text' id='seachBox' onChange={this.searchCriteriaChanged} />
        <ul id='placementList'>
          {
            this.state.students.map((student) => {
              return (
                <li key={student.id} id={student.id} onClick={this.studentHasBeenSelected}>
                  <b>{student.name}</b> ( {student.company} )
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}


class AddStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.addStudent = props.addStudent;
  }
  cancelAddition() {
    var form = document.getElementById('addForm');
    form[0].value = null;
    form[1].value = null;
    form[2].value = null;
    form[3].value = null;
  }
  render() {
    return (
      <div>
        <br></br><br></br>
        <h3>Enter new entry...</h3>
        <form id='addForm'>
          <table>
            <tbody>
              <tr>
                <td>Id: </td><td><input type='number' id='id' name='id' /></td>
              </tr>
              <tr>
                <td>Name: </td><td><input type='text' id='name' name='name' /></td>
              </tr>
              <tr>
                <td>Company: </td><td><input type='text' id='company' name='company' /></td>
              </tr>
              <tr>
                <td>Salary: </td><td><input type='text' id='salary' name='salary' /></td>
              </tr>
              <tr>
                <td><button type='button' onClick={this.addStudent}>Add</button></td>
                <td><button type='button' onClick={this.cancelAddition}>Cancel</button></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}


class PlacementDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "selectedStudent": props.selectedStudent
    };
  }
  updateStudent(student) {
    this.setState({
      'selectedStudent': student
    });
  }
  render() {
    return (
      <div id='placementDetail'>
        <br></br><br></br>
        <h3>Student Details ...</h3>
        Name: <b>{this.state.selectedStudent.name}</b><br></br>
        Company: <b>{this.state.selectedStudent.company}</b><br></br>
        salary: <b>{this.state.selectedStudent.salary}</b><br></br>
      </div>
    );
  }
}

export default App;
