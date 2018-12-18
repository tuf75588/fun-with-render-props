import React, { Component } from 'react';
import PropTypes from 'prop-types';
class For extends Component {
  static propTypes = {
    in: PropTypes.array.isRequired,
    render: PropTypes.func
  };
  render() {
    const { in: list, render: renderFn } = this.props;
    console.log(list);
    return (
      <div>
        <h1>{list.map(renderFn)}</h1>
      </div>
    );
  }
}

export default For;
