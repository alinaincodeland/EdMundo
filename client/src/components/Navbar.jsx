import React, { useState, useContext } from "react";
import { Link, NavLink, useMatch, useNavigate } from "react-router-dom";
import { useSWRConfig } from "swr";
import axios from "axios";
import { useLocation } from "react-router-dom";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./navbar.scss";
import { useToken } from "../hooks/useToken";
import { useUserContext } from "../context/User";

const HomeNavLink = () => {
  const { user } = useUserContext();
  if (!user) return null;
  return (
    <MDBNavbarItem>
      <NavLink to="/">
        {({ isActive }) => (
          <MDBNavbarLink active={isActive} aria-current="page">
            Home
          </MDBNavbarLink>
        )}
      </NavLink>
    </MDBNavbarItem>
  );
};
const ProfileNavLink = () => {
  const { user } = useUserContext();
  if (!user) return null;
  return (
    <MDBNavbarItem>
      <NavLink to={`/${user.role}`}>
        {({ isActive }) => (
          <MDBNavbarLink active={isActive}>Profile</MDBNavbarLink>
        )}
      </NavLink>
    </MDBNavbarItem>
  );
};

const LessonsNavLink = () => {
  const { user } = useUserContext();
  if (!user) return null;

  return (
    <MDBNavbarItem>
      <NavLink to={`/${user.role}/lessons`}>
        {({ isActive }) => (
          <MDBNavbarLink active={isActive}>Lessons</MDBNavbarLink>
        )}
      </NavLink>
    </MDBNavbarItem>
  );
};

const ScheduleNavLink = () => {
  const { user } = useUserContext();
  if (!user || user.role !== "student") return null;

  return (
    <MDBNavbarItem>
      <NavLink to="/student/schedule">
        {({ isActive }) => <MDBNavbarLink>Schedule</MDBNavbarLink>}
      </NavLink>
    </MDBNavbarItem>
  );
};

const LoginButton = () => {
  const { user } = useUserContext();
  if (!!user) return null;

  return (
    <MDBNavbarItem>
      <Link to="/login">
        <btn className="navbar-button-login">LOGIN</btn>
      </Link>
    </MDBNavbarItem>
  );
};
const baseUrl = process.env.REACT_APP_BASE_URL;
const LogoutButton = () => {
  const { user, removeUser } = useUserContext();
  const [_token, _setToken, deleteToken] = useToken();

  const navigate = useNavigate();
  if (!user) return null;

  return (
    <MDBNavbarItem>
      <btn
        className="navbar-button-logout"
        onClick={async () => {
          // Delete the authentication cookie
          document.cookie =
            "OnlineSchoolUser=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          await axios.get(`${baseUrl}/api/users/logout`);
          deleteToken();
          removeUser();
          navigate("/");
        }}
      >
        LOG OUT
      </btn>
    </MDBNavbarItem>
  );
};

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const location = useLocation();
  const theme = location.pathname;

  return (
    <MDBNavbar expand="lg" sticky>
      <MDBContainer fluid className="navbar-container">
        <NavLink to="/">
          <h2 className="navbar-title">
            <span className="navbar-title-span"> Ed</span>Mundo
          </h2>
        </NavLink>

        <MDBNavbarToggler
          type="button"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNav(!showNav)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNav}>
          {theme !== "/login" && (
            <MDBNavbarNav className="d-flex justify-content-end gap-4 ">
              <HomeNavLink />
              <ProfileNavLink />
              <LessonsNavLink />
              <ScheduleNavLink />
              <LoginButton />
              <LogoutButton />
            </MDBNavbarNav>
          )}
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
