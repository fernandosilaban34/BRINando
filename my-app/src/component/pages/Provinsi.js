/** @format */

import React from 'react';
import {Col, Row} from 'react-bootstrap';
import Header from '../molecules/Header';
import TbPropinsi from '../molecules/TbPropinsi';
import Title from '../molecules/Title';
import './Provinsi.css';

class Provinsi extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Row className="justify-content-md-center" id="rows">
          <Col>
            <Title title="Data Provinsi" />
            <hr />
          </Col>
        </Row>
        <TbPropinsi />
      </div>
    );
  }
}

export default Provinsi;
