import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import If from './components/If';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <If condition={false} then={() => <h1>yay!</h1>} else={() => <h1>else</h1>} />
      </div>
    );
  }
}

export default App;
