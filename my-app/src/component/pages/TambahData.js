/** @format */

import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Header from '../molecules/Header';
import TbPropinsi from '../molecules/TbPropinsi';
import Title from '../molecules/Title';
import FormTambah from '../molecules/FormTambah';
import './Provinsi.css';

class TambahData extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Row className="justify-content-md-center" id="rows">
          <Col>
            <Title title="Tambah Data" />
            <hr />
          </Col>
        </Row>
        <FormTambah />
      </div>
    );
  }
}

export default TambahData;
