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

import Checklist from "./components/Checklist/Checklist";
import Todos from "./pages/Todos";

import ManageEmployee from "./components/ManageEmployee/empprofile";
import Onboarding from "./components/Checklist/Onboarding/Onboarding";
import Offboarding from "./components/Checklist/Offboarding/Offboarding";
import Settings from "./components/Checklist/Settings/Settings";
import Empprofile from "./components/ManageEmployee/empprofile";
import Changepswd from "./components/Change password/Changepswd";
import Signin from "./pages/Signin";
import Signup from "./pages/Register";
import Forgot from "./components/Forgot/Forgot";
import "./App.css";
import Checklists from "./pages/Checklist";
// import Settings from './components/Settings';
import { useGlobalContext } from "./context/context";
import Home from "./pages/Home";
import Dashboad from "./pages/Dashboad";
import Employees from "./pages/Employees";
import { Toaster } from "react-hot-toast";
import AdminLeave from "./pages/AdminLeave";
import EmployeeLeave from "./pages/EmployeeLeave";
import Departments from "./pages/Departments";
import TotalEmplData from "./components/TotalEmplData";
import TotalDeptTable from "./components/TotalDeptTable";
import News from "./pages/News";

const App = () => {
  const { loading } = useGlobalContext();
  console.log(loading);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("something went wrong");
  const { user } = useGlobalContext();

  return (
    <div>
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />

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

          <Route path="/login" element={<Signin />} />
          {/* <Route path="/" element={<Navigate to="/login" />} /> */}
          <Route path="/register" element={<Signup />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/employee" element={<ManageEmployee />} />
          <Route path="/profile" element={<Empprofile />} />
          <Route path="/dashboard" element={<Dashboad />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/leaveAdmin" element={<AdminLeave />} />
          <Route path="/leave" element={<EmployeeLeave />} />
          <Route path="/employee/:id" element={<TotalEmplData />} />
          <Route path="/deptemployee/:id" element={<TotalDeptTable />} />
          <Route path="/news" element={<News />} />
          {/* <Route path="/changepassword" element={<Changepswd />} /> */}

          {/* <Route path="/checklist" element={<Checklist />}>
            <Route index element={<Todos />} />
            <Route path="onboarding" element={<Onboarding />} />
            <Route path="offboarding" element={<Offboarding />} />
            <Route path="settings" element={<Settings />} />
          </Route> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
