import React, { Component } from 'react';
import PropTypes from 'prop-types';
class For extends Component {
  static propTypes = {
    in: PropTypes.array.isRequired,
    render: PropTypes.func,
    reverse: PropTypes.bool
  };
  render() {
    const { in: list, render: renderFn, reverse } = this.props;
    console.log(list);
    if (reverse) {
      const reversedList = [...list];
      return <h1>{reversedList.reverse().map(renderFn)}</h1>;
    }
    return (
      <div>
        <h1>{list.map(renderFn)}</h1>
      </div>
    );
  }
}

export default For;
