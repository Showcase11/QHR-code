import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Attendance,
  EmployeeAttendance,
  GeneralSettings,
  Location,
  Main,
  QrCode,
  TeamAttendance,
} from "./components";
import "./App.css";
import Checklists from "./pages/Checklist";
import Todos from "./components/Todos/Todos";
import Navbar from "./components/Navbar";
import ManageEmployee from "./components/ManageEmployee/empprofile";
import Onboarding from "./components/Onboarding/Onboarding";
import Offboarding from "./components/Offboarding/Offboarding";
// import Settings from './components/Settings';

const App = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("something went wrong");
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/checklist" element={<Checklists />} />
        <Route path="/timeoff" element={<Main />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/employee" element={<ManageEmployee />} />
        <Route path="/attendance">
          <Route path="self" element={<Attendance />} />
          <Route
            path="team"
            element={
              <TeamAttendance
                open={open}
                setOpen={setOpen}
                message={message}
                setMessage={setMessage}
              />
            }
          />
          <Route
            path="employee"
            element={
              <EmployeeAttendance
                open={open}
                setOpen={setOpen}
                message={message}
                setMessage={setMessage}
              />
            }
            open={open}
            setOpen={setOpen}
            message={message}
            setMessage={setMessage}
          />
          <Route path="settings/general" element={<GeneralSettings />} />
          <Route path="settings/location" element={<Location />} />
          <Route path="settings/qrcode" element={<QrCode />} />
        </Route>
        {/* <Route path="dashboard" element={<Checklists />} >
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Main } from "./components";
import "./App.css";
import Checklist from "./components/Checklist/Checklist";
import Todos from "./components/Todos/Todos";
import Navbar from './components/Navbar';
import ManageEmployee from './components/ManageEmployee/EmpProfile';
import Onboarding from './components/Checklist/Onboarding/Onboarding';
import Offboarding from './components/Checklist/Offboarding/Offboarding';
import Settings from "./components/Checklist/Settings/Settings";
import Empprofile from "./components/ManageEmployee/EmpProfile";
import Changepswd from './components/Change password/Changepswd';
import Signin from './components/SignIn/Signin';
import Signup from './components/Register/Register';
import Forgot from './components/Forgot/Forgot';
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) =>state.user.user);
  console.log(user);
  return (
    <Router >
       {user ? (
    <Navbar />) : null}
    <Routes>
    {!user ? (
      <>
      <Route path="/login" element={<Signin />} />
      <Route path="/" element={<Navigate to ='/login' />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/forgot" element={<Forgot />} />
      </>
    ) : (
      <>
      <Route path='/' exact element={<Main />} />
      <Route path='/timeoff' element={<Main />} />
      <Route path='/todos' element={<Todos />} />
      <Route path="/employee/:tabname" element={<ManageEmployee />} />
      <Route path="/employee" element={<ManageEmployee />} />
      <Route path="/profile" element={<Empprofile />} />
      <Route path="/changepassword" element={<Changepswd />} />
      
      <Route path="/checklist" element={<Checklist />}>
          <Route index element={<Todos />} />
          <Route path="onboarding" element={<Onboarding />} />
          <Route path="offboarding" element={<Offboarding />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        </>
        )}
      {/* <Route path="dashboard" element={<Checklists />} >
          <Route index path='todos' element={<Todos />} />
          <Route path='onboarding' element={<Onboarding />} />
        </Route>

        <Route path="/businessProfile">
          <Route path="offboarding" element={<Offboarding />} />
          <Route path="settings" element={<Settings />} />
        </Route> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
