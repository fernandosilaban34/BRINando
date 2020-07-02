/** @format */

import React from 'react';
import {Col, Row, Button} from 'react-bootstrap';
import Header from '../molecules/Header';
import TbPemakai from '../molecules/TbPemakai';
import Title from '../molecules/Title';

class Pemakai extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Row
          className="justify-content-md-center"
          style={{
            paddingTop: '100px',
            paddingBottom: '50px',
            marginTop: '25px',
          }}
          id="rows"
        >
          <Col>
            <Title title="Data Pemakai" />
            <hr />
          </Col>
        </Row>
        <TbPemakai />
        <div style={{marginLeft: '1100px', paddingTop: '30px'}}>
          <Button a href='tambah'> Tambah Data</Button>
        </div>
      </div>
    );
  }
}

export default Pemakai;
