import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import React from 'react'

function Navigation() {
  return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand>
          <NavLink to="/home" className="nav-link" activeClassName="active">
            <img src={logo} alt="Mahjong Logo" width="50" height="50" />
          </NavLink>
            </Navbar.Brand>
            <span className="nav-link" activeClassName="active">Learn Mahjong</span>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/home" className="nav-link" activeClassName="active">Home</NavLink>
            <NavLink to="/rules" className="nav-link" activeClassName="active">Rules</NavLink>
            <NavLink to="/history" className="nav-link" activeClassName="active">History & Culture</NavLink>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation