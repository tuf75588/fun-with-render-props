import React, { Component } from 'react';

export default class Emoji extends Component {
  render() {
    const { children } = this.props;
    return (
      <h1>
        <span role='img' aria-label='emoji'>
          {children}
        </span>
      </h1>
    );
  }
}
