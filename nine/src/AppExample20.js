import React from "react";

let allStudents = [];
let allFilters = {
  "company": [],
  "jobType": [],
  "salaryType": []
};

const FilterCategory = {
  company: "Company",
  jobType: "Job Type",
  salaryType: "Salary Type"
}

Object.freeze(FilterCategory);

const getPlacements = () => {
  var promise = new Promise((resolve, reject) => {
    fetch("/placements").then((response) => {
      if (response.ok === true) {
        return response.json();
      } else {
        reject("Cannot access server, please try after some time");
      }
    }).then((placements) => {
      allStudents = placements;
      allFilters = createFilters()
      resolve(placements)
    }).catch((err) => {
      reject(err)
    })
  });
  return promise;
}


const placementsReducer = (state, action) => {
  let tmpState = {};
  if(action.filter === false) {
    tmpState.allStudents = action.allStudents;
    tmpState.filteredStudents = action.allStudents;
    tmpState.companyFilters = [];
    tmpState.jobTypeFilters = [];
    tmpState.salaryTypeFilters = [];
  } else {

    // Copying students
    tmpState.allStudents = [...state.allStudents]
    tmpState.filteredStudents = [...state.filteredStudents]

    // Managing filters
    // add filter
    tmpState.companyFilters = [...state.companyFilters];
    tmpState.jobTypeFilters = [...state.jobTypeFilters];
    tmpState.salaryTypeFilters = [...state.salaryTypeFilters];
    if(action.fltr.value === true) {
      // tmpState.companyFilters = [...state.companyFilters];
      // tmpState.jobTypeFilters = [...state.jobTypeFilters];
      // tmpState.salaryTypeFilters = [...state.salaryTypeFilters];
      if(action.fltr.category === FilterCategory.company) {
        tmpState.companyFilters.push(action.fltr.name)
      }else if(action.fltr.category === FilterCategory.jobType) {
        tmpState.jobTypeFilters.push(action.fltr.name)
      }else if(action.fltr.category === FilterCategory.salaryType) {
        tmpState.salaryTypeFilters.push(action.fltr.name)
      }
    } else {  // remove filter
      let tmpArr;

      if(action.fltr.category === FilterCategory.company) {
        tmpArr = state.companyFilters.filter(name => {
          return name !== action.fltr.name
        })
        tmpState.companyFilters = tmpArr;
      }else if(action.fltr.category === FilterCategory.jobType) {
        tmpArr = state.jobTypeFilters.filter(name => {
          return name !== action.fltr.name
        })
        tmpState.jobTypeFilters = tmpArr;
      }else if(action.fltr.category === FilterCategory.salaryType) {
        tmpArr = state.salaryTypeFilters.filter(name => {
          return name !== action.fltr.name
        })
        tmpState.salaryTypeFilters = tmpArr;
      }
      
    }


    // Filtering Students
    // By Company
    let companyFiltered = [];
    tmpState.companyFilters.forEach(companyName => {
      let tmpStudents = tmpState.allStudents.filter(student => {
        return companyName === student.company;
      })
      companyFiltered.push(...tmpStudents)
    })
    
    // By Job Type
    let jobTypeFiltered = []
    tmpState.jobTypeFilters.forEach(jobType => {
      let tmpStudents = tmpState.allStudents.filter(student => {
        return jobType === student.jobType;
      })
      jobTypeFiltered.push(...tmpStudents)
    })

    // By Salary Type
    let salaryTypeFiltered = []
    tmpState.salaryTypeFilters.forEach(salaryType => {
      let tmpStudents = tmpState.allStudents.filter(student => {
        return salaryType === student.salaryType;
      })
      salaryTypeFiltered.push(...tmpStudents)
    })
  
    tmpState.filteredStudents = [...filterStudents(tmpState.allStudents, companyFiltered, jobTypeFiltered, salaryTypeFiltered)]
  }
  return tmpState;
}


const filterStudents = (students, companyFiltered, jobTypeFiltered, salaryTypeFiltered) => {
  let filtered = [];
  students.forEach(student => {
    if((companyFiltered.length === 0 || companyFiltered?.includes(student))
    && (jobTypeFiltered.length === 0 || jobTypeFiltered?.includes(student))
    && (salaryTypeFiltered.length === 0 || salaryTypeFiltered?.includes(student))) filtered.push(student)
  })
  return filtered
}

const createFilters = () => {

  // Strucutre of Filters
  let filters = {
    "company": [],
    "jobType": [],
    "salaryType": []
  }

  //  Creating filters by Company, JobType, SalaryType
  let companiesMap = new Map();
  let salaryTypesMap = new Map();
  let jobTypesMap = new Map();
  for (let student of allStudents) {
    if(student.salary.includes("annum")) {
      student.salaryType = "Yearly"
    } else if(student.salary.includes("month")) {
      student.salaryType = "Monthly"
    }
    if(salaryTypesMap.has(student.salaryType)) {
      let count = salaryTypesMap.get(student.salaryType);
      count++;
      salaryTypesMap.set(student.salaryType, count);
    } else {
      salaryTypesMap.set(student.salaryType, 1);
    }

    if(jobTypesMap.has(student.jobType)) {
      let count = jobTypesMap.get(student.jobType);
      count++;
      jobTypesMap.set(student.jobType, count);
    } else {
      jobTypesMap.set(student.jobType, 1);
    }

    if (companiesMap.has(student.company)) {
      let count = companiesMap.get(student.company);
      count++;
      companiesMap.set(student.company, count);
    } else {
      companiesMap.set(student.company, 1);
    }
  }
  let companyFilter = [];
  companiesMap.forEach((count, name) => {
    let tmp = {"name": name,"count": count}
    companyFilter.push(tmp);
  }) 
  let salaryTypeFilter = [];
  salaryTypesMap.forEach((count, name) => {
    let tmp = {"name": name,"count": count}
    salaryTypeFilter.push(tmp);
  }) 
  let jobTypeFilter = [];
  jobTypesMap.forEach((count, name) => {
    let tmp = {"name": name,"count": count}
    jobTypeFilter.push(tmp);
  }) 
  filters.company = companyFilter;
  filters.salaryType = salaryTypeFilter;
  filters.jobType = jobTypeFilter;

  return filters;
}

const AppExample20 = () => {

  const [placementState, reducePlacements] = React.useReducer(placementsReducer, {
    allStudents: [], 
    filteredStudents: [], 
    companyFilters: [],
    jobTypeFilters: [],
    salaryTypeFilters: []
  });
  

  React.useEffect(() => {
    getPlacements().then((result) => {
      reducePlacements({ allStudents: result, filter: false});
    }).catch(err => {

    })
  }, [])


  const applyFilter = (fltr) => {
    reducePlacements({fltr, filter: true})
  }

  return (
    <div>
      <div style={{ "textAlign": "center", "borderBottom": "1px solid gray", "background": "whitesmoke", "padding": "2px" }}>
        <h1>Placements</h1>
      </div>
      <div style={{ "display": "flex", "height": "calc(100vh - 90px)" }}>
        <div style={{ "flex": "3", "borderRight": "1px solid gray",  "overflow": "auto"}}>
          <FilterComponent allFilters={allFilters} filter={applyFilter}/>
        </div>
        <div style={{ "flex": "9", "overflow": "auto" }}>
          <PlacementListComponent placements={placementState} />
        </div>
      </div>
    </div>
  );
};

const FilterComponent = (props) => {
  let allFilters = props.allFilters;
  let companyFilters = allFilters.company;
  let jobTypeFilters = allFilters.jobType;
  let salaryTypeFilters = allFilters.salaryType;

  const applyFilter = (filters) => {
    props.filter(filters);
  }

  return (
    <div style={{ "marginTop": "20px" }}>
      <div style={{ "textAlign": "center" }}>
        <h2>Filters</h2>
      </div>
      <div>
        <FilterListComponent heading={FilterCategory.company} filters={companyFilters} changeFilter={applyFilter}/>
        <FilterListComponent heading={FilterCategory.jobType} filters={jobTypeFilters} changeFilter={applyFilter}/>       
        <FilterListComponent heading={FilterCategory.salaryType} filters={salaryTypeFilters} changeFilter={applyFilter}/>        
      </div>
    </div>
  )
}

const FilterListComponent = (props) => {
  let filters = [];
  filters = props.filters;

  const applyFilter = (ev) => {
    var toSend = {
      "category": props.heading,
      "name": ev.target.name,
      "value": ev.target.checked
    }
    props.changeFilter(toSend);
  }

  return (
    <div style={{"marginLeft": "20px", "marginRight": "20px"}}>
      <h4 style={{"borderBottom": "1px solid gray"}}>{props.heading}</h4>
      {
        filters.map((el) => {
          return (
            <div key={el.name} style={{"background": "whitesmoke", "marginBottom":"8px", "padding": "4px"}}>
              {el.name} ({el.count})
              <input type="checkbox" onClick={applyFilter} name={el.name} style={{"float": "right"}}/>
            </div>
          );
        })
      }
    </div>
  );
}


const PlacementListComponent = (props) => {
  let placements = props.placements.filteredStudents;
  return (
    <div style={{ "marginTop": "20px" }}>
      <div style={{ "textAlign": "center" }}>
        <h2>List</h2>
      </div>
      <div>
        {
          placements.map(student => {
            return (
              <div key={student.id} style={{ "listStyle": "none", "cursor": "pointer" }}>
                <StudentComponent student={student} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

const StudentComponent = (props) => {
  let student = props.student;
  return (
    <div style={{ "height": "36px", "borderBottom": "1px solid gray", "background": "whitesmoke", "margin": "12px", "display": "flex" }}>
      <div style={{ "flex": 0.6, "borderRight": "1px solid gray", "textAlign": "center" }}>
        {student.id}
      </div>
      <div style={{ "flex": 4, "paddingLeft": "12px", "borderRight": "1px solid gray" }}>
        {student.name}
      </div>
      <div style={{ "flex": 3, "paddingLeft": "12px", "borderRight": "1px solid gray" }}>
        {student.company}
      </div>
      <div style={{ "flex": 2, "paddingLeft": "12px", "borderRight": "1px solid gray" }}>
        {student.jobType}
      </div>
      <div style={{ "flex": 3, "paddingLeft": "12px", "borderRight": "1px solid gray" }}>
        {student.salary}
      </div>
    </div>
  );
}

export default AppExample20;