import "./styles.css";
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComp = () => {
  return (
    <>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container fluid="md">
          <Navbar.Brand className="nav-brand">
            <Link to="/">Spotify 🔊🔔🎙🎵</Link>
          </Navbar.Brand>
          <Nav className="nav-links">
            {!localStorage.getItem("token") ? (
              <>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
                <Link to="/">Home</Link>
                <Link to="/tracks">Tracks</Link>
              </>
            ) : (
              <>
                <Link to="/">Home</Link>
                <Link to="/tracks">Tracks</Link>
                <Link to="/tracks/create">Create Track</Link>
                <Link
                  to="/login"
                  onClick={() => {
                    localStorage.removeItem("token");
                    window.location.href = "http://localhost:3000/login";
                  }}
                >
                  Logout
                </Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComp;
