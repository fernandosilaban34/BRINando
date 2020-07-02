/** @format */

import React from 'react';
import {Button} from 'react-bootstrap';

class Buttons extends React.Component {
  render(props) {
    return (
      <div>
        <Button className="buttons">{this.props.title}</Button>
      </div>
    );
  }
}

export default Buttons;
