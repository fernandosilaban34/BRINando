/**
 * /* eslint-disable jsx-a11y/alt-text
 *
 * @format
 */

/** @format */

import React from 'react';
import Header from '../molecules/Header';
import Title from '../molecules/Title';
import {Row, Col} from 'react-bootstrap';
import TbKontrasepsi from '../molecules/TbKontrasepsi';
import './Kontrasepsi.css';

class Kontrasepsi extends React.Component {
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
        >
          <Col>
            <Title title="Data Kontrasepsi" />
            <hr />
          </Col>
        </Row>
          <TbKontrasepsi />
      </div>
    );
  }
}

export default Kontrasepsi;