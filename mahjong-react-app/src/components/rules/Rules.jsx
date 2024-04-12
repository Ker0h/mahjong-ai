import React from 'react'
import RulesNav from "../navigation/RulesNav";
import TileList from "../tile/tile-list/TileList";
import { Row, Col } from "react-bootstrap";
import { Outlet } from 'react-router-dom';

function Rules() {
  return (
    <Row>
      <Col sm={12} md={4}>
        <RulesNav />
      </Col>

      <Col sm={12} md={8}>
        <Outlet />  
      </Col>
    </Row>
  );
}

export default Rules;