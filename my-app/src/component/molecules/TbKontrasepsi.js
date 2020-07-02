/** @format */

import React from 'react';
import {Row, Table} from 'react-bootstrap';
import iconDelete from '../../assets/icon-delete.png';
import axios from 'axios';

class TbKontrasepsi extends React.Component {
  state = {
    post: [],
  };

  componentDidMount() {
    axios.get('http://localhost:3111/list_propinsi').then((result) => {
      this.setState({
        post: result.data,
      });
      console.log(result);
    });
  }

  handleRemove = (data) => {
    console.log(data);
    axios
      .delete(`http://localhost:3111/list_kontrasepsi/${data}`)
      .then((res) => {
        console.log(res);
      });
  };
  render() {
    return (
      <div>
        <Row className="justify-content-md-center">
          <Table striped bordered hover size="sm" style={{width: '30%'}}>
            <thead style={{textAlign: 'center'}}>
              <tr>
                <th style={{width: '10%'}}>Id</th>
                <th style={{width: '50px'}}>Nama Kontrasepsi</th>
                <th style={{width: '50px'}}>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.post.map((post, id) => {
                return (
                  <tr style={{textAlign: 'center'}} key={id}>
                    <td>{post.Id_Kontrasepsi}</td>
                    <td>{post.Nama_Kontrasepsi}</td>
                    <td>
                      <img
                        src={iconDelete}
                        style={{height: '30px'}}
                        onClick={post.idmahasiswa}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Row>
      </div>
    );
  }
}

export default TbKontrasepsi;
