/** @format */

import axios from 'axios';
import React from 'react';
import {Row, Table} from 'react-bootstrap';
import iconDelete from '../../assets/icon-delete.png';
import TbKontrasepsi from './TbKontrasepsi';

class TbPemakai extends React.Component {
  state = {
    post: [],
  };

  componentDidMount() {
    axios
      .get('http://localhost:3111/list_pemakai_kontrasepsi')
      .then((result) => {
        this.setState({
          post: result.data,
        });
        console.log(result);
      });
  }

  handleRemove = (data) => {
    console.log(data);
    axios
      .delete(`http://localhost:3111/list_pemakai_kontrasepsi/${data}`)
      .then((res) => {
        console.log(res);
      });
  };
  render() {
    return (
      <Row className="justify-content-md-center">
        <Table striped bordered hover size="sm" style={{width: '30%'}}>
          <thead style={{textAlign: 'center'}}>
            <tr>
              <th style={{width: '10%'}}>Id</th>
              <th style={{width: '50px'}}>Provinsi</th>
              <th style={{width: '50px'}}>Kontrasepsi</th>
              <th style={{width: '50px'}}>Pemakai</th>
              <th style={{width: '50px'}}>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.post.map((post, id) => {
              return (
                <tr style={{textAlign: 'center'}} key={id}>
                  <td>{post.Id_List}</td>
                  <td>{post.Id_Propinsi}</td>
                  <td>{post.Id_Kontrasepsi}</td>
                  <td>{post.Jumlah_Pemakai}</td>
                  <td>
                    <img src={iconDelete} style={{height: '30px'}} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Row>
    );
  }
}

export default TbPemakai;
