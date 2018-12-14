import React, { Component } from 'react';
import PropTypes from 'prop-types';
class If extends Component {
  static propTypes = {
    condition: PropTypes.bool.isRequired,
    then: PropTypes.func.isRequired,
    else: PropTypes.func.isRequired
  };
  render() {
    const { condition, then: thenFn, else: elseFn } = this.props;
    return <div>{condition ? thenFn() : elseFn()}</div>;
  }
}

export default If;
