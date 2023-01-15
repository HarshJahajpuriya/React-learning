import React from 'react';
import styledComponent from 'styled-components';

const imageFolder = require.context("../public/students");

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]
Object.freeze(MONTHS);


const Container = styledComponent.div`
  text-align: center;
  padding: 12px;
  padding-bottom: 4px;
  margin: 4px;
  border: 3px solid gray;
  height: 100%;
`;

const MainContainer = styledComponent.div`
  border-top: 2px solid gray;
  text-align: left;
  display: flex;
  margin: 4px;
  padding-top: 8px;
  `;

const LeftPanelContainer = styledComponent.div`
  margin: 4px;
  margin-top: 0;
  padding-right: 8px;
  border-right: 2px solid gray;
  min-width: 300px;
  height: calc(100vh - 170px);
  overflow: auto;

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  `;

const RightPanelContainer = styledComponent.div`
  margin: 4px;
  margin-top: 0;
  padding-left: 8px;
  height: calc(100vh - 170px);
  border-right: 2px solid gray;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  `;

const SubHeading = styledComponent.div`
  font-size: 16pt;
  font-weight: bold;
  text-align: center;
  background: white;
  border-right: 2px solid gray;
  margin-right: 4px;
  border-bottom: 1px solid gray;
`;

const PanelContentContainer = styledComponent.div`
  padding: 8px;
  position: relative;
`;

const MonthListItemContainer = styledComponent.div`
  padding: 4px;
  margin: 8px;
  text-align: center;
  font-weight: 600;
  cursor: pointer;
  border-bottom: 1px solid gray;
  box-shadow: 0 0 4px gray;
  :hover {
    background: whitesmoke;
  }
`;

const ImageContainer = styledComponent.div`
  display: flex;
  margin: auto;
  padding: 6px;
  width: 280px;
  height: 280px;
  align-items: center;
  img {
    margin: auto;
    max-width: 280px;
    max-height: 280px;
  }
`;

const ImageNavigationButtonsContainer = styledComponent.div`
  border-top: 1px solid gray;
  height: 60px;
  padding: 12px;
  margin-right: 16px;
  text-align: center;
  button {
    padding: 4px;
    cursor: pointer;
  }
`;

const StudentNameContainer = styledComponent.div`
  padding: 4px;
  display: inline-block;
  font-weight: 600;
`;

const getPlacedStudentImagesDetails = () => {
  var promise = new Promise((resolve, reject) => {
    fetch("/getPlacedStudentImagesDetails").then(res => {
      if (!res.ok) {
        throw Error("Cannot Fetch Students. Try after some time!");
      }
      return res.json();
    }).then(studentImageDetails => {
      resolve(studentImageDetails);
    }).catch(err => {
      console.log(err);
      reject(err);
    })
  })
  return promise;
}



const AppExample26 = () => {

  const [studentImagesDetails, setStudentImagesDetails] = React.useState([]);
  const [selectedMonthAndYear, setSelectedMonthAndYear] = React.useState(false);

  React.useEffect(() => {
    getPlacedStudentImagesDetails().then(studentImagesDetails => {
      setStudentImagesDetails(studentImagesDetails);
    }).catch(err => {
      alert(err)
    })
  }, [])

  const changeSelectedMonthAndYear = (mAy) => {
    setSelectedMonthAndYear(mAy);
  }

  return (
    <Container>
      <h1>Example 26 - Placed Students Images Component</h1>
      <MainContainer>
        <LeftPanelComponent students={studentImagesDetails} monthAndYearSelected={changeSelectedMonthAndYear} />
        <RightPanelComponent students={studentImagesDetails} monthAndYear={selectedMonthAndYear} />
      </MainContainer>
    </Container>
  );
}


const LeftPanelComponent = (props) => {

  // Sorting students selection wise
  props.students.sort((s1, s2) => new Date(s1.year, s1.month) - new Date(s2.year, s2.month));

  // Creating set of months in which selections happened
  let set = new Set();
  let i = 0;
  for (let student of props.students) {
    props.students[i].monthAndYear = MONTHS[student.month] + " " + student.year
    set.add(MONTHS[student.month] + " " + student.year)
    i++;
  }

  // Creating array of that set so that we can use map method for rendering
  let months = []
  set.forEach(s => { months.push(s) })

  const selected = (mAy) => {
    props.monthAndYearSelected(mAy)
  }

  return (
    <div style={{ flex: 1 }}>
      <SubHeading>Month & Year</SubHeading>
      <LeftPanelContainer>
        <PanelContentContainer>
          {
            months.map(m => {
              return (
                <MonthListItemComponent mAySelected={selected} monthAndYear={m} key={m} />
              );
            })
          }
        </PanelContentContainer>
      </LeftPanelContainer>
    </div>
  );
}

const MonthListItemComponent = (props) => {
  const doSomething = (ev) => {
    props.mAySelected(ev.currentTarget.id)
  }
  return (
    <div onClick={doSomething} id={props.monthAndYear}>
      <MonthListItemContainer>
        {props.monthAndYear}
      </MonthListItemContainer>
    </div>
  );
}

const RightPanelComponent = (props) => {

  const [displayedStudentIndex, setDisplayedStudentIndex] = React.useState(0);

  React.useEffect(() => {
    setDisplayedStudentIndex(0);
  }, [props.monthAndYear])
  
  if (props.monthAndYear) {
    let studentsToDisplay = [];
    props.students.forEach(s => {
      if (s.monthAndYear === props.monthAndYear) {
        studentsToDisplay.push(s);
      };
    })
    

    const prevStudent = () => {
      if (displayedStudentIndex !== 0) {
        setDisplayedStudentIndex(displayedStudentIndex - 1);
      }
    }

    const nextStudent = () => {
      if (displayedStudentIndex < studentsToDisplay.length - 1) {
        setDisplayedStudentIndex(displayedStudentIndex + 1);
      }
    }


    return (
      <div style={{ flex: 3, display: 'flex', flexDirection: 'column' }}>
        <SubHeading>{props.monthAndYear} Selections</SubHeading>
        <RightPanelContainer>
          <ImageContainer>
            <img src={studentsToDisplay[displayedStudentIndex]?imageFolder("./" + studentsToDisplay[displayedStudentIndex]?.imageName).default:''} key={studentsToDisplay[displayedStudentIndex]?.imageName} />
          </ImageContainer>
          <ImageNavigationButtonsContainer>
            { displayedStudentIndex>0 && <button style={{ float: 'left' }} onClick={prevStudent}>Prev</button> }
            <StudentNameContainer>
              {studentsToDisplay[displayedStudentIndex]?.studentName}
            </StudentNameContainer>
            { displayedStudentIndex<studentsToDisplay.length-1 && <button style={{ float: 'right' }} onClick={nextStudent}>Next</button> }
          </ImageNavigationButtonsContainer>
        </RightPanelContainer>
      </div>
    );
  } else {
    return (
      <div style={{ flex: 3 }}>

      </div>
    );
  }
}

export default AppExample26;