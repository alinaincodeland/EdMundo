import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.scss";
import "./reset.scss";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import TeacherProfile from "./pages/TeacherProfile.jsx";
import TeacherLessons from "./pages/TeacherLessons.jsx";
import StudentProfile from "./pages/StudentProfile";
import StudentLessons from "./pages/StudentLessons";
import StudentSchedulePage from "./pages/StudentSchedulePage";
import App from "./App";
import { PrivateRoute } from "./components/PrivateRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="" element={<Home />} />
        <Route path="/teacher" element={<PrivateRoute />}>
          <Route path="" element={<TeacherProfile />} />
          <Route path="/teacher/lessons" element={<TeacherLessons />} />
        </Route>
        <Route path="/student" element={<PrivateRoute />}>
          <Route path="" element={<StudentProfile />} />
          <Route path="/student/lessons" element={<StudentLessons />} />
          <Route path="/student/schedule" element={<StudentSchedulePage />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="*" element={<h1>404: Not Found</h1>} />
    </Routes>
  </BrowserRouter>,
);
