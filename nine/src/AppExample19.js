import React from "react"

import loader from './loader.gif'

const getPlacements = () => {
  var promise = new Promise((resolve, reject) => {
    fetch("/placements").then(
      (response) => {
        if(!response.ok) {
          throw Error("Unable to fetch data, try after some time");
        }
        return response.json();
      }
    ).then((responseJSON) => {
      resolve(responseJSON)
    }).catch((error) => {
      reject(error.message);
    });
  }) 
  return promise;
}

const ViewStates = {
  loading: 0,
  loaded: 1,
  loadingError: -1
}

Object.freeze(ViewStates)


const AppExample19 = () => {

  const studentStateReducer = (state, action) => {
    var ss = {...state, viewState: action.viewState}
    if(action.viewState === ViewStates.loaded) {
      ss.students = action.students;
    }
    if(action.viewState === ViewStates.loadingError) {
      ss.error = action.error;
    } else {
      if(ss.error) delete ss.error;
    }
    return ss;
  }
  
  const [studentState, reduceStudentState] = React.useReducer(studentStateReducer, {viewState: ViewStates.loading});

  // const switchView = (state, action) => {
  //   return action;
  // }

  // const updateList = (state, action) => {
  //   return action;
  // }

  // const updateErrorMessage = (state, action) => {
  //   return action;
  // }
  
  // const [view, changeView] = React.useReducer(switchView, "processing");
  // const [placementList, setList] = React.useReducer(updateList, []);
  // const [errorMessage, setErrorMessage] = React.useReducer(updateErrorMessage, "");

  React.useEffect(() => {
    getPlacements().then(placements => {
      // setList(placements);
      // console.log(placements)
      // changeView("success")
      reduceStudentState({"viewState":ViewStates.loaded, "students": placements});
    }).catch(err => {
      // setErrorMessage(err);
      // changeView("failure")
      reduceStudentState({"viewState":ViewStates.loadingError, "error":err});
    });
  }, [])  
  

  return (  
    <div>
      <h1>Placements</h1>
      <div>
        {studentState.viewState === ViewStates.loading && <LoaderComponent />}
        {studentState.viewState === ViewStates.loaded && <PlacementListComponent list={studentState.students} />}
        {studentState.viewState === ViewStates.loadingError && <ErrorComponent message={studentState.error} />}
      </div>
    </div>
  );
}

const LoaderComponent = () => {
  return (
    <div style={{textAlign: "center"}}>
      <img src={loader} alt="Loading" />
    </div>
  )
}

const PlacementListComponent = ({list}) => {
  return (
    <div>
      {
        list.map(item => {
          return (
            <div key={item.id}>{item.name}</div>            
          )
        })
      }
    </div>
  )  
}

const ErrorComponent = ({message}) => {
  return (
    <div style={{textAlign: "center", color: "red"}}>
      <b>{message}</b>
    </div>
  )
}

export default AppExample19;