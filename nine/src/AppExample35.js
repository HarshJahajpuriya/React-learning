import React from 'react';
import {Route, Link, BrowserRouter, Routes} from 'react-router-dom';

const AppExample35 = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='' element={<HomeComponent />} />
        <Route exact path="/courses" element={<CoursesComponent />} />
        <Route exact path="/contactUs" element={<ContactUsComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

const HomeComponent = () => {
  return (
    <div>
      <h1>Example 35 - react-router-dom (Link Component)</h1> 
      <br />
      <div style={{margin: 'auto'}}>
        <Link to="/courses">Courses</Link>
        <br />
        <Link to="/contactUs">Contact Us</Link>
      </div>
    </div>
  );
}

const CoursesComponent = () => {
  return (
    <div>
    <h1>Example 35 - react-router-dom (Link Component)</h1>
      <h2>Courses</h2>
      <br />
      <Link to="/">Home</Link>
    </div>
  );
}

const ContactUsComponent = () => {
  return (
    <div>
    <h1>Example 35 - react-router-dom (Link Component)</h1>
      <h2>Contact Us</h2>
      <br />
      <Link to="/">Home</Link>
    </div>
  );
}



export default AppExample35;