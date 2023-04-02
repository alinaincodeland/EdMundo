import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/teacher",
        element: <PrivateRoute />,
        children: [
          {
            index: true,
            element: <TeacherProfile />,
          },
          {
            path: "/teacher/lessons",
            element: <TeacherLessons />,
          },
        ],
      },
      {
        path: "/student",
        element: <PrivateRoute />,
        children: [
          {
            index: true,
            element: <StudentProfile />,
          },
          {
            path: "/student/lessons",
            element: <StudentLessons />,
          },
          {
            path: "/student/schedule",
            element: <StudentSchedulePage />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <h1>404: Not Found</h1>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
