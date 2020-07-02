/** @format */
import React from 'react';
class Title extends React.Component {
  render() {
    return <h3 id="title" style={{textAlign: 'center'}}>{this.props.title}</h3>;
  }
}

export default Title;