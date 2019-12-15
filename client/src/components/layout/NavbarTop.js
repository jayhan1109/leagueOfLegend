import React, { Fragment } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import {logout} from '../../reducers/auth';

const NavbarTop = ({ auth: { isAuthenticated },logout }) => {
  const guestLink =  (
    <Nav>
      <Nav.Link as={NavLink} to="/register">
        Register
      </Nav.Link>
      <Nav.Link as={NavLink} to="/login">
        Login
      </Nav.Link>
    </Nav>
  );

  const authLink =  (
    <Nav>
      <Nav.Link as={NavLink} to="/account">
        Account
      </Nav.Link>
      <Nav.Link as={Link} to="/#" onClick={logout}>
        Logout
      </Nav.Link>
    </Nav>
  );

  return (
    <Fragment>
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/" className="navbar-brand">
          LOLSTAT
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to="/leaderboard" exact>
              Leaderboard
            </Nav.Link>
            <Nav.Link as={NavLink} to="/champions" exact>
              Champions
            </Nav.Link>
          </Nav>
          {isAuthenticated ? <Fragment>{authLink}</Fragment> : <Fragment>{guestLink}</Fragment>}
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
};

export default connect(
  state => ({
    auth: state.auth
  }),
  {
    logout
  }
)(NavbarTop);
