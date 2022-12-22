import React from 'react';
import loader from './loader.gif';
// import deleteIcon from './images/delete.png';
// import editIcon from './images/edit.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faMugHot, faTrash } from '@fortawesome/free-solid-svg-icons'
import './AppExample16.css';

function getStudents() {
  var promise = new Promise((resolve) => {
    fetch('/placements').then((studentsList) => {
      return studentsList.json();
    }).then((students) => {
      resolve(students);
    })
  });
  return promise;
}

function addPlacement(student) {
  var promise = new Promise((resolve, reject) => {
    var dataString = `id=${student.id}&name=${encodeURI(student.name)}&company=${encodeURI(student.company)}&placementType=${student.placementType}&salary=${student.salary}&salaryType=${student.salaryType}`;
    // alert(dataString)
    fetch("/addPlacement", {
      "method": "POST",
      "headers": {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      "body": dataString
    }).then(response => {
      console.log(response)
      return response.json();
    }).then(responseJSON => {
      resolve(responseJSON);
    })
  })
  return promise;
}

function deletePlacement(studentId) {
  var promise = new Promise((resolve, reject) => {

    var dataString = `id=${encodeURI(studentId)}`;
    fetch('/deletePlacement?' + dataString)
      .then(response => {
        return response.json();
      }).then(responseJSON => {
        resolve(responseJSON);
      }).catch(err => {
        reject(err);
      })
  });
  return promise;
}

function editPlacement(student) {
  var promise = new Promise((resolve, reject) =>{
    const dataToString = `id=${student.id}&name=${encodeURI(student.name)}&company=${encodeURI(student.company)}&placementType=${student.placementType}&salary=${student.salary}&salaryType=${student.salaryType}`;
    fetch('/updatePlacement', {
      method: 'POST',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded'
      },
      body: dataToString
    }).then (response => {
      return response.json();
    }).then (responseJSON => {
      resolve(responseJSON);
    })
  });
  return promise;
}

const AppExample16 = () => {

  const [activeMode, setActiveMode] = React.useState('view');
  const [students, setStudents] = React.useState([]);
  const [tmpStudent, setTmpStudent] = React.useState({});

  React.useEffect(() => {
    getStudents().then((result) => {
      setStudents(result);
    })
  }, [])

  const onToolBarAction = (ev) => {
    if (ev.currentTarget.getAttribute('take_action') === 'add') {
      setActiveMode('add');
    } else if (ev.currentTarget.getAttribute('take_action') === 'view') {
      setActiveMode('view');
      var promise = getStudents();
      promise.then((result) => {
        setStudents(result);
      });
    }
  }

  const changeActiveMode = (mode, tmpStud) => {
    if (tmpStud) {
      setTmpStudent(tmpStud);
    }
    setActiveMode(mode);
    var promise = getStudents();
    promise.then((result) => {
      setStudents(result);
    });
  }

  return (
    <div>
      <h1 style={{'margin': '10px'}}>
        <FontAwesomeIcon icon={faMugHot} />
        Thinking Machines - Placements-2022
      </h1>
      <ToolBarComponent mode={activeMode} takeAction={onToolBarAction} />
      {activeMode === 'view' && <StudentsViewComponent students={students} changeActiveMode={changeActiveMode} />}
      {activeMode === 'add' && <StudentAddComponent changeActiveMode={changeActiveMode} />}
      {activeMode === 'delete' && <StudentDeleteComponent student={tmpStudent} changeActiveMode={changeActiveMode} />}
      {activeMode === 'edit' && <StudentEditComponent student={tmpStudent} changeActiveMode={changeActiveMode} />}
    </div>
  );

}

const ToolBarComponent = ({ mode, takeAction }) => {
  return (
    <div>
      <hr />
      &nbsp;
      {mode === 'view' && <button type='button' onClick={takeAction} take_action="add">Add</button>}
      {mode !== 'view' && <button type='button' onClick={takeAction} take_action='view'>Cancel</button>}
      <hr />
    </div>
  );
}

const StudentAddComponent = ({ changeActiveMode }) => {

  const [id, setId] = React.useState(0);
  const [idError, setIdError] = React.useState('');

  const [name, setName] = React.useState("");
  const [nameError, setNameError] = React.useState('');

  const [company, setCompany] = React.useState("");
  const [companyError, setCompanyError] = React.useState('');

  const [salary, setSalary] = React.useState(0);
  const [salaryError, setSalaryError] = React.useState('');

  const [fullTime, setFullTime] = React.useState("checked");
  const [internship, setInternship] = React.useState("");
  const [placementType, setPlacementType] = React.useState('F');
  const [salaryType, setSalaryType] = React.useState('Y');

  const [formError, setFormError] = React.useState("");

  const [displayWhat, setDisplayWhat] = React.useState("formSection");

  const idChanged = (ev) => {
    setId(ev.target.value);
  }

  const nameChanged = (ev) => {
    setName(ev.target.value);
  }

  const companyChanged = (ev) => {
    setCompany(ev.target.value);
  }

  const salaryChanged = (ev) => {
    setSalary(ev.target.value);
  }

  const placementTypeChanged = (ev) => {
    if (ev.target.value === 'F' && ev.target.checked) {
      setFullTime('checked');
      setInternship("");
      setPlacementType('F');
    }
    if (ev.target.value === 'I' && ev.target.checked) {
      setInternship('checked');
      setFullTime('');
      setPlacementType('I');
    }
  }

  const salaryTypeChanged = (ev) => {
    setSalaryType(ev.target.value);
  }

  const clearForm = () => {
    setId(0)
    setName("");
    setCompany("");
    setFullTime("checked");
    setInternship("");
    setPlacementType('F');
    setSalary(0);
    setSalaryType('Y');
  }

  const clearAllErrors = () => {
    setFormError("");
    setIdError("");
    setNameError("");
    setCompanyError("");
    setSalaryError("");
  }


  const addClickHandler = () => {
    setDisplayWhat("processingSection");
    clearAllErrors();
    var hasErrors = false;
    if (id === '' || id <= 0) {
      setIdError(" * ");
      hasErrors = true;
    }
    if (name === "") {
      setNameError(" * ");
      hasErrors = true;
    }
    if (company === "") {
      setCompanyError(" * ");
      hasErrors = true;
    }
    if (salary === "" || salary <= 0) {
      setSalaryError(" * ");
      hasErrors = true;
    }

    if (hasErrors) {
      setDisplayWhat("formSection");
      return;
    }


    var student = {
      "id": id,
      "name": name,
      "company": company,
      "placementType": placementType,
      "salary": salary,
      "salaryType": salaryType
    }

    addPlacement(student).then(responseJSON => {
      if (responseJSON.success === true) {
        setDisplayWhat("addMoreSection");
        clearForm();
      } else {
        setDisplayWhat("formSection");
        setFormError(responseJSON.error);
      }
    })

    // console.log(id + "," + name + "," + company + "," + placementType + "," + salary + "," + salaryType);
  }

  const addMode = () => {
    setDisplayWhat("formSection");
  }
  const viewMode = () => {
    changeActiveMode('view');
  }

  if (displayWhat === 'formSection') return (
    <div>
      <h1>Add new placement entry...</h1>

      <div style={{ color: 'red' }}>{formError}</div>

      <label htmlFor='id'> Id. </label>&nbsp;&nbsp;
      <input type='number' value={id} name='id' onChange={idChanged} />
      <span style={{ color: 'red' }}>{idError}</span>
      <br />


      <label htmlFor='name'> Name </label>&nbsp;&nbsp;
      <input type='text' value={name} name='name' onChange={nameChanged} />
      <span style={{ color: 'red' }}>{nameError}</span>
      <br />

      <label htmlFor='company'> Company </label>&nbsp;&nbsp;
      <input type='text' value={company} name='company' onChange={companyChanged} />
      <span style={{ color: 'red' }}>{companyError}</span>
      <br />

      Placement type &nbsp;&nbsp;
      <input type='radio' value='F' checked={fullTime} name='placementType' onChange={placementTypeChanged} />
      Full Time &nbsp;&nbsp;&nbsp;&nbsp;
      <input type='radio' value='I' checked={internship} name='placementType' onChange={placementTypeChanged} />
      Internship
      <br />

      <label htmlFor='salary'>Salary</label>&nbsp;&nbsp;
      <input type='number' value={salary} name='salary' onChange={salaryChanged} />
      <span style={{ color: 'red' }}>{salaryError}</span>
      <select onChange={salaryTypeChanged}>
        <option value='Y'> per annum </option>
        <option value='M'> per month </option>
      </select>
      <br />
      <br />

      &nbsp;<button type='button' onClick={addClickHandler}> Add </button>

    </div>
  );
  if (displayWhat === 'processingSection') return (
    <div>
      <img alt='Loading...' src={loader} />
    </div>
  );
  if (displayWhat === 'addMoreSection') return (
    <div>
      Add More?<br></br>
      <button type='button' onClick={addMode}>Yes</button>&nbsp;&nbsp;&nbsp;
      <button type='button' onClick={viewMode}>No</button>

    </div>
  );
}

const StudentComponent = ({ student, deleteEntry, editStud }) => {
  function takeActionDelete() {
    deleteEntry(student)
  }
  function takeActionEdit() {
    editStud(student)
  }

  return (
    <div>
      <div className='studentInfo'>
        Name : {student.name}<br />
        Company : {student.company} ({student.jobType})<br />
        Salary : {student.salary}<br />
      </div>
      <div className='deleteEditDiv'>
        {/* <button type='button' onClick={takeActionDelete}> */}
          {/* <img src={deleteIcon} alt='Delete'></img> */}
          <FontAwesomeIcon icon={faTrash} onClick={takeActionDelete} style={{'cursor': 'pointer'}}></FontAwesomeIcon>
        {/* </button>  */}
        &nbsp;&nbsp;&nbsp;&nbsp;
        {/* <button type='button' onClick={takeActionEdit}> */}
          {/* <img src={editIcon} alt='Edit'></img> */}
          <FontAwesomeIcon icon={faEdit} onClick={takeActionEdit} style={{'cursor': 'pointer'}}></FontAwesomeIcon>
        {/* </button> */}
      </div>

      <hr />
    </div>
  );
}

const StudentsViewComponent = ({ students, changeActiveMode }) => {
  function deleteEntry(stud) {
    changeActiveMode("delete", stud);
  }
  function editForm(stud) {
    console.log(stud)
    changeActiveMode("edit", stud);
  }
  return (
    <div>
      <h2>Placements</h2>
      <hr />
      {
        students.map((student) => {
          return (
            <StudentComponent key={student.id} student={student} deleteEntry={deleteEntry} editStud={editForm} />
          );
        })
      }
    </div>
  );
}

const StudentDeleteComponent = ({ student, changeActiveMode }) => {
  function deleteEntry() {

    deletePlacement(student.id).then(response => {
      if (response.status) {
        changeActiveMode("view");
      }
    }).catch(err => {
      console.log(err)
    })
  }
  function cancel() {
    changeActiveMode('view');
  }

  return (
    <div>
      <h1>Delete Record?</h1>

      <b>Id. :</b> &nbsp;&nbsp; {student?.id} <br></br>
      <b>Name :</b> &nbsp;&nbsp; {student?.name} <br></br>
      <b>Company :</b> &nbsp;&nbsp; {student?.company} ({student?.jobType}) <br></br>
      <b>Salary :</b> &nbsp;&nbsp; {student?.salary} <br></br>
      <button type='button' onClick={deleteEntry}>Delete</button> &nbsp;&nbsp;&nbsp;&nbsp;
      <button type='button' onClick={cancel}>Cancel</button>

    </div>
  );
}

const StudentEditComponent = ({ student, changeActiveMode }) => {
  
  function cancel() {
    changeActiveMode('view');
  }

  const [name, setName] = React.useState(student.name.trim());
  const [nameError, setNameError] = React.useState('');

  const [company, setCompany] = React.useState(student.company.trim());
  const [companyError, setCompanyError] = React.useState('');

  let jobType = student.jobType[0];
  let ft = "";
  let i = "";
  let pt = '';
  if(jobType==='F') {
    ft='checked';
    pt='F'
  } else {
    i = 'checked';
    pt='I'
  }
  const [fullTime, setFullTime] = React.useState(ft);
  const [internship, setInternship] = React.useState(i);
  const [placementType, setPlacementType] = React.useState(pt);
  let stype='';
  if(student.salary.indexOf('month') !== -1) {
    stype='M'
  } else {
    stype='Y'
  }
  const [salaryType, setSalaryType] = React.useState(stype);

  let s = 0;
  if(student.salary.indexOf('lac') !== -1) {
    s = parseInt(student.salary)*100000;
  } else {
    s = parseInt(student.salary);
  }

  const [salary, setSalary] = React.useState(s);
  const [salaryError, setSalaryError] = React.useState('');


  const [formError, setFormError] = React.useState("");

  const nameChanged = (ev) => {
    setName(ev.target.value);
  }

  const companyChanged = (ev) => {
    setCompany(ev.target.value);
  }

  const salaryChanged = (ev) => {
    setSalary(ev.target.value);
  }

  const placementTypeChanged = (ev) => {
    if (ev.target.value === 'F' && ev.target.checked) {
      setFullTime('checked');
      setInternship("");
      setPlacementType('F');
    }
    if (ev.target.value === 'I' && ev.target.checked) {
      setInternship('checked');
      setFullTime('');
      setPlacementType('I');
    }
  }

  const salaryTypeChanged = (ev) => {
    setSalaryType(ev.target.value);
  }

  const clearAllErrors = () => {
    setFormError("");
    setNameError("");
    setCompanyError("");
    setSalaryError("");
  }


  const editClickHandler = () => {
    clearAllErrors();
    var hasErrors = false;
    if (name === "") {
      setNameError(" * ");
      hasErrors = true;
    }
    if (company === "") {
      setCompanyError(" * ");
      hasErrors = true;
    }
    if (salary === "" || salary <= 0) {
      setSalaryError(" * ");
      hasErrors = true;
    }

    if (hasErrors) {
      return;
    }


    var stud = {
      "id": student.id,
      "name": name,
      "company": company,
      "placementType": placementType,
      "salary": salary,
      "salaryType": salaryType
    }

    editPlacement(stud).then(responseJSON => {
      console.log(responseJSON);
      if (responseJSON.success) {
        changeActiveMode('view');
        console.log(responseJSON)
      } else {
        setFormError(responseJSON.error);
      }
    })
  }

  return (

    <div>

      <h1>Edit placement entry...</h1>

      <div style={{ color: 'red' }}>{formError}</div>

      <b>Id. :</b> &nbsp;&nbsp; {student?.id} <br></br>

      <label htmlFor='name'> Name </label>&nbsp;&nbsp;
      <input type='text' value={name} name='name' onChange={nameChanged} />
      <span style={{ color: 'red' }}>{nameError}</span>
      <br /> 

      <label htmlFor='company'> Company </label>&nbsp;&nbsp;
      <input type='text' value={company} name='company' onChange={companyChanged} />
      <span style={{ color: 'red' }}>{companyError}</span>
      <br />

      Placement type &nbsp;&nbsp;
      <input type='radio' value='F' checked={fullTime} name='placementType' onChange={placementTypeChanged} />
      Full Time &nbsp;&nbsp;&nbsp;&nbsp;
      <input type='radio' value='I' checked={internship} name='placementType' onChange={placementTypeChanged} />
      Internship
      <br />

      <label htmlFor='salary'>Salary</label>&nbsp;&nbsp;
      <input type='number' value={salary} name='salary' onChange={salaryChanged} />
      <span style={{ color: 'red' }}>{salaryError}</span>
      <select onChange={salaryTypeChanged} defaultValue={stype}>
        <option value='Y' > per annum </option>
        <option value='M' > per month </option>
      </select>
      <br />
      <br />

      <button type='button' onClick={editClickHandler}>Edit</button> &nbsp;&nbsp;&nbsp;&nbsp;
      <button type='button' onClick={cancel}>Cancel</button> 

    </div>
  )
}

export default AppExample16;
