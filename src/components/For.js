import React, { Component } from 'react';
import PropTypes from 'prop-types';
class For extends Component {
  static PropTypes = {
    in: PropTypes.array.isRequired,
    render: PropTypes.func.isRequired
  };
  render() {
    const { in: list, render: renderFn } = this.props;
    console.log(list);
    return (
      <div>
        This is the for component
        <h1>{list.map(renderFn)}</h1>
      </div>
    );
  }
}

export default For;
