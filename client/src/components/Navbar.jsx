import React, { useState, useContext } from "react";
import {Link, NavLink, useMatch, useNavigate} from "react-router-dom";
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
import {useToken} from "../hooks/useToken";
import {useUser} from "../hooks/useUser";

const ProfileNavLink = () => {
  const [user] = useUser()
  if (!user) return null;
  return (
      <MDBNavbarItem>
        <NavLink to={`/${user.role}`}>
          {({ isActive }) => (
              <MDBNavbarLink
                  active={isActive}
              >
                Profile
              </MDBNavbarLink>
          )}
        </NavLink>
      </MDBNavbarItem>
  )
}

const LessonsNavLink = () => {
  const [user] = useUser()
  if (!user) return null;

  return (<MDBNavbarItem>
    <NavLink to={`/${user.role}/lessons`}>
      {({ isActive }) => (
          <MDBNavbarLink
              active={isActive}
          >
            Lessons
          </MDBNavbarLink>
      )}
    </NavLink>
  </MDBNavbarItem>)
};

const ScheduleNavLink = () => {
  const [user] = useUser()
  if (!user || user.role !== 'student') return null;

  return (
      <MDBNavbarItem>
        <NavLink to="/student/schedule">
          {({ isActive }) => (
              <MDBNavbarLink>Schedule</MDBNavbarLink>
          )}
        </NavLink>
      </MDBNavbarItem>
  )
}

const LoginButton = () => {
  const [user] = useUser()
  if (!!user) return null;

  return (
      <MDBNavbarItem>
      <Link to="/login">
        <btn className="navbar-button-login">LOGIN</btn>
      </Link>
      </MDBNavbarItem>
  )
}

const LogoutButton = () => {
  const [user, _setUser, deleteUser] = useUser()
  const [_token, _setToken, deleteToken] = useToken();
  const { mutate } = useSWRConfig();
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const navigate = useNavigate();
  if (!user) return null;

  return (
      <MDBNavbarItem>
        <btn
            className="navbar-button-logout"
            onClick={() => {
              // Delete the authentication cookie
              document.cookie =
                  "OnlineSchoolUser=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
              // Reset the SWR cache
              mutate(`${baseUrl}/api/users/getData`, null, false)
                  .then(
                      axios
                          .get(`${baseUrl}/api/users/logout`)
                          .then((res) => {
                            deleteToken();
                            deleteUser();
                          }),
                  )
                  .catch((err) => {
                    console.log(err);
                  });
              navigate("/");
            }}
        >
          LOG OUT
        </btn>
      </MDBNavbarItem>
  )
}

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
              <MDBNavbarItem>
                <NavLink to="/">
                  {({ isActive }) => (
                    <MDBNavbarLink
                      active={isActive}
                      aria-current="page"
                    >
                      Home
                    </MDBNavbarLink>
                  )}
                </NavLink>
              </MDBNavbarItem>
              <ProfileNavLink/>
              <LessonsNavLink/>
              <ScheduleNavLink/>
              <LoginButton/>
              <LogoutButton/>
            </MDBNavbarNav>
          )}
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
