/** @format */
import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../molecules/Header';
import Footers from '../molecules/Footers';
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Header />
          <div className='content'>
            <p>BRI TEST</p>
          </div>
        </Container>
          <Footers/>

      </div>
    );
  }
}

export default Home;
