import React from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { NavLink } from 'react-router-dom';

function RulesNav() {
  return (
    <ButtonGroup vertical>
      <Button variant="outline-dark">
        <NavLink 
        to="./overview" 
        className="nav-link" 
        activeClassName="active">Overview</NavLink>
      </Button>
      <Button variant="outline-dark">
        <NavLink 
        to="./tiles"
        className="nav-link" 
        activeClassName="active">Tiles</NavLink>
      </Button>
      <Button variant="outline-dark">
        <NavLink 
        to="./rounds"
        className="nav-link" 
        activeClassName="active">Rounds & Matches</NavLink>
      </Button>
      <Button variant="outline-dark">
        <NavLink 
        to="./starting"
        className="nav-link" 
        activeClassName="active">Starting the Game</NavLink>
      </Button>
      <Button variant="outline-dark">
        <NavLink 
        to="./melds"
        className="nav-link" 
        activeClassName="active">Melds & Eyes</NavLink>
      </Button>
      <Button variant="outline-dark">
        <NavLink 
        to="./winning"
        className="nav-link" 
        activeClassName="active">Winning the Game</NavLink>
      </Button>
      <Button variant="outline-dark">
        <NavLink 
        to="./scoring"
        className="nav-link" 
        activeClassName="active">Scoring</NavLink>
      </Button>

      <DropdownButton
        as={ButtonGroup}
        title="Variations"
        id="variations-dropdown"
        variant="outline-dark"
      >
        <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
      </DropdownButton>
    </ButtonGroup>
  );
}

export default RulesNav