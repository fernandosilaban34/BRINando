/** @format */
import React from 'react';
import {Table, Row} from 'react-bootstrap';
import iconDelete from '../../assets/icon-delete.png';
import axios from 'axios';

class DataPropinsi extends React.Component {
  state = {
    post: [],
  };

  componentDidMount() {
    axios.get('http://localhost:3111/list_propinsi').then((result) => {
      this.setState({
        post: result.data,
      });
    });
  }

  handleRemove = (data) => {
    console.log(data);
    axios
      .delete(`http://localhost:3111/list_propinsi/${data}`)
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
              <th style={{width: '2%'}}>Id</th>
              <th style={{width: '20%'}}>Nama Provinsi</th>
              <th style={{width: '1%'}}>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.post.map((post, id) => {
              return (
                <tr style={{textAlign: 'center'}} key={id}>
                  <td>{post.Id_Propinsi}</td>
                  <td>{post.Nama_Propinsi}</td>
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

export default DataPropinsi;
